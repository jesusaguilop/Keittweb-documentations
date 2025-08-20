import { CodeBlock } from "./CodeBlock";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";

export default function TechnicalManual() {
  return (
    <ContentWrapper title="Manual Técnico">
      <p>
        Este manual ofrece una visión profunda de la arquitectura, estructura y procesos internos del sistema KeittWeb. Está dirigido a desarrolladores y personal técnico encargado del mantenimiento y evolución de la aplicación.
      </p>

      <ContentSection title="Arquitectura del Sistema" id="architecture">
        <p>KeittWeb está construido sobre una arquitectura moderna de aplicación web desacoplada, separando claramente las responsabilidades del frontend y del backend.</p>
        <ContentSubSection title="Frontend" id="tech-frontend">
            <h4 className="font-bold text-lg">Angular 18</h4>
            <p>La interfaz de usuario es una Single-Page Application (SPA) desarrollada con Angular 18. Esto permite una experiencia de usuario rápida y fluida, con actualizaciones dinámicas sin necesidad de recargar la página. Se encarga de toda la lógica de presentación y la interacción con el usuario.</p>
        </ContentSubSection>
        <ContentSubSection title="Backend" id="tech-backend">
            <h4 className="font-bold text-lg">Django + Python 3.10</h4>
            <p>El servidor está implementado con Django y Django REST Framework, exponiendo una API RESTful que el frontend consume. Se encarga de la lógica de negocio, autenticación de usuarios, y la interacción con la base de datos.</p>
        </ContentSubSection>
        <ContentSubSection title="Base de Datos y Migraciones" id="tech-database">
             <h4 className="font-bold text-lg">PostgreSQL</h4>
            <p>La base de datos relacional preferida es PostgreSQL por su robustez y escalabilidad. Django ORM gestiona el esquema de la base de datos a través de un sistema de migraciones, lo que permite versionar y aplicar cambios en la estructura de datos de manera controlada.</p>
        </ContentSubSection>
      </ContentSection>

      <ContentSection title="Procesos Principales" id="processes">
        <ContentSubSection title="Registro de Usuarios y Login" id="process-auth">
            <p>El sistema utiliza autenticación basada en tokens (JWT). Al registrarse, se crea un nuevo usuario. Al iniciar sesión, el backend valida las credenciales y devuelve un token de acceso y uno de refresco. El frontend almacena estos tokens para autenticar las solicitudes posteriores a rutas protegidas.</p>
        </ContentSubSection>
        <ContentSubSection title="Análisis de Suelo" id="process-analysis">
            <p>El usuario introduce datos de una muestra de suelo a través de un formulario en el frontend. Estos datos se envían a un endpoint específico de la API. El backend procesa la información, realiza los cálculos necesarios y devuelve un informe con recomendaciones, que el frontend muestra de forma gráfica y tabular.</p>
        </ContentSubSection>
      </ContentSection>

       <ContentSection title="Estructura de Carpetas (Backend)" id="folder-structure">
        <p>La organización del código en el backend sigue las convenciones de Django, promoviendo la modularidad y mantenibilidad.</p>
        <ul className="list-disc list-inside space-y-2">
            <li><code>keittweb/</code>: Carpeta principal del proyecto Django.
                <ul className="list-disc list-inside ml-6 mt-1">
                    <li><code>settings.py</code>: Configuración del proyecto.</li>
                    <li><code>urls.py</code>: Rutas principales del proyecto.</li>
                </ul>
            </li>
            <li><code>api/</code>: Aplicación de Django que contiene la lógica de la API.
                <ul className="list-disc list-inside ml-6 mt-1">
                    <li><code>models.py</code>: Definición de los modelos de datos (tablas de la base de datos).</li>
                    <li><code>views.py</code>: Lógica de las vistas (endpoints de la API).</li>
                    <li><code>serializers.py</code>: Define cómo los modelos se convierten a JSON y viceversa.</li>
                    <li><code>urls.py</code>: Rutas específicas de la API.</li>
                </ul>
            </li>
            <li><code>manage.py</code>: Script para administrar el proyecto (ejecutar servidor, migraciones, etc.).</li>
        </ul>
      </ContentSection>

      <ContentSection title="Despliegue Local" id="local-deployment">
        <p>Para ejecutar el backend en un entorno de desarrollo local, siga estos pasos:</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>
                <strong>Crear un entorno virtual:</strong> Aísla las dependencias del proyecto.
                <CodeBlock>{`python -m venv venv
source venv/bin/activate  # En Linux/macOS
.\\venv\\Scripts\\activate  # En Windows`}</CodeBlock>
            </li>
            <li>
                <strong>Instalar dependencias:</strong> Instala todos los paquetes de Python necesarios.
                <CodeBlock>pip install -r requirements.txt</CodeBlock>
            </li>
            <li>
                <strong>Aplicar migraciones:</strong> Crea o actualiza las tablas en la base de datos.
                <CodeBlock>python manage.py migrate</CodeBlock>
            </li>
             <li>
                <strong>Ejecutar el servidor:</strong> Inicia el servidor de desarrollo.
                <CodeBlock>python manage.py runserver</CodeBlock>
            </li>
        </ol>
        <p>El servidor estará disponible en <code>http://127.0.0.1:8000</code>.</p>
      </ContentSection>
    </ContentWrapper>
  );
}
