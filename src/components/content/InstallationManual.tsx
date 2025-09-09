import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CodeBlock } from "./CodeBlock";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";
import { AdditionalResources } from "./AdditionalResources";
import { AuthorContact } from "./AuthorContact";

export default function InstallationManual() {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('installTitle')}>
      <p>{t('installIntro')}</p>

      <ContentSection title={t('installReqsTitle')} id="requirements">
        <p>{t('installReqsDesc')}</p>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t('installTableComp')}</TableHead>
                <TableHead>{t('installTableReq')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{t('installTableOS')}</TableCell>
                <TableCell>{t('installTableOSVal')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('installTableCPU')}</TableCell>
                <TableCell>{t('installTableCPUVal')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>RAM</TableCell>
                <TableCell>{t('installTableRAM')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('installTableStorage')}</TableCell>
                <TableCell>{t('installTableStorageVal')}</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>{t('installTableSw')}</TableCell>
                <TableCell>{t('installTableSwVal')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </ContentSection>

      <ContentSection title={t('installWinTitle')} id="windows-install">
        <p>{t('installWinDesc')}</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>{t('installWinStep1')}</li>
            <li>{t('installWinStep2')}</li>
            <li>{t('installWinStep3')}</li>
            <li>{t('installWinStep4')}</li>
            <li>{t('installWinStep5')}</li>
        </ol>
        <CodeBlock>git clone https://github.com/tu-usuario/KeittWeb.git</CodeBlock>
      </ContentSection>
      
      <ContentSection title={t('installGitTitle')} id="github-setup">
          <p>{t('installGitDesc')}</p>
          <ContentSubSection title={t('installGitRepoTitle')} id="github-repo">
              <p>{t('installGitRepoDesc')}</p>
          </ContentSubSection>
          <ContentSubSection title={t('installGitPushTitle')} id="github-push">
              <p>{t('installGitPushDesc')}</p>
              <CodeBlock>{`git remote add origin https://github.com/tu-usuario/KeittWeb.git
git branch -M main
git push -u origin main`}</CodeBlock>
          </ContentSubSection>
      </ContentSection>

      <ContentSection title={t('installRenderTitle')} id="render-deploy">
        <p>{t('installRenderDesc')}</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>{t('installRenderStep1')}</li>
            <li>{t('installRenderStep2')}</li>
            <li>{t('installRenderStep3')}</li>
            <li>{t('installRenderStep4')}
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
                    <li><strong>{t('installRenderBEEnv')}</strong> Python</li>
                    <li><strong>{t('installRenderBEBuild')}</strong> `pip install -r requirements.txt && python manage.py migrate`</li>
                    <li><strong>{t('installRenderBEStart')}</strong> `gunicorn keittweb.wsgi`</li>
                </ul>
            </li>
            <li>{t('installRenderStep5')}</li>
            <li>{t('installRenderStep6')}</li>
            <li>{t('installRenderStep7')}
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
                    <li><strong>{t('installRenderFEBuild')}</strong> `npm install && ng build --configuration production`</li>
                    <li><strong>{t('installRenderFEPublic')}</strong> {t('installRenderFEPublicVal')}</li>
                </ul>
            </li>
            <li>{t('installRenderStep8')}</li>
        </ol>
        <div className="w-full h-48 md:h-64 relative mt-4">
            <Image src="https://placehold.co/800x400.png" alt={t('installRenderImgAlt')} fill style={{objectFit: 'cover'}} className="rounded-lg" data-ai-hint="deployment diagram" />
        </div>
      </ContentSection>

      <AdditionalResources
        pdfUrl="https://drive.google.com/file/d/13nRJd1uwOyPWeBNXa174HDe64bPsJ0Tq/view?usp=sharing"
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />

      <AuthorContact 
        author="Ángel David Vásquez Pedrozo"
        email="tenshidesu12345@gmail.com"
        phone="+57 3015042331"
      />
    </ContentWrapper>
  );
}