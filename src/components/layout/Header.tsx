"use client"

import { Search, Globe, Moon, Sun } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { useSearch } from "@/hooks/useSearch";
import { useI18n } from "@/context/I18nContext";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { searchTerm, setSearchTerm, results, clearSearch } = useSearch();
  const { setLocale, t } = useI18n();
  const { theme, setTheme } = useTheme();

  const handleResultClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Highlight the element briefly
      element.style.transition = 'background-color 0.5s ease-in-out';
      element.style.backgroundColor = 'hsla(var(--primary), 0.2)';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 1500);
    }
    clearSearch();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 px-4 md:px-6 backdrop-blur-sm">
      <SidebarTrigger className="lg:hidden" />
      <h1 className="hidden md:block font-headline text-lg md:text-xl font-bold text-foreground/80">
        {t('documentationTitle')}
      </h1>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={t('searchPlaceholder')}
          className="w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[320px]"
          aria-label={t('searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {results.length > 0 && searchTerm && (
          <div className="absolute top-full mt-2 w-full max-h-80 overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md z-50">
            <ul>
              {results.map((result) => (
                <li key={result.id}>
                  <button onClick={() => handleResultClick(result.id)} className="w-full text-left block p-2.5 hover:bg-accent border-b border-border/50 last:border-b-0">
                    <div className="font-bold text-sm">{result.title}</div>
                    <div className="text-xs text-muted-foreground">{result.manual}</div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t('toggleTheme')}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            {t('light')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            {t('dark')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            {t('system')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t('changeLanguage')}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setLocale('es')}>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setLocale('en')}>
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
