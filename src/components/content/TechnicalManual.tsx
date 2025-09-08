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
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 242 256" className="h-8 w-8"><g clipPath="url(#angular__a)"><mask id="angular__b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}><path fill="#fff" d="M0 0h242v256H0V0Z"/></mask><g mask="url(#angular__b)"><path fill="url(#angular__c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/><path fill="url(#angular__d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z"/></g></g><defs><linearGradient id="angular__c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stopColor="#E40035"/><stop offset=".2" stopColor="#F60A48"/><stop offset=".4" stopColor="#F20755"/><stop offset=".5" stopColor="#DC087D"/><stop offset=".7" stopColor="#9717E7"/><stop offset="1" stopColor="#6C00F5"/></linearGradient><linearGradient id="angular__d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"><stop stopColor="#FF31D9"/><stop offset="1" stopColor="#FF5BE1" stopOpacity="0"/></linearGradient><clipPath id="angular__a"><path fill="#fff" d="M0 0h242v256H0z"/></clipPath></defs></svg>
);

const DjangoLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 32 32">
      <path d="M14.135 4H18.1v18.169a26.218 26.218 0 0 1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322 0-4 2.673-6.6 6.816-6.6a6.448 6.448 0 0 1 1.724.2V4Zm0 9.142a3.992 3.992 0 0 0-1.337-.2c-2 0-3.163 1.223-3.163 3.366 0 2.087 1.107 3.239 3.138 3.239a9.355 9.355 0 0 0 1.362-.1v-6.3Z" style={{ fill: '#44b78b' }} />
      <path d="M24.4 10.059v9.1c0 3.133-.235 4.639-.923 5.938A6.316 6.316 0 0 1 20.237 28l-3.678-1.733a5.708 5.708 0 0 0 3.141-2.629c.566-1.121.745-2.42.745-5.837v-7.742ZM20.441 4.02h3.964v4.028h-3.964z" style={{ fill: '#44b78b' }} />
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
