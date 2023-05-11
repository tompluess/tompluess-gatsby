# Wordpress best practice

Wenn ich Webseiten-Projekte unterstütze, haben sich bei mir die folgenden Ansätze bewährt.

## Image optimization

Um Bilder in einer angepassten Grösse und in modernen Webformaten bereitzustellen, benutze ich den [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/). Bisher bin ich mit der Gratisversion gut durchgekommen, und konnte massive Verschnellerungen der Seite erzielen (gemessen mit Ligthouse, [Lighthouse Metrics](https://lighthouse-metrics.com/app/tompluess/measure) oder [Google PageSpeed Insights](https://pagespeed.web.dev/?hl=de)).

## Analytics

Für Webseiten-Statistiken verwende ich [Plausible.io](https://plausible.io/docs/wordpress-integration), das Wordpress Plugin dazu ist [Plausible Analytics](https://wordpress.org/plugins/plausible-analytics/).

Die Statistiken können im Wordpress-Admin-Bereich eingebunden werden und sind so direkt für alle Wordpress Authoren sichtbar.

## SEO

[Math Rank](https://rankmath.com) bietet folgende Features:

* Es gibt viele konkrete Hinweise, wie eine Seite optimiert werden kann
* Fügt Meta-Description hinzu
* Lässt Social Previews gestalten
* Erstellt eine Sitemap (Inhaltsverzeichnis für Suchmaschinen)
* Anbindung an Google Search Console für Statistiken zu Keywords und Suchverhalten

Es braucht die folgenden zwei Plugins:

* [Rank Math SEO](https://de.wordpress.org/plugins/seo-by-rank-math/)
* Rank Math SEO PRO - kann vom Rank Math Pro Account geladen werden
