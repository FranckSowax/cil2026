flowchart TD
    Home[Home Page]
    Presentation[Présentation Et Contexte]
    CallForPapers[Appel À Communications]
    DownloadTemplates[Télécharger Templates PDF/Word]
    SubmissionForm[Formulaire Soumission]
    ConfirmationEmail[Mail Confirmation Soumission]
    Registration[Inscription Et Paiement]
    PaymentOptions[Options Paiement]
    ConfirmationEmailReg[Mail Confirmation Inscription]
    Program[Programme Et Chronologie]
    Committees[Comités]
    Practical[Infos Pratiques]
    AdminLogin[Connexion Admin]
    AdminDashboard[Tableau de Bord Admin]
    Home --> Presentation
    Home --> CallForPapers
    CallForPapers --> DownloadTemplates
    CallForPapers --> SubmissionForm
    SubmissionForm --> ConfirmationEmail
    Home --> Registration
    Registration --> PaymentOptions
    PaymentOptions --> ConfirmationEmailReg
    Home --> Program
    Home --> Committees
    Home --> Practical
    AdminLogin --> AdminDashboard