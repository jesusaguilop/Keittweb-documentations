import { CodeBlock } from "./CodeBlock";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";
import { AdditionalResources } from "./AdditionalResources";

const TechIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    {children}
  </div>
);

const AngularLogo = () => (
  <svg className="h-8 w-8" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 203.9,186.3 218.1,63.2"/>
    <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2"/>
    <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2h21.7L125,52.1z M142,135.4H108.1l16.9-42.2L142,135.4z"/>
  </svg>
);

const DjangoLogo = () => (
    <svg className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM32 28.5C32 30.43 30.43 32 28.5 32H19.5C17.57 32 16 30.43 16 28.5V19.5C16 17.57 17.57 16 19.5 16H28.5C30.43 16 32 17.57 32 19.5V28.5Z" fill="#092E20"/>
        <path d="M28.5 18H19.5C18.67 18 18 18.67 18 19.5V28.5C18 29.33 18.67 30 19.5 30H28.5C29.33 30 30 29.33 30 28.5V19.5C30 18.67 29.33 18 28.5 18Z" fill="#FFF"/>
    </svg>
);

const PythonLogo = () => (
    <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.2,2.2c-1.3-1.2-3.1-1.8-5-1.8c-3.9,0-7.1,3.2-7.1,7.1c0,1.9,0.7,3.6,1.8,5c1.2,1.3,2.9,2,4.8,2 c1.9,0,3.6-0.7,4.8-1.8c1.3-1.2,2-2.9,2-4.8C14.2,5.1,13.4,3.4,12.2,2.2z M9.1,6.5c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9 c-0.5,0-0.9-0.4-0.9-0.9C8.2,6.9,8.6,6.5,9.1,6.5z" fill="#306998"/>
        <path d="M21.9,12.2c0-1.3-0.5-2.6-1.5-3.5c-1.2-1.1-2.7-1.7-4.4-1.7c-3.5,0-6.4,2.9-6.4,6.4c0,1.7,0.7,3.3,1.8,4.4 c1.1,1.2,2.6,1.8,4.2,1.8c1.7,0,3.3-0.7,4.4-1.8C21.3,16.7,21.9,14.6,21.9,12.2z M15.7,17.4c-0.5,0-0.8-0.4-0.8-0.8 c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8C16.5,17.1,16.1,17.4,15.7,17.4z" fill="#FFD43B"/>
    </svg>
);

const PostgreSQLLogo = () => (
    <svg className="h-8 w-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z" fill="#336791"/>
        <path d="M96 101V49C96 43.477 91.523 39 86 39H42V101H53V76H68.5V101H96Z" fill="white"/>
        <path d="M68.5 65H53V50H68.5C72.642 50 76 53.358 76 57.5C76 61.642 72.642 65 68.5 65Z" fill="white"/>
    </svg>
);


export default function TechnicalManual() {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('techTitle')}>
      <p>{t('techIntro')}</p>

      <ContentSection title={t('techArchTitle')} id="architecture">
        <p>{t('techArchDesc')}</p>
        <ContentSubSection title={t('techArchFeTitle')} id="tech-frontend">
            <TechIcon>
              <AngularLogo />
              <h4 className="font-bold text-lg md:text-xl">Angular 18</h4>
            </TechIcon>
            <p className="mt-2">{t('techArchFeDesc')}</p>
        </ContentSubSection>
        <ContentSubSection title={t('techArchBeTitle')} id="tech-backend">
            <TechIcon>
              <DjangoLogo/>
              <PythonLogo/>
              <h4 className="font-bold text-lg md:text-xl">Django + Python 3.10</h4>
            </TechIcon>
            <p className="mt-2">{t('techArchBeDesc')}</p>
        </ContentSubSection>
        <ContentSubSection title={t('techArchDbTitle')} id="tech-database">
            <TechIcon>
              <PostgreSQLLogo />
              <h4 className="font-bold text-lg md:text-xl">PostgreSQL</h4>
            </TechIcon>
            <p className="mt-2">{t('techArchDbDesc')}</p>
        </ContentSubSection>
      </ContentSection>

      <ContentSection title={t('techProcTitle')} id="processes">
        <ContentSubSection title={t('techProcAuthTitle')} id="process-auth">
            <p>{t('techProcAuthDesc')}</p>
        </ContentSubSection>
        <ContentSubSection title={t('techProcAnalysisTitle')} id="process-analysis">
            <p>{t('techProcAnalysisDesc')}</p>
        </ContentSubSection>
      </ContentSection>

       <ContentSection title={t('techFolderTitle')} id="folder-structure">
        <p>{t('techFolderDesc')}</p>
        <div className="text-base">
          <ul className="list-disc list-inside space-y-2">
              <li><code>keittweb/</code>: {t('techFolderKeittwebDesc')}
                  <ul className="list-disc list-inside ml-6 mt-1">
                      <li><code>settings.py</code>: {t('techFolderSettings')}</li>
                      <li><code>urls.py</code>: {t('techFolderUrls')}</li>
                  </ul>
              </li>
              <li><code>api/</code>: {t('techFolderApiDesc')}
                  <ul className="list-disc list-inside ml-6 mt-1">
                      <li><code>models.py</code>: {t('techFolderModels')}</li>
                      <li><code>views.py</code>: {t('techFolderViews')}</li>
                      <li><code>serializers.py</code>: {t('techFolderSerializers')}</li>
                      <li><code>urls.py</code>: {t('techFolderApiUrls')}</li>
                  </ul>
              </li>
              <li><code>manage.py</code>: {t('techFolderManage')}</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection title={t('techLocalTitle')} id="local-deployment">
        <p>{t('techLocalDesc')}</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>
                <strong>{t('techLocalVenv')}</strong> {t('techLocalVenvDesc')}
                <CodeBlock>{t('techLocalVenvActivate')}</CodeBlock>
            </li>
            <li>
                <strong>{t('techLocalDeps')}</strong> {t('techLocalDepsDesc')}
                <CodeBlock>pip install -r requirements.txt</CodeBlock>
            </li>
            <li>
                <strong>{t('techLocalMigrate')}</strong> {t('techLocalMigrateDesc')}
                <CodeBlock>python manage.py migrate</CodeBlock>
            </li>
             <li>
                <strong>{t('techLocalRun')}</strong> {t('techLocalRunDesc')}
                <CodeBlock>python manage.py runserver</CodeBlock>
            </li>
        </ol>
        <p>{t('techLocalUrl')} <code>http://127.0.0.1:8000</code>.</p>
      </ContentSection>

      <AdditionalResources
        pdfUrl="/docs/manual-tecnico.pdf"
        canvaUrl="https://www.canva.com/"
      />
    </ContentWrapper>
  );
}
