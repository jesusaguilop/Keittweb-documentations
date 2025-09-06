import type { Dispatch, SetStateAction } from 'react';
import { BookOpen, ChevronDown, Home, Wrench, Users, Download, PanelLeft } from 'lucide-react';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


function NavSection({ title, icon: Icon, manualId, activeManual, setActiveManual, links }: { title: string, icon: React.ElementType, manualId: string, activeManual: string, setActiveManual: Dispatch<SetStateAction<string>>, links: {id: string, titleKey: string}[] }) {
    const isActive = activeManual === manualId;
    const { t } = useI18n();

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
                            <a href={`#${link.id}`} onClick={(e) => handleLinkClick(e, link.id)} className="block text-sm p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                                {t(link.titleKey)}
                            </a>
                        </li>
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    )
}

type SidebarNavProps = {
  activeManual: string;
  setActiveManual: Dispatch<SetStateAction<string>>;
};

export default function SidebarNav({ activeManual, setActiveManual }: SidebarNavProps) {
  const { t } = useI18n();
  return (
    <>
      <SidebarRail />
      <SidebarHeader className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/img/logo3.svg" alt="KeittWeb Logo" className="h-8 w-8" />
          <h2 className="text-xl font-bold font-headline text-primary group-data-[collapsible=icon]:hidden">KeittWeb</h2>
        </div>
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
      <SidebarFooter className="p-4 flex flex-col gap-2">
        <Button variant="outline" asChild className="w-full">
            <a href="/docs/documentacion-completa.pdf" download>
                <Download className="mr-2" />
                <span className="group-data-[collapsible=icon]:hidden">{t('downloadDocs')}</span>
            </a>
        </Button>
        <div className="text-xs text-muted-foreground text-center group-data-[collapsible=icon]:hidden">
            {t('docVersion')}
        </div>
      </SidebarFooter>
    </>
  );
}
