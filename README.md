# DECLEAN Cleaning Services Website

A modern, lovable, multi-page React website for DECLEAN Cleaning Services, ready for GitHub Pages and custom domain.  
Brand colors, logo, and Google Forms integration included.

---

## Features

- Modern, mobile-friendly React UI (Vite)
- Brand colors: white, blue `#38b6ff`, accent teal `#008080`, light blue `#a8d0e6`
- Brand font: Poppins (Google Fonts)
- Hero logo (logo1.png)
- Multi-page: Home, About, Services, Get a Quote, Book a Clean, FAQ, Contact
- Forms integrated with Google Forms
- Trust badges, testimonials, social/contact links
- Easy deployment to GitHub Pages & custom domain

---

## 1. Quick Start

```sh
# Clone and install dependencies
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install

# Start the dev server
npm run dev
```

---

## 2. Project Structure

```
/
├── public/
│   └── assets/
│       ├── logo1.png   # Main hero logo
│       └── logo2.png   # Secondary logo
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/deploy.yml
├── package.json
├── vite.config.js
├── README.md
└── ...
```

---

## 3. Google Forms Integration

- Create your forms at [Google Forms](https://forms.google.com)
- Click “Send” > select the link icon, copy the form URL  
- In `/src/components/QuoteForm.jsx` and `/src/components/BookingForm.jsx`, set the `action` to your form’s POST URL
- Use your form’s field names (find by “Inspect Element” on your Google Form)
- When users submit, data goes straight to your Google Form responses!

---

## 4. Deploy to GitHub Pages

1. Commit & push your code to your GitHub repo.
2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will build and deploy `/dist` to the `gh-pages` branch automatically.
3. In repository Settings > Pages, set source to `gh-pages` branch.
4. Your site will be available at `https://<your-username>.github.io/<your-repo>/`

---

## 5. Using a Custom Domain

1. In repo Settings > Pages, add your custom domain (e.g., `www.example.com`)
2. Add a `CNAME` file (just the domain name inside) to your repo root.
3. Update your DNS to point your domain to GitHub Pages’ IPs (see GitHub docs).
4. Wait for DNS to propagate—your site is now live on your domain!

---

## 6. Brand Assets

- Logos: `/public/assets/logo1.png` (hero), `/public/assets/logo2.png`
- Colors:  
  - Blue: `#38b6ff`
  - Teal: `#008080`
  - Light Blue: `#a8d0e6`
  - White: `#fff`
- Font: [Poppins](https://fonts.google.com/specimen/Poppins)

---

## 7. Customization

- Edit `/src/pages/` for page content
- Edit `/src/components/QuoteForm.jsx` and `/src/components/BookingForm.jsx` to add your Google Form integration
- Edit `/src/components/Navbar.jsx` and `/src/components/Footer.jsx` for nav and social links.

---

## 8. License

MIT