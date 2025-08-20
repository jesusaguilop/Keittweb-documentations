import { Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

export default function Header() {
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
        />
      </div>
    </header>
  );
}
