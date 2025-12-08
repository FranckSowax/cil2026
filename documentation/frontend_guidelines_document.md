# Frontend Guideline Document for CIL2026 Website

This document outlines how we build and maintain the frontend of the CIL2026 website. It’s written in everyday language so anyone—from a content editor to a designer—can understand our setup without a deep technical background.

## 1. Frontend Architecture

### 1.1 Overview
- We’re using **WordPress** as our CMS, with a custom WordPress theme built in **PHP**, **HTML**, **CSS**, and **JavaScript**.
- All page layouts (homepage, Call for Papers, Registration, etc.) are PHP templates following WordPress’s template hierarchy.
- Assets (stylesheets and scripts) are bundled and optimized using **Webpack**.

### 1.2 Scalability, Maintainability & Performance
- **Scalability**: We break our CSS and JS into small, reusable modules (components). Adding new pages or sections means simply adding new modules—no monolithic files to untangle.
- **Maintainability**: We use a clear folder structure (see Component Structure below) and naming conventions (BEM) so any developer or designer can find and update code quickly.
- **Performance**: We minify and cache CSS/JS, lazy-load images, and use WordPress caching plugins. Webpack splits our code so only the needed scripts/styles load per page.

## 2. Design Principles

### 2.1 Usability
- Clear calls to action (“Register,” “Submit”) are always visible in the header and hero areas.
- Simple, consistent layouts guide users through content without confusion.

### 2.2 Accessibility
- We use semantic HTML tags (header, nav, main, section, footer).
- All images include descriptive `alt` text. Form fields have associated `<label>` elements.
- Contrast ratios meet WCAG AA standards to ensure readability.

### 2.3 Responsiveness
- We follow a **mobile-first** approach: base styles target small screens, then breakpoints scale up for tablets and desktops.
- Fluid grid and flexible images ensure the site looks good on any device.

## 3. Styling and Theming

### 3.1 Styling Approach
- We use **SASS** (a CSS pre-processor) for variables, nesting, and mixins.
- We follow the **BEM** (Block-Element-Modifier) methodology for class names—this keeps styles predictable and avoids conflicts.

### 3.2 Theming & Consistency
- All colors, fonts, and spacing come from SASS variables stored in `_variables.scss`. If branding changes, updating these variables updates the entire site.

### 3.3 Visual Style
- **Design Style**: Modern flat design—clean surfaces, clear typography, minimal shadows.
- **Color Palette**:
  - Primary Green: #006400 (used for buttons, links, accents)
  - Secondary Blue: #1E90FF (used for highlights, hover states)
  - Neutral Dark: #333333 (text)
  - Neutral Light: #F5F5F5 (backgrounds)
  - White: #FFFFFF (panels, cards)
- **Typography**: Times New Roman (reflects the academic brand). We use:
  - Headings: 700 weight
  - Body text: 400 weight, 16px base size

## 4. Component Structure

### 4.1 Folder Layout
```
src/
├── components/
│   ├── header/
│   │   ├── header.php
│   │   ├── header.scss
│   │   └── header.js
│   ├── hero/
│   ├── footer/
│   └── form/
│       ├── form.php
│       ├── form.scss
│       └── form.js
├── pages/
│   ├── homepage.php
│   └── call-for-papers.php
└── assets/
    ├── images/
    └── fonts/
```

### 4.2 Reusability
- Each component folder contains its template, style, and script.
- Shared components (buttons, cards, modals) live in `components/shared/`.
- This way, updating a button style in one place updates it everywhere.

## 5. State Management

- We rely on **vanilla JavaScript modules**—no heavy frameworks.
- A global `App` object (attached to `window`) handles simple state tasks like:
  - Fee calculation in the registration form.
  - Toggling mobile navigation.
  - Displaying confirmation modals after form submission.
- WordPress’s `wp_localize_script` passes dynamic data (like fee tiers, deadlines) from PHP to these modules.

## 6. Routing and Navigation

- We’re using native WordPress routing: each page has its own URL based on permalinks (e.g., `/register`, `/call-for-papers`).
- The main menu is built via WordPress’s **Menu** system so organizers can add/remove links in the admin area without touching code.
- On mobile, a “hamburger” button toggles the main menu via our header component’s JS.

## 7. Performance Optimization

- **Lazy Loading**: All non-critical images (e.g., partner logos carousel, footer graphics) use `loading="lazy"`.
- **Code Splitting**: Webpack generates separate bundles for homepage scripts vs. form scripts—so users only download what they need.
- **Asset Minification**: CSS and JS are minified in production builds. Images are optimized (compressed) during the build process.
- **Caching**: We recommend a WordPress caching plugin (e.g., WP Super Cache) and leverage browser caching via proper headers.

## 8. Testing and Quality Assurance

### 8.1 Automated Testing
- **JavaScript Unit Tests**: We use **Jest** to test critical functions (e.g., fee calculators).
- **End-to-End Tests**: **Cypress** scripts simulate user flows: filling forms, submitting papers, registering.

### 8.2 Manual QA
- We run through all pages on desktop, tablet, and mobile to catch layout issues.
- We check forms in real email clients to confirm confirmation/reminder emails render properly.

### 8.3 Accessibility & Performance Checks
- **Lighthouse** CI runs on every build to monitor performance scores, accessibility issues, and best practices.
- We address any new warnings before deployment.

## 9. Conclusion and Frontend Summary

This guideline covers how we structure, style, and maintain the CIL2026 frontend:
- A **modular, component-based architecture** using WordPress templates.
- Clear **design principles** around usability, accessibility, and responsive behavior.
- A **flat, modern look** with a green/blue palette and Times New Roman typography.
- **Vanilla JS modules** for small-scale state management and interactions.
- **Performance-focused** build process with lazy loading, code splitting, and caching.
- A **robust testing strategy** (Jest, Cypress, Lighthouse) to ensure reliability.

By following these guidelines, we keep our frontend easy to update, fast to load, and pleasant to use for academics, professionals, and students alike.