# Project Requirements Document (PRD)

## 1. Project Overview

**Paragraph 1:**\
This project is a responsive website to promote the 12th International Colloquium of Libreville (CIL2026); an academic and professional event on “Artificial Intelligence and Organizational Dynamics.” The site will inform visitors about the event’s theme, dates (March 23–27, 2026), location (Libreville, Gabon), partners, committees, program, and practical details. It must also collect scientific paper submissions and manage attendee registrations online.

**Paragraph 2:**\
We’re building this platform to streamline communication and administration for organizers and participants. Key objectives are:

*   Present clear, up-to-date event information
*   Enable free, open download of submission templates
*   Simplify paper submission and registration via user-friendly forms
*   Automate confirmations and deadline reminders
*   Empower organizers with a secure CMS to update news, program, deadlines, and pricing without coding\
    Success will be measured by user satisfaction (ease of finding info, completing forms), timely submissions and registrations, and smooth content management for organizers.

## 2. In-Scope vs. Out-of-Scope

**In-Scope (v1.0)**

*   Public pages: Home, Presentation & Context, Call for Papers, Program, Registration & Fees, Committees, Practical Info

*   Free downloads: Call for Papers PDF, Word template

*   Online forms:

    *   Paper submission form (name, affiliation, email, file upload, document type)
    *   Registration form (personal data, status dropdown, program options, payment method selection)

*   Automated emails: confirmations and deadline reminders

*   Admin area (WordPress) for organizers to edit news, program timeline, deadlines, fees, committee lists

*   Payment guidance: Mobile Money & credit card gateways plus display of bank transfer details

*   Responsive design (desktop, tablet, mobile)

*   GDPR-compliant privacy & data-protection notices

*   Secure HTTPS hosting and domain setup

**Out-of-Scope (v1.0)**

*   Multi-language support (only French)
*   User account creation or login for submissions/registrations
*   In-site payment processing (we’ll integrate gateways or display instructions)
*   Advanced analytics dashboards (basic traffic stats only)
*   Live streaming or virtual event platform
*   Mobile app

## 3. User Flow

**Paragraph 1:**\
A new visitor lands on the Home page and sees a hero banner with the CIL2026 logo, dates, location, and central theme. A scrolling partner-logo bar runs underneath. A countdown timer shows days until submission deadline. Two prominent buttons invite “Register” or “Submit a Paper.” Scrolling down reveals key dates and news snippets. The header menu links to detailed sections: Presentation & Context, Call for Papers, Program, Registration, Committees, Practical Info.

**Paragraph 2:**\
To download templates, users click “Call for Papers” and access PDF/Word files without logging in. Clicking “Submit a Paper” opens a form to enter name, affiliation, email, select document type, upload file, and submit. They instantly receive a confirmation email. If they choose “Register,” they fill in contact info, select status (which auto-calculates the fee), choose workshop options, and pick a payment method (Mobile Money, card, or bank transfer). On submit, they see payment instructions and get a confirmation plus reminder emails as deadlines approach.

## 4. Core Features

*   **Home Page:** Hero banner (logo, theme, dates, location), partner logos carousel, countdown timer, CTAs, news/dates highlights.
*   **Presentation & Context:** Detailed theme explanation, four thematic axes, optional “Message from the President,” illustrative map of Africa.
*   **Call for Papers:** Submission guidelines, formatting rules, process description, free PDF/Word template download.
*   **Paper Submission Form:** Name, institution, email, document type selector (extended abstract/paper), file upload, automatic confirmation email, submission forwarded via email.
*   **Registration & Fees Form:** Personal data, status dropdown (practitioner, researcher, doctoral student, student), workshop option, attendance mode, fee calculation, payment instructions, confirmation and reminders.
*   **Program & Timeline:** Interactive chronological bar with submission deadlines, workshop dates, conference days, gala; click for detail.
*   **Committees:** Lists of organizing and scientific committee members with roles and contact points.
*   **Practical Info:** Venue map (Google Maps), contact form, general inquiries email.
*   **Admin Area (WordPress CMS):** Secure login, WYSIWYG editors for pages, news, program, deadlines, fees; file-management for templates.
*   **Downloads Section:** Centralized folder for all public documents.
*   **Automated Email Service:** SMTP or transactional email for confirmations and reminders.
*   **Payment Integration Guidance:** Links or buttons for Mobile Money, credit card, plus bank transfer details.

## 5. Tech Stack & Tools

*   **CMS / Backend:** WordPress (PHP, MySQL)
*   **Frontend:** HTML5, CSS3 (responsive), JavaScript (vanilla or jQuery)
*   **Email Service:** SMTP transactional service (e.g., SendGrid, Mailgun)
*   **Payment Gateways:** Mobile Money API, credit card processor integration, plus static bank transfer details
*   **Maps:** Google Maps JavaScript API
*   **Hosting & Domain:** Linux-based hosting with HTTPS (SSL cert), DNS management
*   **GDPR & Privacy Notices:** Custom drafted legal text
*   **Admin IDE / Tools:** WordPress admin UI (no extra IDE needed)

## 6. Non-Functional Requirements

*   **Performance:** Page load < 2 seconds on mobile/desktop, optimized images and assets.
*   **Security:** HTTPS everywhere, input validation/sanitization on forms, WP security hardening, GDPR compliance, data encryption in transit.
*   **Scalability:** Handle concurrent users (up to several hundred submissions/registrations) without slowdown.
*   **Usability:** Clear navigation, mobile-first responsive design, accessibility (alt text, semantic markup).
*   **Availability:** 99.9 % uptime during peak periods (submission deadline, conference days).

## 7. Constraints & Assumptions

*   **WordPress CMS** is acceptable for non-technical content editing.
*   **French-only** content; no multi-language support needed.
*   **No user accounts**; submissions and registrations via open forms.
*   **Payment processing** may initially be guidance links rather than embedded checkout.
*   **Organizer materials** (logo vectors, precise color codes, detailed GDPR policy) will be provided before design.
*   **Mobile Money** and credit card APIs are available and affordable for integration.

## 8. Known Issues & Potential Pitfalls

*   **Email Deliverability:** Risk of confirmation/reminder emails landing in spam.

    *   *Mitigation:* Use reputable transactional email service with SPF/DKIM, clear subject lines.

*   **Form Abuse / Spam:** Open forms may attract spam submissions.

    *   *Mitigation:* Implement CAPTCHA or honeypot fields.

*   **Payment Gateway Limits:** Mobile Money APIs in Gabon might have rate or transaction limits.

    *   *Mitigation:* Confirm API terms early, provide fallback bank transfer.

*   **Content Updates by Non-Tech Users:** Risk of editors breaking layout.

    *   *Mitigation:* Use custom fields and guided templates in WordPress, restrict WYSIWYG styling options.

*   **Deadline Countdown:** Hard-coded target date needs automatic rollback or update.

    *   *Mitigation:* Build countdown based on a CMS field so organizers can update deadline in admin.

This PRD fully describes the first version of the CIL2026 website. It leaves no ambiguity about functionality, user journeys, tools, constraints, or non-functional needs. Subsequent technical documents (Tech Stack details, Frontend/Backend guidelines, File Structure) can be derived directly from this reference.
