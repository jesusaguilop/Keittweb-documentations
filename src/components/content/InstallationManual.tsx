import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CodeBlock } from "./CodeBlock";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";
import { AdditionalResources } from "./AdditionalResources";
import { AuthorContact } from "./AuthorContact";
import { BookOpen } from "lucide-react";

export default function InstallationManual() {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('installTitle')} icon={BookOpen}>
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
        <p>{t('installRenderDescV2')}</p>
        <ol className="list-decimal list-inside space-y-4">
          <li>{t('installRenderV2Step1')}</li>
          <li>{t('installRenderV2Step2')}
            <div className="w-full h-auto relative mt-4">
              <Image src="https://picsum.photos/800/450" alt={t('installRenderV2ImgAlt1')} width={800} height={450} className="rounded-lg w-full" data-ai-hint="render dashboard" />
            </div>
          </li>
          <li>{t('installRenderV2Step3')}</li>
          <li>{t('installRenderV2Step4')}
            <div className="w-full h-auto relative mt-4">
              <Image src="https://picsum.photos/800/451" alt={t('installRenderV2ImgAlt2')} width={800} height={451} className="rounded-lg w-full" data-ai-hint="connect repository" />
            </div>
          </li>
          <li>{t('installRenderV2Step5')}</li>
          <li>{t('installRenderV2Step6')}</li>
          <li>{t('installRenderV2Step7')}
            <div className="w-full h-auto relative mt-4">
              <Image src="https://picsum.photos/800/452" alt={t('installRenderV2ImgAlt3')} width={800} height={452} className="rounded-lg w-full" data-ai-hint="deployment success" />
            </div>
          </li>
          <li>{t('installRenderV2Step8')}</li>
        </ol>
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
