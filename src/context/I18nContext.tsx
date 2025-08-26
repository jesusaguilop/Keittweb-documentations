"use client";

import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

type Locale = 'en' | 'es';
type Translations = Record<string, Record<Locale, string>>;

const translations: Translations = {
  documentationTitle: {
    es: 'Documentación KeittWeb',
    en: 'KeittWeb Documentation',
  },
  searchPlaceholder: {
    es: 'Buscar en la documentación...',
    en: 'Search in the documentation...',
  },
  changeLanguage: {
    es: 'Cambiar idioma',
    en: 'Change language',
  },
  welcome: {
    es: "Bienvenida",
    en: "Welcome",
  },
  installationManual: {
    es: "Manual de Instalación",
    en: "Installation Manual",
  },
  technicalManual: {
    es: "Manual Técnico",
    en: "Technical Manual",
  },
  userManual: {
    es: "Manual de Usuario",
    en: "User Manual",
  },
  footerContact: {
    es: "Contacto",
    en: "Contact",
  },
  footerRights: {
    es: "Todos los derechos reservados.",
    en: "All rights reserved.",
  }
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const t = (key: string) => {
    return translations[key]?.[locale] || key;
  };
  
  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
