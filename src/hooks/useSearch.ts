"use client";

import { useState, useEffect, useCallback } from 'react';
import { useI18n } from '@/context/I18nContext';

type NavLinks = {
  installation: { id: string; titleKey: string }[];
  technical: { id: string; titleKey: string }[];
  user: { id: string; titleKey: string }[];
};

const navLinks: NavLinks = {
    installation: [
        { id: 'requirements', titleKey: 'navRequirements' },
        { id: 'windows-install', titleKey: 'navWinInstall' },
        { id: 'github-setup', titleKey: 'navGithubSetup' },
        { id: 'render-deploy', titleKey: 'navRenderDeploy' },
    ],
    technical: [
        { id: 'architecture', titleKey: 'navArchitecture' },
        { id: 'processes', titleKey: 'navProcesses' },
        { id: 'folder-structure', titleKey: 'navFolderStructure' },
        { id: 'local-deployment', titleKey: 'navLocalDeploy' },
    ],
    user: [
        { id: 'login', titleKey: 'navLogin' },
        { id: 'modules', titleKey: 'navModules' },
        { id: 'faq', titleKey: 'navFaq' },
    ],
};

type SearchResult = {
    id: string;
    title: string;
    manual: string;
};

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const { t, locale } = useI18n();

  const allLinks = Object.entries(navLinks).flatMap(([manualKey, links]) => 
    links.map(link => ({
        id: link.id, 
        title: t(link.titleKey), 
        manual: t(`${manualKey}Manual` as 'installationManual' | 'technicalManual' | 'userManual')
    }))
  );

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
  }, [searchTerm, locale]); // Re-run on locale change

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return { searchTerm, setSearchTerm, results, clearSearch };
}
