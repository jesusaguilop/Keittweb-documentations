import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContentWrapper, ContentSection, ContentSubSection } from "./ContentWrapper";

export default function UserManual() {
  return (
    <ContentWrapper title="Manual de Usuario">
      <p>
        Bienvenido a KeittWeb. Este manual le guiará a través de las funcionalidades clave de la aplicación, desde el acceso inicial hasta el uso de los diferentes módulos de análisis y gestión agrícola.
      </p>

      <ContentSection title="Ingreso al Sistema" id="login">
        <p>Para comenzar a utilizar KeittWeb, primero debe iniciar sesión con sus credenciales.</p>
        <ol className="list-decimal list-inside space-y-2">
            <li>Navegue a la página de inicio de la aplicación.</li>
            <li>Introduzca su nombre de usuario y contraseña en los campos correspondientes.</li>
            <li>Haga clic en el botón "Iniciar Sesión".</li>
        </ol>
        <div className="w-full h-80 relative mt-4 border rounded-lg overflow-hidden">
            <Image src="https://placehold.co/800x600.png" alt="Pantalla de inicio de sesión" fill style={{objectFit: 'cover'}} data-ai-hint="login screen" />
        </div>
      </ContentSection>

      <ContentSection title="Módulos de la Aplicación" id="modules">
        <p>Una vez dentro, tendrá acceso a varios módulos desde el menú de navegación lateral. A continuación se describe cada uno de ellos.</p>
        
        <ContentSubSection title="Inicio e Información" id="module-home">
            <p>Las secciones de <strong>Inicio</strong>, <strong>Introducción</strong> e <strong>Información</strong> le proporcionan una visión general del proyecto, noticias relevantes y datos de contacto. Son el punto de partida para familiarizarse con la plataforma.</p>
        </ContentSubSection>

        <ContentSubSection title="Análisis de Suelo" id="module-soil">
            <p>Este es uno de los módulos centrales. Aquí puede registrar los resultados de un análisis de suelo para obtener recomendaciones de fertilización. El proceso es el siguiente:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>Haga clic en "Análisis de Suelo" en el menú.</li>
                <li>Rellene el formulario con los valores de pH, materia orgánica, nutrientes, etc.</li>
                <li>Envíe el formulario para ver los resultados y recomendaciones.</li>
            </ol>
             <div className="w-full h-80 relative mt-4 border rounded-lg overflow-hidden">
                <Image src="https://placehold.co/800x600.png" alt="Formulario de análisis de suelo" fill style={{objectFit: 'cover'}} data-ai-hint="data form" />
            </div>
        </ContentSubSection>

        <ContentSubSection title="Riego, Siembra y Cultivo" id="module-farming">
            <p>Estos módulos le permiten gestionar y consultar información específica sobre:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Riego:</strong> Recomendaciones y calendarios de riego basados en el tipo de cultivo y clima.</li>
                <li><strong>Tipo de Siembra:</strong> Guías sobre las mejores prácticas de siembra.</li>
                <li><strong>Cultivo:</strong> Seguimiento del ciclo de vida del cultivo, desde la siembra hasta la cosecha.</li>
            </ul>
        </ContentSubSection>
        
        <ContentSubSection title="Apartados Futuros" id="module-future">
            <p>El equipo de KeittWeb está trabajando para expandir la plataforma. Próximamente se incluirán los siguientes módulos:</p>
             <ul className="list-disc list-inside space-y-2">
                <li><strong>Análisis Foliar:</strong> Para diagnosticar deficiencias nutricionales a través de las hojas.</li>
                <li><strong>Cosecha y Post-Cosecha:</strong> Herramientas para optimizar la recolección y el manejo del producto.</li>
            </ul>
        </ContentSubSection>
      </ContentSection>

      <ContentSection title="Preguntas Frecuentes (FAQ)" id="faq">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Qué hago si olvidé mi contraseña?</AccordionTrigger>
            <AccordionContent>
              En la página de inicio de sesión, encontrará un enlace de "¿Olvidó su contraseña?". Haga clic en él y siga las instrucciones para restablecerla a través de su correo electrónico.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>El sistema muestra un error de "Credenciales Incorrectas".</AccordionTrigger>
            <AccordionContent>
              Este error significa que el nombre de usuario o la contraseña que introdujo no coinciden con nuestros registros. Verifique que ambos datos estén escritos correctamente. Recuerde que la contraseña distingue entre mayúsculas y minúsculas.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-3">
            <AccordionTrigger>No puedo ver los resultados de mi análisis de suelo.</AccordionTrigger>
            <AccordionContent>
                Asegúrese de haber completado todos los campos obligatorios del formulario. Si el problema persiste, intente recargar la página o contacte con el soporte técnico.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ContentSection>
    </ContentWrapper>
  );
}
