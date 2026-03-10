/**
 * Configuración central SEO - Consultoría Belón
 * Usar para meta tags, Open Graph, JSON-LD y canonical.
 */

export const SITE_URL = "https://monticreativos.github.io/belon";

export const seo = {
  siteName: "Consultoría Belón",
  siteNameEn: "Consultoría Belón",
  defaultTitle: "Consultoría Belón | Urbanismo e Inmobiliaria",
  defaultTitleEn: "Consultoría Belón | Urban planning and real estate",
  defaultDescription:
    "Consultoría urbanística, valoraciones inmobiliarias, gestión patrimonial y asesoramiento administrativo. Más de 25 años de experiencia en Marbella y Málaga.",
  defaultDescriptionEn:
    "Urban planning consultancy, property valuations, asset management and administrative law. Over 25 years of experience in Marbella and Málaga.",
  localeEs: "es_ES",
  localeEn: "en_GB",
  twitterHandle: "",
  /** URL absoluta de la imagen por defecto para Open Graph (recomendado 1200×630 px). */
  defaultOgImage: SITE_URL + "/img/consultoria-belon.png",
  /** Favicon y apple touch (ya referenciados con base en layout). */
} as const;

/** Títulos y descripciones por ruta (path sin base) para meta description. */
export const pageMeta: Record<string, { title: string; titleEn: string; description: string; descriptionEn: string }> = {
  "/": {
    title: "Consultoría Belón | Urbanismo e Inmobiliaria",
    titleEn: "Consultoría Belón | Urban planning and real estate",
    description:
      "Consultoría urbanística, valoraciones inmobiliarias, gestión patrimonial y asesoramiento administrativo. Más de 25 años de experiencia en Marbella y Málaga.",
    descriptionEn:
      "Urban planning consultancy, property valuations, asset management and administrative law. Over 25 years of experience in Marbella and Málaga.",
  },
  "/urbanismo": {
    title: "Urbanismo y gestión del suelo | Consultoría Belón",
    titleEn: "Urban planning and land management | Consultoría Belón",
    description:
      "Servicios de urbanismo: PGOU Marbella, licencias de obra y apertura, planeamiento, informes urbanísticos y disciplina urbanística en Málaga.",
    descriptionEn:
      "Urban planning services: master plan, building and opening licences, planning reports and enforcement in Marbella and Málaga.",
  },
  "/gestion-patrimonial": {
    title: "Gestión patrimonial inmobiliaria | Consultoría Belón",
    titleEn: "Property management | Consultoría Belón",
    description:
      "Gestión integral de patrimonio inmobiliario: alquiler, compraventa, mantenimiento y valoración de propiedades en la Costa del Sol.",
    descriptionEn:
      "Full-service real estate asset management: lettings, sales, maintenance and property valuations on the Costa del Sol.",
  },
  "/valoraciones": {
    title: "Tasaciones y valoraciones inmobiliarias | Consultoría Belón",
    titleEn: "Property valuations | Consultoría Belón",
    description:
      "Tasaciones inmobiliarias, peritación judicial, valoraciones fiscales y para operaciones vinculadas. Informes periciales en Málaga.",
    descriptionEn:
      "Property valuations, court expert reports, tax valuations and related-party transactions. Expert reports in Málaga.",
  },
  "/recursos-administrativos": {
    title: "Recursos administrativos | Consultoría Belón",
    titleEn: "Administrative law and appeals | Consultoría Belón",
    description:
      "Recursos administrativos, reclamaciones frente a la administración, multas y sanciones. Asesoramiento jurídico-administrativo en Málaga.",
    descriptionEn:
      "Administrative appeals, claims against authorities, fines and sanctions. Legal and administrative advice in Málaga.",
  },
  "/fiscalidad-inmobiliaria": {
    title: "Fiscalidad inmobiliaria | Consultoría Belón",
    titleEn: "Tax Advisory | Consultoría Belón",
    description:
      "Asesoramiento fiscal en operaciones inmobiliarias: compraventa, herencias, plusvalías y recursos frente a Hacienda y Catastro.",
    descriptionEn:
      "Tax advice on real estate: conveyancing, inheritance, capital gains and appeals to Tax and Land Registry.",
  },
  "/contacto": {
    title: "Contacto | Consultoría Belón",
    titleEn: "Contact | Consultoría Belón",
    description:
      "Contacte con Consultoría Belón para urbanismo, valoraciones, gestión patrimonial y recursos administrativos. Respuesta en la mayor brevedad.",
    descriptionEn:
      "Contact Consultoría Belón for urban planning, valuations, asset management and administrative law. We reply as soon as possible.",
  },
  "/aviso-legal": {
    title: "Aviso legal | Consultoría Belón",
    titleEn: "Legal notice | Consultoría Belón",
    description: "Aviso legal y condiciones de uso del sitio web de Consultoría Belón.",
    descriptionEn: "Legal notice and terms of use of Consultoría Belón website.",
  },
  "/politica-privacidad": {
    title: "Política de privacidad | Consultoría Belón",
    titleEn: "Privacy policy | Consultoría Belón",
    description: "Política de privacidad y protección de datos de Consultoría Belón (RGPD).",
    descriptionEn: "Privacy policy and data protection of Consultoría Belón (GDPR).",
  },
  "/politica-cookies": {
    title: "Política de cookies | Consultoría Belón",
    titleEn: "Cookie policy | Consultoría Belón",
    description: "Política de cookies del sitio web de Consultoría Belón.",
    descriptionEn: "Cookie policy of Consultoría Belón website.",
  },
};

/** URL base del sitio (con base path). */
export function getSiteUrl(): string {
  return SITE_URL;
}

/**
 * Construye la URL canónica absoluta.
 * @param path - Ruta sin base (ej. "/", "/contacto", "/en/contact")
 */
export function getCanonicalUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const normalized = p === "/" ? "/" : p.replace(/\/$/, "") + "/";
  return SITE_URL + normalized;
}

/** Datos de la organización para JSON-LD (Organization + LocalBusiness). */
export const organization = {
  name: "Consultoría Belón",
  legalName: "Consultoría Belón",
  url: SITE_URL,
  logo: SITE_URL + "/img/consultoria-belon.png",
  description: seo.defaultDescription,
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marbella",
    addressRegion: "Málaga",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-952-774-249",
    contactType: "customer service",
    email: "info@belon.es",
    areaServed: "ES",
    availableLanguage: ["Spanish", "English"],
  },
} as const;
