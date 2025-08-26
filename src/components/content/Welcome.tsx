import { FileText, BookOpen, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";

export default function Welcome() {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('welcomeTitle')}>
      <p>{t('welcomeDesc1')}</p>
      <p>{t('welcomeDesc2')}</p>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">{t('welcomeCard1Title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('welcomeCard1Desc')}</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Wrench className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">{t('welcomeCard2Title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('welcomeCard2Desc')}</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">{t('welcomeCard3Title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t('welcomeCard3Desc')}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-primary/20">
        <h3 className="font-headline text-2xl mb-2 flex items-center gap-3"><FileText className="w-6 h-6"/>{t('welcomeBoxTitle')}</h3>
        <p className="text-foreground/80" dangerouslySetInnerHTML={{ __html: t('welcomeBoxDesc').replace('Manual de Instalación', `<strong>${t('installationManual')}</strong>`) }} />
      </div>
    </ContentWrapper>
  );
}
