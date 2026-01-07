-- =====================================================
-- SCHEMA SUPABASE POUR CIL 2026
-- Colloque International de Libreville
-- =====================================================

-- Extension pour générer des UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABLE: inscriptions
-- Gère les inscriptions des participants au colloque
-- =====================================================
CREATE TABLE IF NOT EXISTS inscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    -- Informations personnelles
    civilite VARCHAR(10) NOT NULL CHECK (civilite IN ('M.', 'Mme', 'Dr', 'Pr')),
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telephone VARCHAR(30) NOT NULL,

    -- Informations professionnelles
    institution VARCHAR(255) NOT NULL,
    fonction VARCHAR(255) NOT NULL,
    pays VARCHAR(100) NOT NULL,
    ville VARCHAR(100) NOT NULL,

    -- Inscription
    categorie VARCHAR(20) NOT NULL CHECK (categorie IN ('etudiant', 'master', 'doctorant', 'enseignant', 'praticien')),
    tarif INTEGER NOT NULL,
    avec_atelier BOOLEAN DEFAULT FALSE,

    -- Paiement
    montant_total INTEGER NOT NULL,
    statut_paiement VARCHAR(20) DEFAULT 'en_attente' CHECK (statut_paiement IN ('en_attente', 'confirme', 'annule')),
    reference_paiement VARCHAR(100),
    mode_paiement VARCHAR(20) CHECK (mode_paiement IN ('carte', 'virement', 'mobile_money'))
);

-- Index pour recherches fréquentes
CREATE INDEX idx_inscriptions_email ON inscriptions(email);
CREATE INDEX idx_inscriptions_statut ON inscriptions(statut_paiement);
CREATE INDEX idx_inscriptions_categorie ON inscriptions(categorie);
CREATE INDEX idx_inscriptions_pays ON inscriptions(pays);

-- Trigger pour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_inscriptions_updated_at
    BEFORE UPDATE ON inscriptions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- TABLE: soumissions
-- Gère les soumissions de communications scientifiques
-- =====================================================
CREATE TABLE IF NOT EXISTS soumissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    -- Auteur principal
    auteur_civilite VARCHAR(10) NOT NULL CHECK (auteur_civilite IN ('M.', 'Mme', 'Dr', 'Pr')),
    auteur_nom VARCHAR(100) NOT NULL,
    auteur_prenom VARCHAR(100) NOT NULL,
    auteur_email VARCHAR(255) NOT NULL,
    auteur_telephone VARCHAR(30) NOT NULL,
    auteur_institution VARCHAR(255) NOT NULL,
    auteur_pays VARCHAR(100) NOT NULL,

    -- Co-auteurs (stockés en JSON)
    co_auteurs JSONB DEFAULT '[]'::jsonb,

    -- Communication
    titre VARCHAR(500) NOT NULL,
    axe_thematique VARCHAR(255) NOT NULL,
    mots_cles TEXT[] NOT NULL,
    resume TEXT NOT NULL CHECK (char_length(resume) <= 3000),
    fichier_url TEXT,

    -- Statut de la soumission
    statut VARCHAR(20) DEFAULT 'soumise' CHECK (statut IN ('soumise', 'en_evaluation', 'acceptee', 'refusee', 'revision')),
    commentaires_evaluateurs TEXT
);

-- Index pour recherches fréquentes
CREATE INDEX idx_soumissions_email ON soumissions(auteur_email);
CREATE INDEX idx_soumissions_statut ON soumissions(statut);
CREATE INDEX idx_soumissions_axe ON soumissions(axe_thematique);

CREATE TRIGGER update_soumissions_updated_at
    BEFORE UPDATE ON soumissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- TABLE: newsletter
-- Gère les abonnements à la newsletter
-- =====================================================
CREATE TABLE IF NOT EXISTS newsletter (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    email VARCHAR(255) NOT NULL UNIQUE,
    actif BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_newsletter_email ON newsletter(email);

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Activer RLS sur toutes les tables
ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE soumissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

-- Politique pour inscriptions: permettre l'insertion publique
CREATE POLICY "Allow public insert" ON inscriptions
    FOR INSERT
    WITH CHECK (true);

-- Politique pour soumissions: permettre l'insertion publique
CREATE POLICY "Allow public insert" ON soumissions
    FOR INSERT
    WITH CHECK (true);

-- Politique pour newsletter: permettre l'insertion publique
CREATE POLICY "Allow public insert" ON newsletter
    FOR INSERT
    WITH CHECK (true);

-- Politique pour lecture par email (pour vérification)
CREATE POLICY "Users can view own inscription" ON inscriptions
    FOR SELECT
    USING (email = current_setting('request.jwt.claims', true)::json->>'email');

CREATE POLICY "Users can view own soumission" ON soumissions
    FOR SELECT
    USING (auteur_email = current_setting('request.jwt.claims', true)::json->>'email');

-- =====================================================
-- VUES UTILES (pour le dashboard admin)
-- =====================================================

-- Vue des statistiques d'inscription
CREATE OR REPLACE VIEW stats_inscriptions AS
SELECT
    COUNT(*) as total_inscriptions,
    COUNT(*) FILTER (WHERE statut_paiement = 'confirme') as inscriptions_confirmees,
    COUNT(*) FILTER (WHERE avec_atelier = true) as avec_atelier,
    SUM(montant_total) FILTER (WHERE statut_paiement = 'confirme') as revenus_confirmes,
    COUNT(DISTINCT pays) as nombre_pays
FROM inscriptions;

-- Vue des statistiques de soumission
CREATE OR REPLACE VIEW stats_soumissions AS
SELECT
    COUNT(*) as total_soumissions,
    COUNT(*) FILTER (WHERE statut = 'soumise') as en_attente,
    COUNT(*) FILTER (WHERE statut = 'en_evaluation') as en_evaluation,
    COUNT(*) FILTER (WHERE statut = 'acceptee') as acceptees,
    COUNT(*) FILTER (WHERE statut = 'refusee') as refusees,
    COUNT(*) FILTER (WHERE statut = 'revision') as en_revision
FROM soumissions;

-- Vue des inscriptions par pays
CREATE OR REPLACE VIEW inscriptions_par_pays AS
SELECT
    pays,
    COUNT(*) as nombre,
    SUM(montant_total) FILTER (WHERE statut_paiement = 'confirme') as revenus
FROM inscriptions
GROUP BY pays
ORDER BY nombre DESC;

-- Vue des soumissions par axe thématique
CREATE OR REPLACE VIEW soumissions_par_axe AS
SELECT
    axe_thematique,
    COUNT(*) as nombre,
    COUNT(*) FILTER (WHERE statut = 'acceptee') as acceptees
FROM soumissions
GROUP BY axe_thematique
ORDER BY nombre DESC;
