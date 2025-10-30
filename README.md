# Portfolio Elisa Antoniello

Un sito web portfolio moderno e minimal per Elisa Antoniello, studentessa del corso di Allestimento Scenico dell'Accademia Teatro alla Scala di Milano.

## 🎭 Caratteristiche

- **Design Minimal e Moderno**: Ispirato a Webflow, Notion e Apple
- **Completamente Responsive**: Ottimizzato per tutti i dispositivi
- **CMS Integrato**: Gestione contenuti con Decap CMS (ex Netlify CMS)
- **Chatbot Teatrale**: Assistente virtuale "La Maschera di Scena"
- **Animazioni Fluide**: Effetti spotlight e transizioni eleganti
- **SEO Ottimizzato**: Meta tag e struttura ottimizzata per i motori di ricerca

## 🛠️ Stack Tecnologico

- **Framework**: Next.js 14 con App Router
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (Netlify CMS)
- **Hosting**: Netlify
- **Icone**: Lucide React
- **Animazioni**: Framer Motion + CSS

## 🚀 Installazione e Setup

1. **Clona il repository**
   ```bash
   git clone [repository-url]
   cd elisa-portfolio
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Naviga su `http://localhost:3000`

## 📁 Struttura del Progetto

```
elisa-portfolio/
├── app/                    # App directory di Next.js
│   ├── layout.tsx         # Layout principale
│   ├── page.tsx           # Home page
│   └── globals.css        # Stili globali
├── components/            # Componenti React
│   ├── Navigation.tsx     # Navbar
│   ├── Hero.tsx          # Hero section
│   ├── PortfolioPreview.tsx # Anteprima portfolio
│   ├── Skills.tsx        # Sezione competenze
│   ├── Footer.tsx        # Footer
│   └── Chatbot.tsx       # Chatbot assistente
├── public/               # Asset statici
│   └── admin/           # Configurazione CMS
├── content/             # Contenuti gestiti dal CMS
└── netlify.toml        # Configurazione Netlify
```

## 🎨 Personalizzazione

### Colori
I colori sono definiti in `tailwind.config.ts`:
- **Theater**: Rosso teatrale desaturato (accent color)
- **Neutral**: Scala di grigi per testo e sfondi

### Font
Il sito utilizza Inter come font principale (sans-serif moderno).

## 📝 Gestione Contenuti

L'accesso al CMS è disponibile su `/admin` dopo il deploy su Netlify.

### Collezioni disponibili:
- **Progetti**: Portfolio completo con gallerie
- **Pagine**: About, CV, Contatti
- **Impostazioni**: Informazioni generali del sito
- **Chatbot**: Domande e risposte personalizzate

## 🔧 Prossimi Step

1. **Completare le pagine mancanti**:
   - About page con biografia completa
   - Portfolio page con tutti i progetti
   - Gallery page con lightbox
   - CV page con viewer PDF
   - Contatti page

2. **Implementare features avanzate**:
   - Sistema di ricerca
   - Multilingua (IT/EN)
   - Dark mode
   - Analytics

3. **Ottimizzazioni**:
   - Image optimization
   - Lazy loading
   - Performance improvements

## 📄 Licenza

© 2024 Elisa Antoniello. Tutti i diritti riservati.

---

Sviluppato con ❤️ per il mondo del teatro
