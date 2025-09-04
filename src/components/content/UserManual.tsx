import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";

export default function UserManual() {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('userTitle')}>
      <p>{t('userIntro')}</p>

      <ContentSection title={t('userLoginTitle')} id="login">
        <p>{t('userLoginDesc')}</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>{t('userLoginStep1')}</li>
            <li>{t('userLoginStep2')}</li>
            <li>{t('userLoginStep3')}</li>
        </ol>
        <div className="w-full h-64 md:h-80 relative mt-4 border rounded-lg overflow-hidden">
            <Image src="https://placehold.co/800x600.png" alt={t('userLoginImgAlt')} fill style={{objectFit: 'cover'}} data-ai-hint="login screen" />
        </div>
      </ContentSection>

      <ContentSection title={t('userModulesTitle')} id="modules">
        <p>{t('userModulesDesc')}</p>
        
        <ContentSubSection title={t('userHomeModuleTitle')} id="module-home">
            <p>{t('userHomeModuleDesc')}</p>
        </ContentSubSection>

        <ContentSubSection title={t('userSoilModuleTitle')} id="module-soil">
            <p>{t('userSoilModuleDesc')}</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>{t('userSoilModuleStep1')}</li>
                <li>{t('userSoilModuleStep2')}</li>
                <li>{t('userSoilModuleStep3')}</li>
            </ol>
             <div className="w-full h-64 md:h-80 relative mt-4 border rounded-lg overflow-hidden">
                <Image src="https://placehold.co/800x600.png" alt={t('userSoilModuleImgAlt')} fill style={{objectFit: 'cover'}} data-ai-hint="data form" />
            </div>
        </ContentSubSection>

        <ContentSubSection title={t('userFarmingModuleTitle')} id="module-farming">
            <p>{t('userFarmingModuleDesc')}</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>{t('userFarmingIrrigation').split(': ')[0]}:</strong> {t('userFarmingIrrigation').split(': ')[1]}</li>
                <li><strong>{t('userFarmingSowing').split(': ')[0]}:</strong> {t('userFarmingSowing').split(': ')[1]}</li>
                <li><strong>{t('userFarmingCultivation').split(': ')[0]}:</strong> {t('userFarmingCultivation').split(': ')[1]}</li>
            </ul>
        </ContentSubSection>
        
        <ContentSubSection title={t('userFutureModuleTitle')} id="module-future">
            <p>{t('userFutureModuleDesc')}</p>
             <ul className="list-disc list-inside space-y-2">
                <li><strong>{t('userFutureFoliar').split(': ')[0]}:</strong> {t('userFutureFoliar').split(': ')[1]}</li>
                <li><strong>{t('userFutureHarvest').split(': ')[0]}:</strong> {t('userFutureHarvest').split(': ')[1]}</li>
            </ul>
        </ContentSubSection>
      </ContentSection>

      <ContentSection title={t('userFaqTitle')} id="faq">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{t('userFaq1Trigger')}</AccordionTrigger>
            <AccordionContent>{t('userFaq1Content')}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t('userFaq2Trigger')}</AccordionTrigger>
            <AccordionContent>{t('userFaq2Content')}</AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-3">
            <AccordionTrigger>{t('userFaq3Trigger')}</AccordionTrigger>
            <AccordionContent>{t('userFaq3Content')}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ContentSection>
    </ContentWrapper>
  );
}
