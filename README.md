# 🏛️ Terre di Giorgio — Organic Estate & Boutique Hospitality

Welcome to the official repository of **Terre di Giorgio**, a certified organic estate and boutique agriturismo located in Castiglione d'Orcia, Tuscany (Val d'Orcia UNESCO World Heritage site).

## 🌐 Live Website

Access the official web portal here:  
👉 **[https://s1rk0o.github.io/terre-di-giorgio/](https://s1rk0o.github.io/terre-di-giorgio/)**

---

## 🍃 Project Overview

This digital platform represents the sustainable and agronomic ecosystem of Terre di Giorgio, featuring:
* **Heritage & Estate (*Il Territorio*):** Historical background and commitment to certified organic agriculture in Val d'Orcia.
* **Boutique Hospitality (*Villa la Palazzetta*):** High-end eco-hospitality, organic km 0 dining, and panoramic wellness.
* **Artisanal Products (*I Nostri Prodotti*):** Organic Extra Virgin Olive Oil, Calus Red Wine, Diana Rosé, Grappa, and Tuscan Saffron.
* **ESG & Sustainability (*Sostenibilità*):** Comprehensive 2026 ESG metrics tracking Environmental (GRI 300), Social (GRI 400), and Governance (GRI 200) performance.

---

## ✨ Key Features

* 📱 **Fully Responsive Layout:** Optimized cross-device rendering from mobile viewports (320px–412px) to ultra-wide desktop monitors (up to 2560px) powered by CSS Grid, Flexbox, and fluid `clamp()` typography.
* 🌐 **Zero-Dependency Multilingual Engine (EN / IT):** In-memory client-side translation dictionary with real-time DOM synchronization and dynamic `<html>` `lang` switching.
* ♿ **Accessibility & WCAG 2.1 AA Compliance:** Accessible keyboard navigation via semantic `<button>` elements, `:focus-visible` styling, and screen-reader-friendly semantic structure.
* 📄 **Integrated ESG Distribution:** Direct download triggering for the prototype *Sustainability Report 2026 (PDF)* using native HTML5 attributes.
* 🦅 **Authentic Visual Identity:** Custom branding palette inspired by Tuscan landscapes (Rosso Brunello, Oro Senese, Warm Charcoal) and bespoke SVG vector assets.

---

## 📊 Performance & Quality Audit (Google Lighthouse)

Audited via Google Lighthouse under simulated 4G mobile profiles:

| Metric | Score | Status |
| :--- | :---: | :--- |
| **Performance** | **96 / 100** | 🟢 Optimal (FCP: 0.9s, TBT: 0ms, CLS: 0) |
| **Accessibility** | **91 / 100** | 🟢 WCAG 2.1 AA Semantics & Navigation |
| **Best Practices** | **100 / 100** | 🟢 HTTPS enforced, zero insecure APIs |
| **SEO** | **100 / 100** | 🟢 Semantic heading hierarchy & meta tags |

---

## 🛠️ Tech Stack & Architecture

* **Frontend:** HTML5 Semantics, CSS3 (Modern Flexbox, CSS Grid, Media Queries, Fluid Typography)
* **Scripting:** Vanilla JavaScript (ES6+) — client-side routing, DOM mutations, and localized event handling
* **CI/CD & Deployment:** GitHub Actions pipeline (`deploy.yml`) with automated zero-cost hosting on GitHub Pages
* **Typography:** Cormorant Garamond & Inter

---

## 📄 Repository Structure

```text
terre-di-giorgio/
├── .github/
│   └── workflows/
│       └── deploy.yml                       # CI/CD Automated deployment pipeline
├── index.html                               # Semantic HTML5 markup with data-i18n attributes
├── style.css                                # Pure CSS3 stylesheets with cache-busting parameters
├── script.js                                # Vanilla JS engine (localization & scroll behaviors)
├── favicon.png                              # Custom estate falcon icon
├── ESG Report 2026 - Terre di Giorgio.pdf   # Prototypical sustainability report (A4 PDF)
└── README.md                                # Project documentation & technical specs
```

---

## 📌 Author

Developed by **[Sergiy "s1rk0o" Tepchuk](https://github.com/s1rk0o)**  

Bachelor's Degree in Computer Science for Digital Enterprises (L-31)
Università Telematica Pegaso

📍 *Val d'Orcia, Tuscany, Italy*
