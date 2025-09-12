import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { FileText, BookOpen, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";
import { Button } from '@/components/ui/button';
import { ManualModal } from './ManualModal';

type ManualType = 'installation' | 'technical' | 'user';

export default function Welcome({ setActiveManual }: { setActiveManual: Dispatch<SetStateAction<string>> }) {
  const { t } = useI18n();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedManual, setSelectedManual] = useState<ManualType | null>(null);

  const handleCardClick = (manual: ManualType) => {
    setSelectedManual(manual);
    setModalOpen(true);
  };

  const handleViewDocs = () => {
    if (selectedManual) {
      setActiveManual(selectedManual);
    }
    setModalOpen(false);
  };

  const manualDetails: Record<ManualType, {
    icon: React.ElementType;
    titleKey: string;
    descKey: string;
    pdfUrl: string;
    videoUrl?: string;
    canvaUrl?: string;
  }> = {
    installation: {
      icon: BookOpen,
      titleKey: 'welcomeCard1Title',
      descKey: 'modalInstallDesc',
      pdfUrl: 'https://drive.google.com/file/d/13nRJd1uwOyPWeBNXa174HDe64bPsJ0Tq/view?usp=sharing',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    },
    technical: {
      icon: Wrench,
      titleKey: 'welcomeCard2Title',
      descKey: 'modalTechDesc',
      pdfUrl: 'https://drive.google.com/file/d/1HUntGzQ_3WjIdkxpwRgGTjmhvY7LRZef/view?usp=sharing',
      canvaUrl: 'https://gamma.app/docs/Guia-Interactiva-Web-de-Plan-de-Cultivos-de-Mangos-6al1qzr8g5lh6ow', // Placeholder
      // Placeholder
    },
    user: {
      icon: Users,
      titleKey: 'welcomeCard3Title',
      descKey: 'modalUserDesc',
      pdfUrl: 'https://drive.google.com/file/d/15-FWPfMwNkCc2qlaQoCfDtT0432uBYEy/view?usp=sharing',
      canvaUrl: 'https://www.canva.com/design/DAGwGieCpAQ/z6bKK5b_4hfmEmeoxEZX1A/edit?utm_content=DAGwGieCpAQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', // Placeholder
    }
  };

  return (
    <ContentWrapper title={t('welcomeTitle')}>
      <p className="md:text-lg">{t('welcomeDesc1')}</p>
      <p className="md:text-lg">{t('welcomeDesc2')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {(['installation', 'technical', 'user'] as ManualType[]).map((manual) => {
          const details = manualDetails[manual];
          const Icon = details.icon;
          return (
            <Card 
              key={manual}
              className="hover:shadow-lg transition-shadow w-full text-center flex flex-col justify-between p-4 cursor-pointer"
              onClick={() => handleCardClick(manual)}
            >
              <CardHeader className="items-center">
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <Icon className="w-8 h-8 text-primary" />
                  <span>{t(details.titleKey)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm px-4">{t('welcomeCard1Desc')}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-primary/20">
        <h3 className="font-headline text-2xl mb-2 flex items-center gap-3"><FileText className="w-6 h-6"/>{t('welcomeBoxTitle')}</h3>
        <p className="text-foreground/80" dangerouslySetInnerHTML={{ __html: t('welcomeBoxDesc').replace('Manual de Instalación', `<strong>${t('installationManual')}</strong>`) }} />
      </div>

      {selectedManual && (
        <ManualModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={t(manualDetails[selectedManual].titleKey)}
          description={t(manualDetails[selectedManual].descKey)}
          onViewDocs={handleViewDocs}
          pdfUrl={manualDetails[selectedManual].pdfUrl}
          videoUrl={manualDetails[selectedManual].videoUrl}
          canvaUrl={manualDetails[selectedManual].canvaUrl}
        />
      )}
    </ContentWrapper>
  );
}
