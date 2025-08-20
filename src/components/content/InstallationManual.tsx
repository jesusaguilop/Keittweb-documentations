import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CodeBlock } from "./CodeBlock";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";

export default function InstallationManual() {
  return (
    <ContentWrapper title="Manual de Instalación en el Servidor">
      <p>
        Esta guía proporciona los pasos detallados para instalar y desplegar la aplicación KeittWeb en un entorno de servidor Windows, así como su configuración para despliegue continuo con GitHub y Render.
      </p>

      <ContentSection title="Requerimientos de Hardware y Software" id="requirements">
        <p>Asegúrese de que su servidor cumple con los siguientes requisitos mínimos:</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Componente</TableHead>
              <TableHead>Requisito Mínimo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Sistema Operativo</TableCell>
              <TableCell>Windows Server 2019 o superior</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Procesador</TableCell>
              <TableCell>2.0 GHz Dual Core</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>RAM</TableCell>
              <TableCell>4 GB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Almacenamiento</TableCell>
              <TableCell>50 GB de espacio libre</TableCell>
            </TableRow>
             <TableRow>
              <TableCell>Software</TableCell>
              <TableCell>Python 3.10+, Node.js 18+, Git</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ContentSection>

      <ContentSection title="Instalación en Windows Server" id="windows-install">
        <p>Siga estos pasos para configurar el entorno en su servidor Windows:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Conéctese al servidor a través de Escritorio Remoto.</li>
            <li>Instale Python 3.10 o superior desde el sitio oficial. Asegúrese de marcar "Add Python to PATH".</li>
            <li>Instale Node.js (versión LTS) desde su sitio web oficial.</li>
            <li>Instale Git para Windows desde su página oficial.</li>
            <li>Abra una terminal (PowerShell o CMD) y clone el repositorio del proyecto:</li>
        </ol>
        <CodeBlock>git clone https://github.com/tu-usuario/KeittWeb.git</CodeBlock>
      </ContentSection>
      
      <ContentSection title="Configuración de GitHub" id="github-setup">
          <p>Para gestionar el código fuente y habilitar el despliegue automático, es fundamental una correcta configuración de GitHub.</p>
          <ContentSubSection title="Crear un Repositorio" id="github-repo">
              <p>Si aún no lo ha hecho, cree un repositorio en GitHub para alojar el código del proyecto. Puede ser público o privado.</p>
          </ContentSubSection>
          <ContentSubSection title="Subir el Código" id="github-push">
              <p>Navegue a la carpeta del proyecto en su máquina local y suba el código al repositorio recién creado.</p>
              <CodeBlock>{`git remote add origin https://github.com/tu-usuario/KeittWeb.git
git branch -M main
git push -u origin main`}</CodeBlock>
          </ContentSubSection>
      </ContentSection>

      <ContentSection title="Despliegue en Render" id="render-deploy">
        <p>Render es una plataforma en la nube que facilita el despliegue de aplicaciones. Usaremos Render para alojar tanto el backend de Django como el frontend de Angular.</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Cree una cuenta en Render y conéctela a su cuenta de GitHub.</li>
            <li>Cree un nuevo "Web Service" para el backend de Django.</li>
            <li>Seleccione el repositorio de KeittWeb.</li>
            <li>Configure el servicio con los siguientes ajustes:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Entorno:</strong> Python</li>
                    <li><strong>Comando de Build:</strong> `pip install -r requirements.txt && python manage.py migrate`</li>
                    <li><strong>Comando de Inicio:</strong> `gunicorn keittweb.wsgi`</li>
                </ul>
            </li>
            <li>Cree un nuevo "Static Site" para el frontend de Angular.</li>
            <li>Seleccione el mismo repositorio.</li>
            <li>Configure el sitio con los siguientes ajustes:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Comando de Build:</strong> `npm install && ng build --configuration production`</li>
                    <li><strong>Directorio de Publicación:</strong> `dist/keitt-web` (o la ruta correspondiente a su build)</li>
                </ul>
            </li>
            <li>Una vez configurados, Render desplegará automáticamente los cambios cada vez que haga un `push` a la rama principal en GitHub.</li>
        </ol>
        <div className="w-full h-64 relative mt-4">
            <Image src="https://placehold.co/800x400.png" alt="Diagrama de despliegue" layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint="deployment diagram" />
        </div>
      </ContentSection>
    </ContentWrapper>
  );
}
