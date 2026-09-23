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
- Inhaber / Blog-Autor: Ramin Amini, Neuer Wall 1, 20354 Hamburg, kontakt@raitsolution.de, +49 40 65390431, Mobil +49 152 18903566.
- Einige Dateien beginnen mit UTF-8-BOM – beim Bearbeiten erhalten.

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
- Google Search Console + Unternehmensprofil einrichten; eigenes Foto für Team/Autor.
