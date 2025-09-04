"use client";

import { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { useI18n } from '@/context/I18nContext';

export default function Footer() {
  const { t } = useI18n();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="px-6 pb-4">
      <Separator className="my-4" />
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-2 md:gap-0">
        <p>&copy; {year} KeittWeb. {t('footerRights')}</p>
        <p>{t('footerContact')}: <a href="mailto:soporte@keittweb.com" className="hover:text-primary transition-colors">soporte@keittweb.com</a></p>
      </div>
    </footer>
  );
}
