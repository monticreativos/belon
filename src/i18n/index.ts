import es from "./es.json";
import en from "./en.json";
import type { Locale } from "./routes";

export const messages = {
  es,
  en
} as const;

export type Messages = typeof messages;

export function getTranslations(locale: Locale) {
  return messages[locale] ?? messages.es;
}

