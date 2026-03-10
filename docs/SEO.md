# SEO – Consultoría Belón

Resumen de la implementación SEO del sitio.

## 1. Meta tags y layout

- **Título y descripción**: Cada página pasa `title` y `description` al `BaseLayout`. Las descripciones están centralizadas en `src/config/seo.ts` (`pageMeta`).
- **Canonical**: Se genera la URL canónica absoluta por página (`getCanonicalUrl(pathname)`).
- **Robots**: Páginas normales `index, follow`. Aviso legal, política de privacidad y política de cookies con `noindex, nofollow`.

## 2. Open Graph y redes sociales

- **og:type**, **og:title**, **og:description**, **og:url**, **og:image**, **og:site_name**, **og:locale**, **og:locale:alternate**.
- **Twitter Card**: `summary_large_image` con título, descripción e imagen.
- **Imagen por defecto**: `src/config/seo.ts` → `defaultOgImage`. Recomendado sustituir por una imagen 1200×630 px en `public/img/og-default.png` para mejor resultado en redes.

## 3. Internacionalización (hreflang)

- **hreflang="x-default"**: Apunta a la versión en español.
- **hreflang="es"** y **hreflang="en"**: Enlaces alternativos por idioma en el `<head>`.

## 4. Estructura de datos (JSON-LD)

- **ProfessionalService**: Nombre, URL, logo, descripción, dirección, contacto (teléfono, email, idiomas).
- **WebSite**: Nombre, URL, editor, idiomas.

Los datos de la organización se editan en `src/config/seo.ts` (`organization`).

## 5. Sitemap y robots.txt

- **Sitemap**: Generado con `@astrojs/sitemap`. Tras el build aparece `sitemap-index.xml` (y `sitemap-0.xml` si aplica) en la raíz del sitio.
- **Descubrimiento**: En el `<head>` hay `<link rel="sitemap" href=".../sitemap-index.xml" />`.
- **robots.txt**: En `public/robots.txt` con `Allow: /` y `Sitemap: https://monticreativos.github.io/belon/sitemap-index.xml`.

## 6. Configuración del sitio

- **astro.config.mjs**: `site: 'https://monticreativos.github.io/belon'` para que el sitemap y las URLs canónicas usen el dominio correcto.
- **src/config/seo.ts**: `SITE_URL`, textos por defecto, `pageMeta` por ruta y datos de `organization`.

## 7. Checklist rápido

- [x] Meta description en todas las páginas
- [x] Título único por página
- [x] URL canónica por página
- [x] Open Graph y Twitter Card
- [x] hreflang (es, en, x-default)
- [x] JSON-LD (ProfessionalService + WebSite)
- [x] Sitemap XML generado en build
- [x] robots.txt con Sitemap
- [x] noindex en aviso legal, privacidad y cookies
- [ ] Imagen OG 1200×630 (opcional: crear `public/img/og-default.png` y actualizar `defaultOgImage` en `seo.ts`)

## 8. Próximos pasos recomendados

1. Crear imagen para redes 1200×630 y configurarla como `defaultOgImage`.
2. En Google Search Console: enviar el sitemap `https://monticreativos.github.io/belon/sitemap-index.xml`.
3. Revisar en Search Console la cobertura y las URLs canónicas.
4. Si el dominio pasa a ser propio (ej. belon.es), actualizar `site` en `astro.config.mjs` y `SITE_URL` en `src/config/seo.ts`.
