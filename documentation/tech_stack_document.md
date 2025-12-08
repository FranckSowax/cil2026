# Tech Stack Document

This document explains, in everyday language, the technology choices we’ll use to build and run the CIL2026 website. Each section shows what tools we picked, why we picked them, and how they all work together to make a smooth, reliable, and easy-to-manage site.

## 1. Frontend Technologies
These are the tools that shape what you see and interact with in your browser:

- **HTML5**
  • Provides the structure of every page (headings, paragraphs, images, links).  
  • Ensures content is clear and search-engine friendly.
- **CSS3**
  • Controls the look and feel (colors, fonts, spacing).  
  • Uses modern layouts (Flexbox and Grid) to make the design responsive on phones, tablets, and desktops.  
  • Custom styles match the event’s green and blue branding.
- **JavaScript**
  • Adds interactivity, such as the countdown timer to submission deadlines and the clickable timeline in the Program section.  
  • Handles small dynamic updates without reloading the page.
- **WordPress Theme & Templates**
  • A custom theme built with PHP, HTML, CSS, and JavaScript that ties the design and content together.  
  • Lets us create page layouts and reusable components (like the hero banner or partner logo carousel).

These choices ensure:
- A clean, attractive interface that adapts to any device.  
- Fast page loads by using only the code we need.  
- Simple updates on the fly via WordPress (no coding required for most changes).

## 2. Backend Technologies
These power behind-the-scenes tasks like storing data, running forms, and sending emails:

- **WordPress (PHP 7.4+)**
  • Acts as the content management system (CMS) where we store pages, news, program items, and site settings.  
  • Offers an admin dashboard for non-technical organizers to log in, edit content, and manage submissions.
- **MySQL (or MariaDB)**
  • A database that securely holds all your data—registrations, communications submissions, program details.
- **Form Handling Plugins (e.g., WPForms or Gravity Forms)**
  • Power the online forms for paper submissions and event registrations.  
  • Automatically send confirmation emails when someone registers or submits a paper.
- **Payment Gateway Integrations**
  • **Mobile Money Gateway** for payments by phone (commonly used in the region).  
  • **Credit Card Gateway** (e.g., Stripe) for Visa/Mastercard payments.  
  • **Bank Transfer Details** displayed on the confirmation screen when users choose to pay by bank transfer.
- **SMTP Email Service (e.g., SendGrid or Mailgun)**
  • Ensures reliable delivery of all email notifications (confirmations, reminders) from the website.

Together, these components let participants:
- Fill out forms and get instant email receipts.  
- Pay securely by their preferred method.  
- Access freely downloadable documents (PDF and Word templates) without logging in.

## 3. Infrastructure and Deployment
This covers where the site lives and how updates get deployed safely:

- **Managed WordPress Hosting** (e.g., SiteGround, WP Engine)
  • Secure servers optimized for WordPress performance and uptime.  
  • Automated daily backups and server-level caching for speed.
- **Domain Registration**
  • We’ll register and configure the event’s domain (e.g., cil2026.org) as part of the plan.
- **Version Control & CI/CD**
  • **Git** for tracking code changes.  
  • **GitHub (or GitLab)** repository to store code.  
  • **GitHub Actions** or similar to automatically test and deploy updates to a staging site, then push to production when ready.
- **SSL Certificate (HTTPS)**
  • Free certificate via Let’s Encrypt to secure all data transfers.
- **Automated Backups**
  • Plugin like UpdraftPlus to keep off-site copies of the database and files.

This setup ensures:
- Fast, reliable site access around the clock.  
- Easy rollback and testing when introducing new features or updates.

## 4. Third-Party Integrations
These external services add extra functionality without reinventing the wheel:

- **Google Maps API**
  • Displays an interactive map of the Libreville venue under “Informations Pratiques.”
- **SMTP Email Provider (SendGrid or Mailgun)**
  • Handles bulk email delivery (confirmation messages, reminders) with high deliverability.
- **Payment Gateways**
  • Mobile Money and credit card integrations through established providers or WooCommerce extensions.
- **Google Analytics**
  • Tracks visitor numbers, page views, and user behavior to help organizers understand traffic patterns.
- **Cloudflare (CDN)**
  • Speeds up global access to images, scripts, and styles by caching them at data-centers worldwide.

## 5. Security and Performance Considerations
We’ve put measures in place to keep the site and user data safe and fast:

- **HTTPS Everywhere**
  • All pages and forms force a secure connection.
- **WordPress Security Plugin (e.g., Wordfence)**
  • Monitors for suspicious activity, enforces strong passwords, and blocks malicious login attempts.
- **Spam Protection**
  • reCAPTCHA on all public forms to prevent bots from flooding registrations or submissions.
- **GDPR Compliance**
  • A clear privacy policy and cookie-consent banner drafted for the event.
- **Caching & Minification**
  • Plugin like WP Rocket or W3 Total Cache to compress HTML, CSS, and JavaScript, plus browser caching for repeat visitors.
- **Image Optimization**
  • Automated tools (e.g., Smush) to reduce file sizes without losing quality, ensuring fast loads on mobile networks.

## 6. Conclusion and Overall Tech Stack Summary
By combining a WordPress-based backend with modern HTML/CSS/JavaScript on the front end, we get:

• A user-friendly editing environment for non-technical organizers.  
• Responsive, branded pages that look great on any device.  
• Secure, reliable data collection and payment processing.  
• Built-in tools for email notifications and reminders.  
• Scalable hosting and automated deployment for peace of mind.

Unique aspects of this stack include the integration of Mobile Money payments, a dynamic countdown and program timeline, and a fully custom WordPress theme that matches CIL2026’s academic yet dynamic brand. Every technology was chosen to meet your goals: inform visitors, collect submissions, manage registrations, and keep the site easy to update without writing a single line of code once it’s live.

With this tech stack in place, the CIL2026 website will be robust, secure, and ready to serve researchers, professionals, and students from around the world.