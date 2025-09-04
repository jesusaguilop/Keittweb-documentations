"use client";

import { useState, useEffect, useCallback } from 'react';
import { useI18n } from '@/context/I18nContext';

type SearchLink = {
  id: string;
  titleKey: string;
  keywords?: string[];
  manual: 'installation' | 'technical' | 'user';
}

const allSearchableLinks: SearchLink[] = [
  // Installation Manual
  { id: 'requirements', titleKey: 'navRequirements', manual: 'installation', keywords: ['hardware', 'software', 'windows server', 'cpu', 'ram', 'storage'] },
  { id: 'windows-install', titleKey: 'navWinInstall', manual: 'installation', keywords: ['powershell', 'cmd', 'git clone'] },
  { id: 'github-setup', titleKey: 'navGithubSetup', manual: 'installation', keywords: ['repository', 'push', 'git remote'] },
  { id: 'github-repo', titleKey: 'installGitRepoTitle', manual: 'installation' },
  { id: 'github-push', titleKey: 'installGitPushTitle', manual: 'installation' },
  { id: 'render-deploy', titleKey: 'navRenderDeploy', manual: 'installation', keywords: ['deployment', 'web service', 'static site', 'build command'] },
  // Technical Manual
  { id: 'architecture', titleKey: 'navArchitecture', manual: 'technical', keywords: ['frontend', 'backend', 'database', 'decoupled'] },
  { id: 'tech-frontend', titleKey: 'techArchFeTitle', manual: 'technical', keywords: ['angular', 'spa'] },
  { id: 'tech-backend', titleKey: 'techArchBeTitle', manual: 'technical', keywords: ['django', 'python', 'restful api'] },
  { id: 'tech-database', titleKey: 'techArchDbTitle', manual: 'technical', keywords: ['postgresql', 'orm', 'migrations'] },
  { id: 'processes', titleKey: 'navProcesses', manual: 'technical' },
  { id: 'process-auth', titleKey: 'techProcAuthTitle', manual: 'technical', keywords: ['jwt', 'token', 'login'] },
  { id: 'process-analysis', titleKey: 'techProcAnalysisTitle', manual: 'technical', keywords: ['soil analysis', 'form'] },
  { id: 'folder-structure', titleKey: 'navFolderStructure', manual: 'technical' },
  { id: 'local-deployment', titleKey: 'navLocalDeploy', manual: 'technical', keywords: ['venv', 'pip install', 'runserver'] },
  // User Manual
  { id: 'login', titleKey: 'navLogin', manual: 'user', keywords: ['credentials', 'password'] },
  { id: 'modules', titleKey: 'navModules', manual: 'user' },
  { id: 'module-home', titleKey: 'userHomeModuleTitle', manual: 'user' },
  { id: 'module-soil', titleKey: 'userSoilModuleTitle', manual: 'user' },
  { id: 'module-farming', titleKey: 'userFarmingModuleTitle', manual: 'user' },
  { id: 'module-future', titleKey: 'userFutureModuleTitle', manual: 'user' },
  { id: 'faq', titleKey: 'navFaq', manual: 'user' },
];


type SearchResult = {
    id: string;
    title: string;
    manual: string;
};

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const { t, locale } = useI18n();

  useEffect(() => {
    const allLinks = allSearchableLinks.map(link => ({
        id: link.id, 
        title: t(link.titleKey), 
        manual: t(`${link.manual}Manual` as 'installationManual' | 'technicalManual' | 'userManual'),
        keywords: link.keywords || [],
    }));

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filteredResults = allLinks.filter(link =>
        link.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        link.manual.toLowerCase().includes(lowerCaseSearchTerm) ||
        link.keywords.some(kw => kw.toLowerCase().includes(lowerCaseSearchTerm))
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm, locale, t]); // Re-run on locale/t change

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setResults([]);
  }, []);

  return { searchTerm, setSearchTerm, results, clearSearch };
}
