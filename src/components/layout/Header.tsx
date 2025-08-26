"use client"

import { Search, Globe } from "lucide-react";
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

export default function Header() {
  const { searchTerm, setSearchTerm, results } = useSearch();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-6 backdrop-blur-sm">
      <SidebarTrigger className="md:hidden" />
      <h1 className="hidden md:block font-headline text-xl font-bold text-foreground/80">
        Documentación KeittWeb
      </h1>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar en la documentación..."
          className="w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[320px]"
          aria-label="Buscar en la documentación"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {results.length > 0 && searchTerm && (
          <div className="absolute top-full mt-2 w-full rounded-md border bg-popover text-popover-foreground shadow-md z-50">
            <ul>
              {results.map((result) => (
                <li key={result.id}>
                  <a href={`#${result.id}`} className="block p-2 hover:bg-accent" onClick={() => setSearchTerm('')}>
                    <div className="font-bold">{result.title}</div>
                    <div className="text-sm text-muted-foreground">{result.manual}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">Cambiar idioma</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => alert("Cambiando a Español")}>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert("Cambiando a Inglés")}>
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
