# Backend Structure Document

This document outlines the backend setup for the CIL2026 website. It’s written in clear, everyday language so anyone can follow along, even without an extensive technical background.

## 1. Backend Architecture

Overall, the site is built on WordPress, which provides a solid foundation through a combination of PHP code, a MySQL database, and a theme plus plugins:

- Core Framework: WordPress (PHP) follows a loosely MVC-like pattern (code organized into themes, plugins, and hooks).
- Custom Plugins: Handle paper submissions, registrations, email automation, and payment integrations.
- Theme Layer: Manages the look and feel (Times New Roman font, green/blue colors, responsive HTML/CSS/JS).
- REST API: WordPress’s built-in REST API serves content (pages, posts, menus) to the frontend and powers custom endpoints for forms.

How it supports project goals:
- Scalability: You can add more server resources (CPU, RAM) or spin up additional servers behind a load balancer. Caching layers reduce database load.
- Maintainability: WordPress updates can be applied via its dashboard or WP-CLI. Custom code is isolated in plugins, so updating the core/platform doesn’t overwrite site logic.
- Performance: Caching plugins, object caching (Redis/Memcached), and a CDN (like Cloudflare) ensure fast page loads.

## 2. Database Management

**Database Technology**
- Type: Relational (SQL)  
- System: MySQL (or compatible variant like MariaDB)

**Data Storage and Structure**
- WordPress Core Tables: store pages, posts, users, metadata, options, etc.
- Custom Tables: for submissions and registrations.
- File Storage: Uploaded documents (templates, paper files) live in the `wp-content/uploads` folder and are referenced by URL in the database.

**Data Management Practices**
- Backups: Daily database dumps via automated plugin or cron job.
- Indexing: Primary keys on ID fields, indexes on email and date columns for faster queries.
- Retention & Cleanup: Old submissions and registrations can be archived or purged automatically after the event.

## 3. Database Schema

### Human-Readable Schema

1. Table: `wp_paper_submissions`
   - Submission ID (number)
   - Author Name (text)
   - Institution (text)
   - Email (text)
   - Document Type (text: PDF/Word)
   - File URL (text)
   - Submission Date (datetime)

2. Table: `wp_registrations`
   - Registration ID (number)
   - Full Name (text)
   - Email (text)
   - Status (text: Student, Professional, etc.)
   - Workshop Choice (text)
   - Attendance Mode (text: In-person/Online)
   - Payment Method (text: Mobile Money/Credit Card/Cash)
   - Amount Paid (decimal)
   - Payment Status (text: Pending/Completed)
   - Registration Date (datetime)

### SQL Schema (MySQL/PostgreSQL)

```sql
-- Paper Submissions Table
CREATE TABLE wp_paper_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  author_name VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  document_type VARCHAR(50) NOT NULL,
  file_url TEXT NOT NULL,
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Registrations Table
CREATE TABLE wp_registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  status VARCHAR(100) NOT NULL,
  workshop_choice VARCHAR(255),
  attendance_mode VARCHAR(50) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  amount_paid DECIMAL(10,2) NOT NULL,
  payment_status VARCHAR(50) DEFAULT 'Pending',
  registered_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```  

## 4. API Design and Endpoints

We use WordPress’s REST API plus custom endpoints for form actions:

- Built-In Endpoints (read-only content):
  - GET `/wp-json/wp/v2/pages` – fetch static pages (Home, Présentation, etc.)
  - GET `/wp-json/wp/v2/posts` – fetch news or updates

- Custom Endpoints (plugin powered):
  - POST `/wp-json/cil/v1/submit-paper`
    • Accepts author details and file upload  
    • Returns confirmation message  
  - POST `/wp-json/cil/v1/register`
    • Accepts registration data, calculates fees, returns payment instructions  
  - POST `/wp-json/cil/v1/send-reminder`
    • Triggers automated reminder emails based on registration date

These endpoints allow JavaScript on the frontend to send and receive data without reloading pages, making the forms feel snappy and modern.

## 5. Hosting Solutions

The client already has a hosting plan and domain. Typical setup:

- Environment: Shared or VPS hosting with cPanel (LAMP stack: Linux, Apache/Nginx, MySQL, PHP 8.x).
- Domain: Managed via the hosting provider’s DNS console.
- SSL Certificate: Installed via Let’s Encrypt or hosting control panel.

Benefits:
- Reliability: Established hosting providers offer 99.9% uptime SLAs.
- Cost-Effectiveness: Shared/VPS plans keep costs low for an event website.
- Scalability: Can upgrade to a higher-tier plan or add a second server if traffic spikes.

## 6. Infrastructure Components

To keep things fast and smooth:

- Load Balancer (optional): Distributes traffic if you scale to multiple web servers.
- Caching Mechanisms:
  • Page Cache (W3 Total Cache or WP Super Cache)  
  • Object Cache (Redis or Memcached)  
  • Opcode Cache (PHP OPcache)
- CDN (e.g., Cloudflare): Serves images, scripts, and styles from edge servers around the world.
- SMTP Service (SendGrid, Mailgun, etc.): Reliable email delivery for confirmations and reminders.

All these parts work together to reduce server load, speed up delivery, and ensure visitors have a smooth experience.

## 7. Security Measures

Protecting user data and site integrity:

- HTTPS Everywhere: All pages served over SSL/TLS.
- WordPress Best Practices:
  • Keep core, theme, and plugins up to date  
  • Use strong admin passwords and unique user roles  
- Input Validation & Sanitization: All form inputs are checked server-side to prevent malicious data.
- File Upload Controls: Restrict file types (PDF, DOCX) and scan uploads for malware.
- Role-Based Access: Only organizers have `Administrator` rights; editors manage content.
- GDPR Compliance:
  • Privacy policy page drafted and linked in the footer  
  • Cookie consent banner plugin  
  • Data export/delete on user request

## 8. Monitoring and Maintenance

Keeping the backend healthy:

- Monitoring Tools:
  • UptimeRobot or Pingdom for site availability  
  • New Relic or Query Monitor plugin for performance insights
- Logging:
  • PHP error logs and access logs via cPanel  
  • Custom logging for submission and payment events
- Backups & Recovery:
  • Daily database exports to remote storage (Dropbox/S3)  
  • Weekly full site backups (files + database)
- Maintenance Routine:
  • Weekly checks for available updates  
  • Monthly review of server resource usage  
  • Pre-event load testing to simulate user spikes

## 9. Conclusion and Overall Backend Summary

The CIL2026 backend is a WordPress-based system enhanced with custom plugins, a reliable database, and a modern API layer. It’s hosted on a standard LAMP environment with SSL, CDN, and caching layers to ensure speed and uptime. Security and GDPR compliance are built in from day one, and monitoring plus automated backups keep everything running smoothly. This setup meets the project’s goals by making it easy for organizers to manage content, enabling paper submissions and registrations without requiring user accounts, and delivering a fast, secure experience to visitors on any device.