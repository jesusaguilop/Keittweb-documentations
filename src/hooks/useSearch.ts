"use client";

import { useState, useEffect } from 'react';

const navLinks = {
    installation: [
        { id: 'requirements', title: 'Requerimientos' },
        { id: 'windows-install', title: 'Instalación en Windows' },
        { id: 'github-setup', title: 'Configuración de GitHub' },
        { id: 'render-deploy', title: 'Despliegue en Render' },
    ],
    technical: [
        { id: 'architecture', title: 'Arquitectura' },
        { id: 'processes', title: 'Procesos Principales' },
        { id: 'folder-structure', title: 'Estructura de Carpetas' },
        { id: 'local-deployment', title: 'Despliegue Local' },
    ],
    user: [
        { id: 'login', title: 'Ingreso al Sistema' },
        { id: 'modules', title: 'Módulos' },
        { id: 'faq', title: 'Preguntas Frecuentes' },
    ],
};

const allLinks = Object.entries(navLinks).flatMap(([manual, links]) => 
    links.map(link => ({...link, manual: `Manual de ${manual.charAt(0).toUpperCase() + manual.slice(1)}`}))
);


export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof allLinks>([]);

  useEffect(() => {
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filteredResults = allLinks.filter(link =>
        link.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, results };
}
