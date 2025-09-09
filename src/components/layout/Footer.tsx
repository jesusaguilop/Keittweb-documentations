
"use client";

import { useState, useEffect } from 'react';
import { Separator } from "@/components/ui/separator";
import { useI18n } from '@/context/I18nContext';
import { Facebook, Twitter, Rss, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    {
      title: t('footerServicesTitle'),
      links: ['footerService1', 'footerService2', 'footerService3', 'footerService4'],
    },
    {
      title: t('footerSupportTitle'),
      links: ['footerSupport1', 'footerSupport2', 'footerSupport3', 'footerSupport4'],
    },
    {
      title: t('footerLegalTitle'),
      links: ['footerLegal1', 'footerLegal2', 'footerLegal3'],
    },
     {
      title: t('footerResourcesTitle'),
      links: ['footerResources1', 'footerResources2', 'footerResources3', 'footerResources4'],
    },
  ];

  return (
    <footer className="bg-background text-foreground/80 px-6 py-8 md:px-12">
      <div className="container mx-auto">
        {/* Fila superior */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logos */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4">
             <div className="flex items-center gap-4">
                {/* Placeholder Logo 1 */}
                <img src='/img/logo1.svg' alt='logo1' className='h-10 w-auto'/>
                 {/* Placeholder Logo 2 */}
                <img src='/img/logo2.svg' alt='logo2' className='h-10 w-auto'/>
            </div>
             <p className="text-sm text-center md:text-left text-muted-foreground">{t('footerSlogan')}</p>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-bold text-foreground mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((linkKey) => (
                    <li key={linkKey}>
                      <a href="#" className="text-sm text-muted-foreground opacity-60 cursor-not-allowed">
                        {t(linkKey)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Fila inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">&copy; {year} KeittWeb. {t('footerRights')}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">Facebook</span><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">Twitter</span><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">RSS</span><Rss className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
