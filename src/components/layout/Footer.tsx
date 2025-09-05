
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
      title: 'Servicios',
      links: ['Análisis de Suelo', 'Recomendaciones', 'Planes de Cultivo', 'Consultoría'],
    },
    {
      title: 'Soporte',
      links: ['FAQ', 'Contacto', 'Tutoriales', 'Estado del Sistema'],
    },
    {
      title: 'Legal',
      links: ['Términos de Servicio', 'Política de Privacidad', 'Licencia'],
    },
     {
      title: 'Recursos',
      links: ['Blog', 'Casos de Éxito', 'Documentación', 'API'],
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
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="20" fill="hsl(var(--primary))"/>
                    <path d="M30 70L50 30L70 70H30Z" stroke="hsl(var(--primary-foreground))" strokeWidth="8" strokeLinejoin="round"/>
                </svg>
                 {/* Placeholder Logo 2 */}
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="hsl(var(--secondary))" />
                    <circle cx="50" cy="50" r="20" fill="hsl(var(--secondary-foreground))"/>
                </svg>
            </div>
             <p className="text-sm text-center md:text-left text-muted-foreground">Innovación para un campo más productivo.</p>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="font-bold text-foreground mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link}
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
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">Facebook</span><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">Twitter</span><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">RSS</span><Rss className="h-5 w-5" /></a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">&copy; {year} KeittWeb. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
}
