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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 242 256" className="h-8 w-8"><g clipPath="url(#angular__a)"><mask id="angular__b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'luminance' }}><path fill="#fff" d="M0 0h242v256H0V0Z" /></mask><g mask="url(#angular__b)"><path fill="url(#angular__c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" /><path fill="url(#angular__d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" /></g></g><defs><linearGradient id="angular__c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse"><stop stopColor="#E40035" /><stop offset=".2" stopColor="#F60A48" /><stop offset=".4" stopColor="#F20755" /><stop offset=".5" stopColor="#DC087D" /><stop offset=".7" stopColor="#9717E7" /><stop offset="1" stopColor="#6C00F5" /></linearGradient><linearGradient id="angular__d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse"><stop stopColor="#FF31D9" /><stop offset="1" stopColor="#FF5BE1" stopOpacity="0" /></linearGradient><clipPath id="angular__a"><path fill="#fff" d="M0 0h242v256H0z" /></clipPath></defs></svg>
);

const DjangoLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 32 32">
      <path d="M14.135 4H18.1v18.169a26.218 26.218 0 0 1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322 0-4 2.673-6.6 6.816-6.6a6.448 6.448 0 0 1 1.724.2V4Zm0 9.142a3.992 3.992 0 0 0-1.337-.2c-2 0-3.163 1.223-3.163 3.366 0 2.087 1.107 3.239 3.138 3.239a9.355 9.355 0 0 0 1.362-.1v-6.3Z" style={{ fill: '#44b78b' }} />
      <path d="M24.4 10.059v9.1c0 3.133-.235 4.639-.923 5.938A6.316 6.316 0 0 1 20.237 28l-3.678-1.733a5.708 5.708 0 0 0 3.141-2.629c.566-1.121.745-2.42.745-5.837v-7.742ZM20.441 4.02h3.964v4.028h-3.964z" style={{ fill: '#44b78b' }} />
    </svg>
);

const PythonLogo = () => (
  <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2,2.2c-1.3-1.2-3.1-1.8-5-1.8c-3.9,0-7.1,3.2-7.1,7.1c0,1.9,0.7,3.6,1.8,5c1.2,1.3,2.9,2,4.8,2 c1.9,0,3.6-0.7,4.8-1.8c1.3-1.2,2-2.9,2-4.8C14.2,5.1,13.4,3.4,12.2,2.2z M9.1,6.5c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9 c-0.5,0-0.9-0.4-0.9-0.9C8.2,6.9,8.6,6.5,9.1,6.5z" fill="#306998" />
    <path d="M21.9,12.2c0-1.3-0.5-2.6-1.5-3.5c-1.2-1.1-2.7-1.7-4.4-1.7c-3.5,0-6.4,2.9-6.4,6.4c0,1.7,0.7,3.3,1.8,4.4 c1.1,1.2,2.6,1.8,4.2,1.8c1.7,0,3.3-0.7,4.4-1.8C21.3,16.7,21.9,14.6,21.9,12.2z M15.7,17.4c-0.5,0-0.8-0.4-0.8-0.8 c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8C16.5,17.1,16.1,17.4,15.7,17.4z" fill="#FFD43B" />
  </svg>
);

const PostgreSQLLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 432.071 445.383"><g style={{fillRule:"nonzero",clipRule:"nonzero",fill:"none",stroke:"#fff",strokeWidth:"12.4651",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4}}><path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style={{fill:"#000",stroke:"#000",strokeWidth:"37.3953",strokeLinecap:"butt",strokeLinejoin:"miter"}} /><path stroke="none" d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style={{fill:"#336791",stroke:"none"}} /><path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329" /><path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style={{strokeLinejoin:"bevel"}} /><path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z" /><path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938" /><path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style={{fill:"#fff",strokeWidth:"4.155",strokeLinecap:"butt",strokeLinejoin:"miter"}} /><path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style={{fill:"#fff",strokeWidth:"2.0775",strokeLinecap:"butt",strokeLinejoin:"miter"}} /><path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435" /></g></svg>
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
            <DjangoLogo />
            <PythonLogo />
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
