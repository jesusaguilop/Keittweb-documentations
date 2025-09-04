import { CodeBlock } from "./CodeBlock";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";
import { useI18n } from "@/context/I18nContext";

export default function TechnicalManual() {
  const { t } = useI18n();

  return (
    <ContentWrapper title={t('techTitle')}>
      <p>{t('techIntro')}</p>

      <ContentSection title={t('techArchTitle')} id="architecture">
        <p>{t('techArchDesc')}</p>
        <ContentSubSection title={t('techArchFeTitle')} id="tech-frontend">
            <h4 className="font-bold text-lg">Angular 18</h4>
            <p>{t('techArchFeDesc')}</p>
        </ContentSubSection>
        <ContentSubSection title={t('techArchBeTitle')} id="tech-backend">
            <h4 className="font-bold text-lg">Django + Python 3.10</h4>
            <p>{t('techArchBeDesc')}</p>
        </ContentSubSection>
        <ContentSubSection title={t('techArchDbTitle')} id="tech-database">
             <h4 className="font-bold text-lg">PostgreSQL</h4>
            <p>{t('techArchDbDesc')}</p>
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
        <div className="text-sm md:text-base">
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
    </ContentWrapper>
  );
}
