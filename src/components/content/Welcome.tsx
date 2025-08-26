import type { Dispatch, SetStateAction } from 'react';
import { FileText, BookOpen, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";
import { Button } from '@/components/ui/button';

export default function Welcome({ setActiveManual }: { setActiveManual: Dispatch<SetStateAction<string>> }) {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('welcomeTitle')}>
      <p>{t('welcomeDesc1')}</p>
      <p>{t('welcomeDesc2')}</p>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <Button variant="ghost" className="h-full p-0" onClick={() => setActiveManual('installation')}>
          <Card className="hover:shadow-lg transition-shadow w-full h-full text-center flex flex-col justify-center items-center">
            <CardHeader className="items-center">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">{t('welcomeCard1Title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-4">{t('welcomeCard1Desc')}</p>
            </CardContent>
          </Card>
        </Button>
        <Button variant="ghost" className="h-full p-0" onClick={() => setActiveManual('technical')}>
          <Card className="hover:shadow-lg transition-shadow w-full h-full text-center flex flex-col justify-center items-center">
            <CardHeader className="items-center">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">{t('welcomeCard2Title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-4">{t('welcomeCard2Desc')}</p>
            </CardContent>
          </Card>
        </Button>
        <Button variant="ghost" className="h-full p-0" onClick={() => setActiveManual('user')}>
          <Card className="hover:shadow-lg transition-shadow w-full h-full text-center flex flex-col justify-center items-center">
            <CardHeader className="items-center">
              <Users className="w-10 h-10 text-primary mb-4" />
              <CardTitle className="font-headline text-2xl">{t('welcomeCard3Title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-4">{t('welcomeCard3Desc')}</p>
            </CardContent>
          </Card>
        </Button>
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-primary/20">
        <h3 className="font-headline text-2xl mb-2 flex items-center gap-3"><FileText className="w-6 h-6"/>{t('welcomeBoxTitle')}</h3>
        <p className="text-foreground/80" dangerouslySetInnerHTML={{ __html: t('welcomeBoxDesc').replace('Manual de Instalación', `<strong>${t('installationManual')}</strong>`) }} />
      </div>
    </ContentWrapper>
  );
}
