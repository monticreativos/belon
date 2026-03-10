export type Locale = "es" | "en";

/** Quita el base (ej. /belon) del pathname para que las rutas i18n no dupliquen base. */
export function pathnameWithoutBase(pathname: string, base: string): string {
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!b) return pathname;
  if (pathname === b || pathname === b + "/") return "/";
  if (pathname.startsWith(b + "/")) return pathname.slice(b.length) || "/";
  return pathname;
}

export const esToEn: Record<string, string> = {
  "/": "/en/",
  "/urbanismo": "/en/urban-planning",
  "/gestion-patrimonial": "/en/property-management",
  "/valoraciones": "/en/property-valuations",
  "/recursos-administrativos": "/en/administrative-law",
  "/contacto": "/en/contact"
};

export const enToEs: Record<string, string> = {
  "/en/": "/",
  "/en/urban-planning": "/urbanismo",
  "/en/property-management": "/gestion-patrimonial",
  "/en/property-valuations": "/valoraciones",
  "/en/administrative-law": "/recursos-administrativos",
  "/en/contact": "/contacto"
};

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function getPathForLocale(pathname: string, target: Locale): string {
  const current = getLocaleFromPath(pathname);

  if (current === target) return pathname || "/";

  if (current === "es" && target === "en") {
    return esToEn[pathname] ?? "/en/";
  }

  if (current === "en" && target === "es") {
    return enToEs[pathname] ?? "/";
  }

  return pathname;
}

