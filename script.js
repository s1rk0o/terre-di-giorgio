document.addEventListener("DOMContentLoaded", function() {
  
  // ==========================================
  // 1. DIZIONARIO DI TRADUZIONE (EN / IT)
  // ==========================================
  const translations = {
    en: {
      // NAV & HERO
      'nav-estate': 'The Estate',
      'nav-hospitality': 'Hospitality',
      'nav-craft': 'Our Craft',
      'nav-esg': 'ESG Metrics',
      'hero-subtitle': 'Organic Agriculture & Boutique Hospitality in the Heart of Val d\'Orcia',
      'hero-btn': 'Discover Our Land',
      'scroll-text': 'Scroll',
      
      // ABOUT
      'about-tag': 'Historical Estate & Organic Soil',
      'about-title': 'Where History Meets Soil Preservation',
      'about-subtitle': '120 Hectares of Certified Organic Heritage',
      'about-p1': 'Nestled at the foothills of Mount Amiata in the UNESCO-protected Val d\'Orcia, Terre di Giorgio is an organic farm that seamlessly blends ancestral Tuscan traditions with forward-thinking ecological stewardship. Spanning 120 hectares of pristine fields, ancient olive groves, and vineyards, the estate is dedicated to the preservation of biodiversity and soil health.',
      'about-p2': 'By restoring historic properties registered in the Leopoldino Land Registry, founder Alberto Giorgio brought a unique vision to life: creating a self-sustaining ecosystem. Today, we produce our signature organic wine Calus and premium olive oil, cultivating the land with the deepest respect for its natural rhythms.',
      
      // INITIATIVES
      'init-tag': 'Sustainable Stewardship',
      'init-title': 'Preserving the Val d\'Orcia Ecosystem',
      'card1-title': 'Polyculture & Biodiversity',
      'card1-desc': 'Instead of industrial monoculture, we cultivate a rich polycultural landscape. Alongside our Sangiovese vineyards, our certified fields sustain olive groves, ancient grains, and organic saffron, protecting the local flora and fauna of Mount Amiata.',
      'card2-title': '100% Organic Soil Care',
      'card2-desc': 'Across our 120 hectares of certified organic land, we prohibit synthetic fertilizers and chemical pesticides. We rely on natural green manure and biological soil management to restore and enhance organic matter, locking carbon in the ground.',
      'card3-title': 'Circular Craft & Heritage',
      'card3-desc': 'Sustainability is circular. We preserved the historic estate registered in the Leopoldino Land Registry and apply the same circular ethos to our products: wine lees and grape pomace are distilled into our Calus Grappa or returned to the soil as compost.',
      
      // HOSPITALITY
      'hosp-tag': 'Boutique Agriturismo',
      'hosp-title': 'Slow Living & Conscious Hospitality',
      'hosp-p1': 'Built in 1935 by the Conti Cervini and thoughtfully restored to respect its heritage, our estate offers an exclusive boutique retreat. With only 8 refined rooms and a total capacity of 20 guests, we ensure an intimate, low-impact experience that preserves the peaceful rhythms of the Tuscan countryside.',
      'hosp-p2': 'Guests can reconnect with nature by our panoramic pool facing Mount Amiata or dine at our organic restaurant. Operating for both internal guests and the public, the restaurant serves as a culinary window to the region, creating a sustainable economic ecosystem for local farmers and artisans.',
      'hosp-rooms': 'Rooms',
      'hosp-guests': 'Guests Max',
      'hosp-restaurant': 'Restaurant',
      'hosp-pool': 'Panoramic Pool',
      
      // PRODUCTS
      'prod-tag': 'The Estate Craft',
      'prod-title': 'The Liquid Icons of Val d\'Orcia',
      'calus-desc': 'Hand-harvested 100% Sangiovese from 7.5 hectares of certified organic vineyards. Aged in French oak barriques (Botte di rovere francese). Limited production of ~8,000 bottles (80 quintali). Aging potential: up to 25 years.',
      'calus-meta1': '<strong>Varietal:</strong> Sangiovese 100%',
      'calus-meta2': '<strong>Aging:</strong> French Oak Barrique',
      'diana-desc': '100% manual harvest (Raccolta Manuale) producing ~1,200–1,300 bottles (10 quintali) of refined powder-pink Rosato from pure Sangiovese grapes. Fresh citrus finish and violet floral notes.',
      'diana-meta1': '<strong>Harvest:</strong> 100% Manual',
      'diana-meta2': '<strong>Profile:</strong> Fresh & Elegant',
      'grappa-type': 'Artisanal Distillation',
      'grappa-desc': 'Artisanal distillation of Sangiovese pomace with flexible production of ~200 bottles, tailored specifically for the agriturismo. Crystal clear and exceptionally smooth.',
      'grappa-meta1': '<strong>Alcohol:</strong> 42% Vol',
      'grappa-meta2': '<strong>Production:</strong> ~200 Bottles',
      'oil-type': 'Olio Extra Vergine di Oliva Biologico',
      'oil-desc': 'Cold-pressed from 1,350 organic olive trees at the foothills of Mount Amiata. Limited harvest producing ~400 bottles (250ml) kept in dark cylindrical tins to preserve polyphenols.',
      'oil-meta1': '<strong>Trees:</strong> 1,350 Olive Trees',
      'oil-meta2': '<strong>Format:</strong> 250ml Protective Tin',
      'saffron-type': 'Zafferano in Stimmi Purissimi',
      'saffron-desc': 'Pure organic saffron threads, meticulously hand-picked at dawn. Dried traditionally to retain its deep crimson hue and intense aroma.',
      'saffron-meta1': '<strong>Format:</strong> 1 gr Glass Jar',
      'saffron-meta2': '<strong>Purity:</strong> Strictly Hand-Selected',
      
      // ESG TABLE & FOOTER
      'esg-tag': 'Strategic Indicators',
      'esg-title': 'Sustainability & ESG Metrics',
      'esg-subtitle': 'Tangible data reflecting our commitment to the environmental, social, and cultural preservation of Castiglione d\'Orcia.',
      'th-cat': 'Category',
      'th-ind': 'Sustainability Indicator',
      'th-val': 'Current Value / Status',
      'badge-env': 'Environmental',
      'badge-soc': 'Social Impact',
      'badge-gov': 'Governance',
      'esg1-title': 'Certified Organic Farming (100% Bio)',
      'esg1-desc': 'Strict prohibition of synthetic chemicals across 7.5 ha of vineyards and 1,350 olive trees. Fully manual harvest (Raccolta Manuale).',
      'esg1-val': '100% Certified Bio <span class="sub-val">(No Biodynamics)</span>',
      'esg2-title': 'Water Stewardship & Recirculation',
      'esg2-desc': 'Rainwater harvesting into dedicated storage basins with full recirculation for targeted vineyard irrigation (600 ml/m² summer quota).',
      'esg2-val': 'Closed-Loop <span class="sub-val">(Rainwater Recirculation)</span>',
      'esg3-title': 'AgTech Climate Monitoring & Crop Protection',
      'esg3-desc': 'On-site weather stations (Centraline meteo) tracking rainfall and wind patterns, paired with anti-hail nets (Reti antigrandine).',
      'esg3-val': 'Active <span class="sub-val">(Meteo Station & Anti-Hail)</span>',
      'esg4-title': 'Local Short Supply Chain (Km 0 Hospitality)',
      'esg4-desc': 'Percentage of culinary ingredients for the organic restaurant and agriturismo sourced directly from local Val d\'Orcia artisans and producers.',
      'esg4-val': '95% <span class="sub-val">(Km 0 Sourcing)</span>',
      'esg5-title': 'Year-Round Employment & Extended Season',
      'esg5-desc': '7–8 permanent local staff maintained across an extended operational season from March to early January.',
      'esg5-val': '7–8 Permanent Staff <span class="sub-val">(March – January Season)</span>',
      'esg6-title': 'Heritage Preservation & Local Sourcing',
      'esg6-desc': 'Bottles ordered from neighboring companies (Aziende vicine). Preservation of historic structures registered in the Leopoldino Land Registry.',
      'esg6-val': '100% Preservation <span class="sub-val">(Local Glass Bottling)</span>',
      'esg-note': '* Metrics and indicators are structured in alignment with the <strong>GRI (Global Reporting Initiative)</strong> Standards for Agriculture and Tourism sectors. Carbon sequestration estimates and organic soil metrics are verified through annual internal audits and regional organic certification bodies (Toscana Bio).',
      'esg-download': 'Download Full ESG Report (PDF)',
      'footer-stmt': '100% Certified Organic Estate & Heritage Preservation',
      'footer-copy': '© 2026 Terre di Giorgio. All Organic Rights Reserved.'
    },
    it: {
      // NAV & HERO
      'nav-estate': 'La Tenuta',
      'nav-hospitality': 'Ospitalità',
      'nav-craft': 'I Nostri Prodotti',
      'nav-esg': 'Metrics ESG',
      'hero-subtitle': 'Agricoltura Biologica & Ospitalità Boutique nel Cuore della Val d\'Orcia',
      'hero-btn': 'Scopri la Nostra Terra',
      'scroll-text': 'Scorri',
      
      // ABOUT
      'about-tag': 'Tenuta Storica & Suolo Biologico',
      'about-title': 'Dove la Storia Incontra la Tutela del Suolo',
      'about-subtitle': '120 Ettari di Patrimonio Biologico Certificato',
      'about-p1': 'Situata ai piedi del Monte Amiata nella Val d\'Orcia, patrimonio UNESCO, Terre di Giorgio è un\'azienda agricola biologica che fonde le tradizioni toscane con una gestione ecologica all\'avanguardia. Su 120 ettari di campi incontaminati, uliveti secolari e vigneti, la tenuta è dedicata alla preservazione della biodiversità.',
      'about-p2': 'Restaurando gli immobili storici iscritti al Catasto Leopoldino, il fondatore Alberto Giorgio ha dato vita a una visione unica: un ecosistema autosufficiente. Oggi produciamo il nostro vino biologico Calus e olio extravergine d\'oliva di alta qualità, coltivando la terra nel massimo rispetto dei suoi ritmi naturali.',
      
      // INITIATIVES
      'init-tag': 'Gestione Sostenibile',
      'init-title': 'Preservare l\'Ecosistema della Val d\'Orcia',
      'card1-title': 'Policoltura & Biodiversità',
      'card1-desc': 'Al posto della monocoltura industriale, coltiviamo un ricco paesaggio policulturale. Insieme ai nostri vigneti di Sangiovese, i nostri campi certificati ospitano uliveti, grani antichi e zafferano biologico, proteggendo la flora e la fauna locale.',
      'card2-title': 'Cura del Suolo 100% Biologica',
      'card2-desc': 'Nei nostri 120 ettari di terreno biologico certificato, vietiamo fertilizzanti sintetici e pesticidi chimici. Ci affidiamo al sovescio naturale per ripristinare la sostanza organica e trattenere il carbonio nel suolo.',
      'card3-title': 'Artigianato Circolare & Eredità',
      'card3-desc': 'La sostenibilità è circolare. Abbiamo preservato la tenuta storica del Catasto Leopoldino e applichiamo la stessa etica circolare ai nostri prodotti: le vinacce vengono distillate nella nostra Grappa Calus o restituite al suolo come compost.',
      
      // HOSPITALITY
      'hosp-tag': 'Agriturismo Boutique',
      'hosp-title': 'Slow Living & Ospitalità Consapevole',
      'hosp-p1': 'Costruita nel 1935 dai Conti Cervini e finemente restaurata, la nostra tenuta offre un rifugio boutique esclusivo. Con solo 8 raffinate camere e una capacità di 20 ospiti, garantiamo un\'esperienza intima a basso impatto ambientale.',
      'hosp-p2': 'Gli ospiti possono riconnettersi con la natura presso la nostra piscina panoramica di fronte al Monte Amiata o cenare al nostro ristorante biologico a Km 0, una finestra culinaria sul territorio per sostenere i produttori locali.',
      'hosp-rooms': 'Camere',
      'hosp-guests': 'Ospiti Max',
      'hosp-restaurant': 'Ristorante',
      'hosp-pool': 'Piscina Panoramica',
      
      // PRODUCTS
      'prod-tag': 'L\'Artigianato della Tenuta',
      'prod-title': 'Gli Iconici Liquidi della Val d\'Orcia',
      'calus-desc': 'Sangiovese 100% vendemmiato a mano da 7,5 ettari di vigneti biologici. Affinato in barrique di rovere francese. Produzione limitata di ~8.000 bottiglie (80 quintali). Potenziale di invecchiamento: fino a 25 anni.',
      'calus-meta1': '<strong>Vitigno:</strong> Sangiovese 100%',
      'calus-meta2': '<strong>Affinamento:</strong> Barrique di Rovere Francese',
      'diana-desc': 'Vendemmia 100% manuale per produrre ~1.200–1.300 bottiglie (10 quintali) di raffinato Rosato rosa tenue da uve Sangiovese in purezza. Finale fresco con note floreali di violetta.',
      'diana-meta1': '<strong>Vendemmia:</strong> 100% Manuale',
      'diana-meta2': '<strong>Profilo:</strong> Fresco ed Elegante',
      'grappa-type': 'Distillazione Artigianale',
      'grappa-desc': 'Distillazione artigianale di vinacce di Sangiovese con produzione flessibile di ~200 bottiglie, creata appositamente per l\'agriturismo. Cristallina ed eccezionalmente morbida.',
      'grappa-meta1': '<strong>Alcol:</strong> 42% Vol',
      'grappa-meta2': '<strong>Produzione:</strong> ~200 Bottiglie',
      'oil-type': 'Olio Extra Vergine di Oliva Biologico',
      'oil-desc': 'Olio estratto a freddo da 1.350 piante di olivo ai piedi del Monte Amiata. Produzione limitata di ~400 bottiglie (250ml) conservate in lattine scure per preservare i polifenoli.',
      'oil-meta1': '<strong>Piante:</strong> 1.350 Piante di Olivo',
      'oil-meta2': '<strong>Formato:</strong> Lattina Protettiva da 250ml',
      'saffron-desc': 'Puri stimmi di zafferano biologico, raccolti a mano all\'alba. Essiccati tradizionalmente per mantenere un colore rosso intenso e un aroma potente.',
      'saffron-meta1': '<strong>Formato:</strong> Vasetto da 1 gr',
      'saffron-meta2': '<strong>Purezza:</strong> Selezionato a Mano',
      
      // ESG TABLE & FOOTER
      'esg-tag': 'Indicatori Strategici',
      'esg-title': 'Sostenibilità & Indicatori ESG',
      'esg-subtitle': 'Dati concreti che riflettono il nostro impegno per la tutela ambientale, sociale e culturale di Castiglione d\'Orcia.',
      'th-cat': 'Categoria',
      'th-ind': 'Indicatore di Sostenibilità',
      'th-val': 'Valore Attuale / Stato',
      'badge-env': 'Ambientale',
      'badge-soc': 'Impatto Sociale',
      'badge-gov': 'Governance',
      'esg1-title': 'Agricoltura Biologica Certificata (100% Bio)',
      'esg1-desc': 'Divieto assoluto di sostanze chimiche di sintesi su 7,5 ha di vigneti e 1.350 ulivi. Vendemmia interamente manuale.',
      'esg1-val': '100% Biologico Certificato <span class="sub-val">(No Biodinamica)</span>',
      'esg2-title': 'Gestione dell\'Acqua & Ricircolo',
      'esg2-desc': 'Raccolta di acqua piovana in bacini dedicati con ricircolo completo per l\'irrigazione mirata dei vigneti (quota estiva 600 ml/m²).',
      'esg2-val': 'Circuito Chiuso <span class="sub-val">(Ricircolo Acqua Piovana)</span>',
      'esg3-title': 'Monitoraggio Climatico AgTech & Protezione',
      'esg3-desc': 'Stazioni meteorologiche in loco (Centraline meteo) per monitorare pioggia e vento, abbinate a reti antigrandine.',
      'esg3-val': 'Attivo <span class="sub-val">(Centralina Meteo & Antigrandine)</span>',
      'esg4-title': 'Filiera Corta Locale (Km 0 Ristorazione)',
      'esg4-desc': 'Percentuale di ingredienti per il ristorante biologico e l\'agriturismo acquistati direttamente da artigiani e produttori della Val d\'Orcia.',
      'esg4-val': '95% <span class="sub-val">(Forniture a Km 0)</span>',
      'esg5-title': 'Occupazione Annuale & Stagione Estesa',
      'esg5-desc': '7–8 dipendenti locali permanenti mantenuti lungo una stagione operativa estesa da marzo a inizio gennaio.',
      'esg5-val': '7–8 Staff Permanente <span class="sub-val">(Stagione Marzo – Gennaio)</span>',
      'esg6-title': 'Conservazione del Patrimonio & Vetro Locale',
      'esg6-desc': 'Bottiglie ordered da aziende vicine. Conservazione di strutture storiche iscritte al Catasto Leopoldino.',
      'esg6-val': '100% Conservazione <span class="sub-val">(Imbottigliamento Locale)</span>',
      'esg-note': '* Gli indicatori sono strutturati in conformità con gli standard <strong>GRI (Global Reporting Initiative)</strong> per l\'agricoltura e il turismo. Le stime di sequestro del carbonio sono verificate da audit interni e da certificatori biologici regionali (Toscana Bio).',
      'esg-download': 'Scarica il Report ESG Completo (PDF)',
      'footer-stmt': 'Tenuta 100% Biologica Certificata & Tutela del Patrimonio',
      'footer-copy': '© 2026 Terre di Giorgio. Tutti i Diritti Biologici Riservati.'
    }
  };

  // ==========================================
  // 2. GESTIONE CAMBIO LINGUA (EN / IT)
  // ==========================================
  const btnEN = document.getElementById('lang-en');
  const btnIT = document.getElementById('lang-it');

  function setLanguage(lang) {
    if (lang === 'it') {
      btnIT.classList.add('active');
      btnEN.classList.remove('active');
    } else {
      btnEN.classList.add('active');
      btnIT.classList.remove('active');
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (element.querySelector('.drop-cap')) {
          const dropChar = translations[lang][key].charAt(0);
          const restText = translations[lang][key].slice(1);
          element.innerHTML = `<span class="drop-cap">${dropChar}</span>${restText}`;
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
  }

  if (btnEN && btnIT) {
    btnEN.onclick = function() { setLanguage('en'); };
    btnIT.onclick = function() { setLanguage('it'); };
  }

  // ==========================================
  // 3. CAMBIO SFONDO HEADER ALLO SCROLL
  // ==========================================
  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ==========================================
  // 4. PULSANTE TORNA SU (BACK TO TOP)
  // ==========================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});