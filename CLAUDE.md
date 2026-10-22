# CLAUDE.md – raitsolution.de

## Arbeitsweise (Vorgabe des Inhabers, verbindlich)
- Antworten auf Deutsch, kurz und knapp. Keine Rückfragen, keine Optionen-Menüs – selbst entscheiden und umsetzen.
- Jede Änderung direkt committen und **direkt auf `main` pushen** (`git push origin HEAD:main`), ohne vorher zu fragen. Ist ein Session-Branch vorgegeben, zusätzlich dorthin pushen.
- Vor dem Push kurz selbst prüfen (Validierung unten), dann pushen und in 1–3 Sätzen melden, was live ist.
- Nur nachfragen, wenn Fakten fehlen, die man nicht erfinden darf (Preise, Zahlen, Namen, Rechtliches).
- Push-Fehler 403 = Claude GitHub App fehlt auf dem Repo → Inhaber auf https://github.com/apps/claude/installations/select_target verweisen.

## Projekt
- Statische Website (GitHub Pages, Domain in `CNAME`), kein Build-Schritt. Jede Seite hat ihr CSS inline.
- Zweisprachig: DE `name.html`, EN `name-en.html` (Startseite: `index.html` / `index-en.html`). Jede Änderung immer in **beiden** Sprachen machen.
- Seiten: Startseite, 13 Leistungsseiten (`qualitaetssicherung`, `anforderungsmanagement`, `projektmanagement`, `scrum-leadership`, `projekt-initiierung`, `ki-consulting`, `ki-automatisierung`, `cybersecurity`, `schulungen`, `personalbereitstellung`, `it-strategie`, `change-management`, `google-ads`), `karriere`, 6 Blogartikel `blog-{qa,anforderungen,ki,scrum,security,pm}`, Rechtstexte `impressum`/`datenschutz`/`agb` (noindex, EN = unverbindliche Übersetzung).
- Fonts: `fonts/inter-400.woff2` (Variable Font, `font-weight: 300 700`) + `playfair-700.woff2`, Preload in jedem `<head>`.
- Inhaber / Blog-Autor: Ramin Amini, Neuer Wall 1, 20354 Hamburg, kontakt@raitsolution.de, +49 40 65390431, Mobil +49 1515 7735046.
- Einige Dateien beginnen mit UTF-8-BOM – beim Bearbeiten erhalten.
- Sicherheit (22.10.2026): jede Seite hat `<meta http-equiv="Content-Security-Policy">` + `<meta name="referrer">` direkt nach dem viewport-Meta – auf neuen Seiten mitkopieren. Neue externe Quellen (Skripte, Bilder, Formular-Ziele, iframes) müssen in die CSP aller Seiten, sonst blockiert der Browser sie. Formulare haben Honeypot (`_gotcha` bei Formspree, `botcheck` bei Web3Forms) – nicht entfernen. Kein PHP/Server-Code (GitHub Pages).

## SEO-Konventionen (bei jeder neuen/geänderten Seite einhalten)
- `<title>` ≤ 65 Zeichen, endet auf ` | RAIT Solution`; Description ≤ 160 Zeichen.
- canonical auf sich selbst; hreflang `de`, `en`, `x-default` (= DE-URL) auf beiden Sprachversionen.
- og:* (inkl. og:locale de_DE/en_US + alternate) und twitter:*; Standardbild `https://raitsolution.de/og-image.png`.
- JSON-LD: Leistungsseiten = Service + BreadcrumbList + FAQPage; Blog = BlogPosting (Autor Ramin Amini) + BreadcrumbList; Startseite = @graph (ProfessionalService `#organization`, WebSite, WebPage) + FAQPage. FAQ-Schema muss exakt dem sichtbaren Text entsprechen.
- Leistungsseiten: H1 beginnt mit Keyword-Label (`<span class="sec-label h1-kw">… in Hamburg</span>` + Slogan).
- `sitemap.xml`: alle indexierbaren Seiten mit hreflang-Alternates, `lastmod` aktualisieren; noindex-Seiten nicht aufnehmen.
- Neue Blogartikel: DE + EN, sichtbares Datum (`<time>`), Link zur passenden Leistungsseite, Karte auf beiden Startseiten, Eintrag in Sitemap.

## Bestätigte Fakten (nicht ohne Rückmeldung ändern)
- KI-Projekte: 6–12 Wochen. KI-Automatisierung: Break-even in 6–12 Monaten.
- Personalbereitstellung: passende Profile innerhalb von **48 Stunden**.
- Kontaktformular Startseite: Rückmeldung innerhalb von 24 Stunden.
- Erstgespräch 30 Min. kostenlos; Start meist in 1–2 Wochen; remote/hybrid, vor Ort Hamburg + deutschlandweit. Keine Preise auf der Website.

## Validierung vor jedem Push
- Jede geänderte Seite parst (Python `html.parser`), jedes JSON-LD ist gültiges JSON, genau eine `<h1>`, alle lokalen Links/Dateien existieren, hreflang-Paare zeigen aufeinander.
- Optik bei Bedarf mit Playwright prüfen (Chromium vorinstalliert, `NODE_PATH=$(npm root -g)`), 390 px und 1280 px, kein horizontales Scrollen.

## Offen (später mit Inhaber)
- Unsplash-Bilder lokal hosten (Datenschutz; Unsplash ist in der Cloud-Umgebung gesperrt → Bilder vom Inhaber).
- Bing Webmaster Tools: angelegt (19.10.2026). Verifizierung (BingSiteAuth.xml / msvalidate.01) nie löschen. IndexNow-Schlüssel: `2b1943ad9f47bd576b5f3d124505a502` (Datei `2b1943ad9f47bd576b5f3d124505a502.txt` im Root, NIE löschen) – nach jedem Push geänderte URLs per POST an https://api.indexnow.org/indexnow melden.
- Google Search Console: **bestätigt 17.10.2026** (Datei `googleea5731aeba6e1495.html` + Meta-Tag auf `index*.html` – beides NIE löschen). Sitemap eingereicht 17.10.2026.
- Google-Unternehmensprofil: Inhaber macht es nicht selbst (braucht seinen Login + Google-Verifizierung) → gestrichen, nicht mehr nachfragen.
- Eigene Fotos von Inhaber/Team: **nein, endgültig** – nicht mehr nachfragen, Stock-/neutrale Bilder bleiben.
