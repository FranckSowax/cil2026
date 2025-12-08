# Proposition d’Architecture et de Plan de Réalisation pour le site CIL2026

## 1. Architecture Générale

1. Hébergement et Domaine  
   • Choix d’un hébergeur spécialisé WordPress (ex. : WP Engine, SiteGround)  
   • Certificat SSL/TLS (Let’s Encrypt ou fournisseur payant) pour HTTPS obligatoire  
   • Nom de domaine : cil2026.org (ou .cm/.ga selon préférences)  
   
2. CMS et Environnement Technique  
   • WordPress (dernier PHP 8+, MySQL/MariaDB)  
   • Thème enfant (Child Theme) basé sur un thème parent léger et accessible (ex. Astra, GeneratePress)  
   • Plugins essentiels gérés via Composer ou WP-CLI  

## 2. Sécurité et Bonnes Pratiques (Security by Design)

1. Hardening WordPress  
   • Désactiver l’édition de thème/plugin dans l’admin  
   • Renommer ou protéger `wp-config.php`  
   • Limiter l’accès au répertoire `/wp-admin` par IP ou via authentification HTTP basique  
   • Utiliser un plugin de sécurité (Wordfence, iThemes Security)  
   
2. Authentification & Contrôle d’accès  
   • Rôles WordPress personnalisés (Administrateur, Éditeur CIL, Lecteur)  
   • 2FA pour les comptes administrateurs (ex. : plugin Google Authenticator)  
   • Limitation des tentatives de connexion  
   
3. Protection des Formulaires et Données  
   • ReCAPTCHA v3 ou hCaptcha pour bloquer les spams  
   • Sanitation et validation côté serveur (Validation d’email, de pièce jointe)  
   • Non-stockage d’informations financières sensibles (rediriger vers Mobile Money/Credit Card externes)  
   
4. Sécurité des Cookies et en-têtes HTTP  
   • HTTP Strict Transport Security (HSTS)  
   • X-Frame-Options: SAMEORIGIN  
   • X-Content-Type-Options: nosniff  
   • Content-Security-Policy (CSP) restreinte  

## 3. Modules Fonctionnels et Plugins Recommandés

| Module                          | Fonctionnalité                                                                 | Plugin / Solution proposée              |
|---------------------------------|--------------------------------------------------------------------------------|-----------------------------------------|
| Formulaire de Contact / Soumission | Collecte des communications (PDF, Word), envoi auto d’accusé de réception       | Gravity Forms (+ Add-ons GDPR, File Upload) ou WPForms Pro |
| Module d’inscription            | Formulaire conditionnel, calcul automatique des frais, choix atelier            | Gravity Forms avec calculs, ou Formidable Forms         |
| Paiement                        | Intégration Mobile Money / CB + redirection vers page de confirmation            | Payer via PayPlug / Flutterwave / Stripe               |
| Gestion de documents            | Téléchargement du « Call for Communication » et gabarit Word sans login        | Download Monitor                          |
| Programme & Calendrier          | Affichage dynamique des dates, compte à rebours                                 | The Events Calendar + Countdown Timer Ultimate         |
| News & Dates clés               | Publication de news et deadlines, tri par catégorie                             | Native Posts + Shortcode de compte à rebours           |
| SEO & Performance               | Sitemap, optimisation cache, minification, image lazy-loading                   | Yoast SEO, WP Rocket / W3 Total Cache, Smush              |
| Sécurité                        | Firewall, scan de vulnérabilités, durcissement                                 | Wordfence ou iThemes Security Pro                    |
| RGPD & Confidentialité          | Consentement cookies, politique de confidentialité                              | Complianz ou Cookie Notice & Compliance               |
| Multilingue (Français uniquement) | Français par défaut, désactiver options multilingues                           | Pas de plugin nécessaire si site mono-langue           |

## 4. Structure du Site et Contenu

1. Page d’Accueil  
   - Hero : logo CIL2026, dates, lieu, thème  
   - Partenaires : carousel logos  
   - CTA : Boutons « S’inscrire » & « Soumettre Communication »  
   - News & Deadlines : section « À venir » avec compte à rebours  

2. Présentation & Contexte  
   - Texte sur l’IA et axes thématiques  
   - Éventuel mot du Président (PDF ou vidéo intégrée)  

3. Appel à Communications  
   - Consignes de soumission (formats, normes, gabarits)  
   - Formulaire + lien email  
   - Liste des revues partenaires  

4. Programme  
   - Ligne du temps des étapes clés  
   - Workshops Pré-CIL (23–24 mars)  
   - Planning CIL (25–27 mars + Gala)  

5. Inscription & Tarifs  
   - Tableau des tarifs par profil + options ateliers  
   - Formulaire dynamique avec calcul des frais  
   - Redirection vers confirmation & info paiement  

6. Comités  
   - Comité d’organisation  
   - Comité scientifique  
   - Coordonnateurs (avec photo, contacts)  

7. Informations Pratiques  
   - Carte Google Maps de Libreville  
   - Hébergement, transport, visa  
   - Formulaire de contact général  

8. Mentions Légales & Politique de Confidentialité  
   - RGPD (droit d’accès, de rectification)  
   - Utilisation des données personnelles  

## 5. Emails Automatiques

- Confirmation d’inscription  
- Accusé de réception de soumission  
- Rappel avant date limite (J–7, J–1)  
- Utilisation d’un service SMTP robuste (Sendinblue, Mailgun)  

## 6. Gestion par les Organisateurs

- Tableau de bord WP simplifié (ACF, Admin Columns)  
- Formation et documentation utilisateur (guide PDF + vidéo)  
- Sauvegardes automatisées hors site (UpdraftPlus vers Amazon S3)  

## 7. Planning et Livrables

| Phase                    | Tâches                                          | Durée Estimée  |
|--------------------------|-------------------------------------------------|----------------|
| Phase 1 – Conception     | Arborescence, wireframes, maquettes             | 2 semaines     |
| Phase 2 – Développement  | Mise en place WordPress, thème, plugins, sécurité | 4 semaines     |
| Phase 3 – Contenu        | Remplissage pages, import visuels, textes        | 2 semaines     |
| Phase 4 – Recette & Tests| Tests fonctionnels, sécurité, responsive         | 1 semaine      |
| Phase 5 – Mise en ligne  | DNS, SSL, formation, livraison                   | 1 semaine      |

---

Cette proposition prend en compte la robustesse, la sécurité et la simplicité de gestion. Chaque module s’appuie sur des plugins réputés et maintenus. La priorité est donnée à la protection des données, à la performance et à l’expérience utilisateur.
