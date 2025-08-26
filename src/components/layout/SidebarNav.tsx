import type { Dispatch, SetStateAction } from 'react';
import { BookOpen, ChevronDown, Home, Wrench, Users } from 'lucide-react';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useI18n } from '@/context/I18nContext';

type SidebarNavProps = {
  activeManual: string;
  setActiveManual: Dispatch<SetStateAction<string>>;
};

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

function NavSection({ title, icon: Icon, manualId, activeManual, setActiveManual, links }: { title: string, icon: React.ElementType, manualId: string, activeManual: string, setActiveManual: Dispatch<SetStateAction<string>>, links: {id: string, title: string}[] }) {
    const isActive = activeManual === manualId;
    return (
        <Collapsible defaultOpen={isActive}>
            <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between pr-2" onClick={() => setActiveManual(manualId)}>
                    <div className="flex items-center gap-2">
                        <Icon className={cn("h-5 w-5", isActive ? 'text-primary' : 'text-muted-foreground')} />
                        <span className={cn(isActive && 'font-bold text-primary')}>{title}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-180" />
                </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <ul className="pl-8 py-2 space-y-1 border-l ml-4 border-dashed">
                    {links.map(link => (
                         <li key={link.id}>
                            <a href={`#${link.id}`} className="block text-sm p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default function SidebarNav({ activeManual, setActiveManual }: SidebarNavProps) {
  const { t } = useI18n();
  return (
    <>
      <SidebarHeader className="p-4">
        <h2 className="font-headline text-2xl font-bold">KeittWeb</h2>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => setActiveManual('welcome')} isActive={activeManual === 'welcome'} className="justify-start">
              <Home className="h-5 w-5" />
              <span>{t('welcome')}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <NavSection title={t('installationManual')} icon={BookOpen} manualId="installation" activeManual={activeManual} setActiveManual={setActiveManual} links={navLinks.installation} />
          <NavSection title={t('technicalManual')} icon={Wrench} manualId="technical" activeManual={activeManual} setActiveManual={setActiveManual} links={navLinks.technical} />
          <NavSection title={t('userManual')} icon={Users} manualId="user" activeManual={activeManual} setActiveManual={setActiveManual} links={navLinks.user} />
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
            Documentación v1.0
        </div>
      </SidebarFooter>
    </>
  );
}
