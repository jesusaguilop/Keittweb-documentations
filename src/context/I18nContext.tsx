"use client";

import React, { createContext, useState, useContext, ReactNode, useMemo, useCallback } from 'react';

type Locale = 'en' | 'es';
type Translations = Record<string, Record<Locale, string>>;

const translations: Translations = {
  // General UI
  documentationTitle: { es: 'Documentación KeittWeb', en: 'KeittWeb Documentation' },
  searchPlaceholder: { es: 'Buscar en la documentación...', en: 'Search in the documentation...' },
  changeLanguage: { es: 'Cambiar idioma', en: 'Change language' },
  welcome: { es: "Bienvenida", en: "Welcome" },
  installationManual: { es: "Manual de Instalación", en: "Installation Manual" },
  technicalManual: { es: "Manual Técnico", en: "Technical Manual" },
  userManual: { es: "Manual de Usuario", en: "User Manual" },
  footerContact: { es: "Contacto", en: "Contact" },
  footerRights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  copyCode: { es: 'Copiar código', en: 'Copy code' },
  codeCopiedTitle: { es: '¡Copiado!', en: 'Copied!' },
  codeCopiedDesc: { es: 'El comando se ha copiado al portapapeles.', en: 'The command has been copied to the clipboard.' },
  toggleTheme: { es: 'Cambiar tema', en: 'Toggle theme' },
  light: { es: 'Claro', en: 'Light' },
  dark: { es: 'Oscuro', en: 'Dark' },
  system: { es: 'Sistema', en: 'System' },
  docVersion: { es: 'Documentación v1.0', en: 'Documentation v1.0' },

  // Sidebar Nav Links
  navRequirements: { es: 'Requerimientos', en: 'Requirements' },
  navWinInstall: { es: 'Instalación en Windows', en: 'Windows Installation' },
  navGithubSetup: { es: 'Configuración de GitHub', en: 'GitHub Setup' },
  navRenderDeploy: { es: 'Despliegue en Render', en: 'Deploy on Render' },
  navArchitecture: { es: 'Arquitectura', en: 'Architecture' },
  navProcesses: { es: 'Procesos Principales', en: 'Main Processes' },
  navFolderStructure: { es: 'Estructura de Carpetas', en: 'Folder Structure' },
  navLocalDeploy: { es: 'Despliegue Local', en: 'Local Deployment' },
  navLogin: { es: 'Ingreso al Sistema', en: 'System Login' },
  navModules: { es: 'Módulos', en: 'Modules' },
  navFaq: { es: 'Preguntas Frecuentes', en: 'FAQ' },

  // Welcome Page
  welcomeTitle: { es: 'Bienvenido a la Documentación de KeittWeb', en: 'Welcome to the KeittWeb Documentation' },
  welcomeDesc1: { es: 'Este es el centro de documentación oficial para el proyecto KeittWeb. Aquí encontrará toda la información necesaria para instalar, desarrollar y utilizar la aplicación de manera efectiva.', en: 'This is the official documentation center for the KeittWeb project. Here you will find all the necessary information to install, develop, and use the application effectively.' },
  welcomeDesc2: { es: 'Utilice el menú de navegación a la izquierda para explorar los diferentes manuales. Cada manual está diseñado para un público específico:', en: 'Use the navigation menu on the left to explore the different manuals. Each manual is designed for a specific audience:' },
  welcomeCard1Title: { es: 'Manual de Instalación', en: 'Installation Manual' },
  welcomeCard1Desc: { es: 'Guías para desplegar y configurar KeittWeb.', en: 'Guides to deploy and configure KeittWeb.' },
  welcomeCard2Title: { es: 'Manual Técnico', en: 'Technical Manual' },
  welcomeCard2Desc: { es: 'Detalles sobre la arquitectura y el código.', en: 'Details on architecture and code.' },
  welcomeCard3Title: { es: 'Manual de Usuario', en: 'User Manual' },
  welcomeCard3Desc: { es: 'Instrucciones para usar la aplicación.', en: 'Instructions for using the application.' },
  welcomeBoxTitle: { es: '¡Comience a explorar!', en: 'Start exploring!' },
  welcomeBoxDesc: { es: 'Seleccione una sección del menú lateral para comenzar. Si es nuevo en el proyecto, le recomendamos empezar por el Manual de Instalación.', en: 'Select a section from the side menu to begin. If you are new to the project, we recommend starting with the Installation Manual.' },
  
  // Modal
  modalViewDocs: { es: 'Ver documentación', en: 'View documentation' },
  modalDownloadPDF: { es: 'Descargar PDF', en: 'Download PDF' },
  modalInstallDesc: { es: 'Esta sección le guiará a través de la instalación y configuración del entorno de KeittWeb en su servidor.', en: 'This section will guide you through the installation and setup of the KeittWeb environment on your server.' },
  modalTechDesc: { es: 'Explore los detalles técnicos, la arquitectura del sistema y la estructura del código para desarrolladores.', en: 'Explore the technical details, system architecture, and code structure for developers.' },
  modalUserDesc: { es: 'Aprenda a utilizar todas las funciones de KeittWeb, desde el inicio de sesión hasta los módulos de análisis.', en: 'Learn how to use all the features of KeittWeb, from login to the analysis modules.' },


  // Installation Manual
  installTitle: { es: 'Manual de Instalación en el Servidor', en: 'Server Installation Manual' },
  installIntro: { es: 'Esta guía proporciona los pasos detallados para instalar y desplegar la aplicación KeittWeb en un entorno de servidor Windows, así como su configuración para despliegue continuo con GitHub y Render.', en: 'This guide provides detailed steps to install and deploy the KeittWeb application in a Windows Server environment, as well as its configuration for continuous deployment with GitHub and Render.' },
  installReqsTitle: { es: 'Requerimientos de Hardware y Software', en: 'Hardware and Software Requirements' },
  installReqsDesc: { es: 'Asegúrese de que su servidor cumple con los siguientes requisitos mínimos:', en: 'Make sure your server meets the following minimum requirements:' },
  installTableComp: { es: 'Componente', en: 'Component' },
  installTableReq: { es: 'Requisito Mínimo', en: 'Minimum Requirement' },
  installTableOS: { es: 'Sistema Operativo', en: 'Operating System' },
  installTableOSVal: { es: 'Windows Server 2019 o superior', en: 'Windows Server 2019 or higher' },
  installTableCPU: { es: 'Procesador', en: 'Processor' },
  installTableCPUVal: { es: '2.0 GHz Dual Core', en: '2.0 GHz Dual Core' },
  installTableRAM: { es: '4 GB', en: '4 GB' },
  installTableStorage: { es: 'Almacenamiento', en: 'Storage' },
  installTableStorageVal: { es: '50 GB de espacio libre', en: '50 GB of free space' },
  installTableSw: { es: 'Software', en: 'Software' },
  installTableSwVal: { es: 'Python 3.10+, Node.js 18+, Git', en: 'Python 3.10+, Node.js 18+, Git' },
  installWinTitle: { es: 'Instalación en Windows Server', en: 'Installation on Windows Server' },
  installWinDesc: { es: 'Siga estos pasos para configurar el entorno en su servidor Windows:', en: 'Follow these steps to set up the environment on your Windows Server:' },
  installWinStep1: { es: 'Conéctese al servidor a través de Escritorio Remoto.', en: 'Connect to the server via Remote Desktop.' },
  installWinStep2: { es: 'Instale Python 3.10 o superior desde el sitio oficial. Asegúrese de marcar "Add Python to PATH".', en: 'Install Python 3.10 or higher from the official website. Be sure to check "Add Python to PATH".' },
  installWinStep3: { es: 'Instale Node.js (versión LTS) desde su sitio web oficial.', en: 'Install Node.js (LTS version) from its official website.' },
  installWinStep4: { es: 'Instale Git para Windows desde su página oficial.', en: 'Install Git for Windows from its official page.' },
  installWinStep5: { es: 'Abra una terminal (PowerShell o CMD) y clone el repositorio del proyecto:', en: 'Open a terminal (PowerShell or CMD) and clone the project repository:' },
  installGitTitle: { es: 'Configuración de GitHub', en: 'GitHub Configuration' },
  installGitDesc: { es: 'Para gestionar el código fuente y habilitar el despliegue automático, es fundamental una correcta configuración de GitHub.', en: 'Proper GitHub configuration is essential for managing the source code and enabling automatic deployment.' },
  installGitRepoTitle: { es: 'Crear un Repositorio', en: 'Create a Repository' },
  installGitRepoDesc: { es: 'Si aún no lo ha hecho, cree un repositorio en GitHub para alojar el código del proyecto. Puede ser público o privado.', en: 'If you haven\'t already, create a repository on GitHub to host the project code. It can be public or private.' },
  installGitPushTitle: { es: 'Subir el Código', en: 'Push the Code' },
  installGitPushDesc: { es: 'Navegue a la carpeta del proyecto en su máquina local y suba el código al repositorio recién creado.', en: 'Navigate to the project folder on your local machine and push the code to the newly created repository.' },
  installRenderTitle: { es: 'Despliegue en Render', en: 'Deployment on Render' },
  installRenderDesc: { es: 'Render es una plataforma en la nube que facilita el despliegue de aplicaciones. Usaremos Render para alojar tanto el backend de Django como el frontend de Angular.', en: 'Render is a cloud platform that simplifies application deployment. We will use Render to host both the Django backend and the Angular frontend.' },
  installRenderStep1: { es: 'Cree una cuenta en Render y conéctela a su cuenta de GitHub.', en: 'Create an account on Render and connect it to your GitHub account.' },
  installRenderStep2: { es: 'Cree un nuevo "Web Service" para el backend de Django.', en: 'Create a new "Web Service" for the Django backend.' },
  installRenderStep3: { es: 'Seleccione el repositorio de KeittWeb.', en: 'Select the KeittWeb repository.' },
  installRenderStep4: { es: 'Configure el servicio con los siguientes ajustes:', en: 'Configure the service with the following settings:' },
  installRenderBEEnv: { es: 'Entorno:', en: 'Environment:' },
  installRenderBEBuild: { es: 'Comando de Build:', en: 'Build Command:' },
  installRenderBEStart: { es: 'Comando de Inicio:', en: 'Start Command:' },
  installRenderStep5: { es: 'Cree un nuevo "Static Site" para el frontend de Angular.', en: 'Create a new "Static Site" for the Angular frontend.' },
  installRenderStep6: { es: 'Seleccione el mismo repositorio.', en: 'Select the same repository.' },
  installRenderStep7: { es: 'Configure el sitio con los siguientes ajustes:', en: 'Configure the site with the following settings:' },
  installRenderFEBuild: { es: 'Comando de Build:', en: 'Build Command:' },
  installRenderFEPublic: { es: 'Directorio de Publicación:', en: 'Publish Directory:' },
  installRenderFEPublicVal: { es: 'dist/keitt-web (o la ruta correspondiente a su build)', en: 'dist/keitt-web (or the path corresponding to your build)' },
  installRenderStep8: { es: 'Una vez configurados, Render desplegará automáticamente los cambios cada vez que haga un `push` a la rama principal en GitHub.', en: 'Once configured, Render will automatically deploy changes every time you `push` to the main branch on GitHub.' },
  installRenderImgAlt: { es: 'Diagrama de despliegue', en: 'Deployment diagram' },

  // Technical Manual
  techTitle: { es: 'Manual Técnico', en: 'Technical Manual' },
  techIntro: { es: 'Este manual ofrece una visión profunda de la arquitectura, estructura y procesos internos del sistema KeittWeb. Está dirigido a desarrolladores y personal técnico encargado del mantenimiento y evolución de la aplicación.', en: 'This manual offers a deep insight into the architecture, structure, and internal processes of the KeittWeb system. It is aimed at developers and technical staff responsible for the maintenance and evolution of the application.' },
  techArchTitle: { es: 'Arquitectura del Sistema', en: 'System Architecture' },
  techArchDesc: { es: 'KeittWeb está construido sobre una arquitectura moderna de aplicación web desacoplada, separando claramente las responsabilidades del frontend y del backend.', en: 'KeittWeb is built on a modern decoupled web application architecture, clearly separating frontend and backend responsibilities.' },
  techArchFeTitle: { es: 'Frontend', en: 'Frontend' },
  techArchFeDesc: { es: 'La interfaz de usuario es una Single-Page Application (SPA) desarrollada con Angular 18. Esto permite una experiencia de usuario rápida y fluida, con actualizaciones dinámicas sin necesidad de recargar la página. Se encarga de toda la lógica de presentación y la interacción con el usuario.', en: 'The user interface is a Single-Page Application (SPA) developed with Angular 18. This allows for a fast and fluid user experience, with dynamic updates without needing to reload the page. It handles all presentation logic and user interaction.' },
  techArchBeTitle: { es: 'Backend', en: 'Backend' },
  techArchBeDesc: { es: 'El servidor está implementado con Django y Django REST Framework, exponiendo una API RESTful que el frontend consume. Se encarga de la lógica de negocio, autenticación de usuarios, y la interacción con la base de datos.', en: 'The server is implemented with Django and Django REST Framework, exposing a RESTful API that the frontend consumes. It is responsible for business logic, user authentication, and interaction with the database.' },
  techArchDbTitle: { es: 'Base de Datos', en: 'Database' },
  techArchDbDesc: { es: 'La base de datos relacional preferida es PostgreSQL por su robustez y escalabilidad. Django ORM gestiona el esquema de la base de datos a través de un sistema de migraciones, lo que permite versionar y aplicar cambios en la estructura de datos de manera controlada.', en: 'The preferred relational database is PostgreSQL for its robustness and scalability. Django ORM manages the database schema through a migration system, which allows versioning and applying changes to the data structure in a controlled manner.' },
  techProcTitle: { es: 'Procesos Principales', en: 'Main Processes' },
  techProcAuthTitle: { es: 'Registro y Login', en: 'Registration and Login' },
  techProcAuthDesc: { es: 'El sistema utiliza autenticación basada en tokens (JWT). Al registrarse, se crea un nuevo usuario. Al iniciar sesión, el backend valida las credenciales y devuelve un token de acceso y uno de refresco. El frontend almacena estos tokens para autenticar las solicitudes posteriores a rutas protegidas.', en: 'The system uses token-based authentication (JWT). When registering, a new user is created. Upon login, the backend validates the credentials and returns an access token and a refresh token. The frontend stores these tokens to authenticate subsequent requests to protected routes.' },
  techProcAnalysisTitle: { es: 'Análisis de Suelo', en: 'Soil Analysis' },
  techProcAnalysisDesc: { es: 'El usuario introduce datos de una muestra de suelo a través de un formulario en el frontend. Estos datos se envían a un endpoint específico de la API. El backend procesa la información, realiza los cálculos necesarios y devuelve un informe con recomendaciones, que el frontend muestra de forma gráfica y tabular.', en: 'The user enters soil sample data through a form on the frontend. This data is sent to a specific API endpoint. The backend processes the information, performs the necessary calculations, and returns a report with recommendations, which the frontend displays graphically and in tabular form.' },
  techFolderTitle: { es: 'Estructura de Carpetas (Backend)', en: 'Folder Structure (Backend)' },
  techFolderDesc: { es: 'La organización del código en el backend sigue las convenciones de Django, promoviendo la modularidad y mantenibilidad.', en: 'The code organization in the backend follows Django conventions, promoting modularity and maintainability.' },
  techFolderKeittwebDesc: { es: 'Carpeta principal del proyecto Django.', en: 'Main Django project folder.' },
  techFolderSettings: { es: 'Configuración del proyecto.', en: 'Project configuration.' },
  techFolderUrls: { es: 'Rutas principales del proyecto.', en: 'Main project routes.' },
  techFolderApiDesc: { es: 'Aplicación de Django que contiene la lógica de la API.', en: 'Django application containing the API logic.' },
  techFolderModels: { es: 'Definición de los modelos de datos (tablas de la base de datos).', en: 'Definition of data models (database tables).' },
  techFolderViews: { es: 'Lógica de las vistas (endpoints de la API).', en: 'View logic (API endpoints).' },
  techFolderSerializers: { es: 'Define cómo los modelos se convierten a JSON y viceversa.', en: 'Defines how models are converted to JSON and vice versa.' },
  techFolderApiUrls: { es: 'Rutas específicas de la API.', en: 'API-specific routes.' },
  techFolderManage: { es: 'Script para administrar el proyecto (ejecutar servidor, migraciones, etc.).', en: 'Script to manage the project (run server, migrations, etc.).' },
  techLocalTitle: { es: 'Despliegue Local', en: 'Local Deployment' },
  techLocalDesc: { es: 'Para ejecutar el backend en un entorno de desarrollo local, siga estos pasos:', en: 'To run the backend in a local development environment, follow these steps:' },
  techLocalVenv: { es: 'Crear un entorno virtual:', en: 'Create a virtual environment:' },
  techLocalVenvDesc: { es: 'Aísla las dependencias del proyecto.', en: 'Isolates project dependencies.' },
  techLocalVenvActivate: { es: 'source venv/bin/activate  # En Linux/macOS\n.\\venv\\Scripts\\activate  # En Windows', en: 'source venv/bin/activate  # On Linux/macOS\n.\\venv\\Scripts\\activate  # On Windows' },
  techLocalDeps: { es: 'Instalar dependencias:', en: 'Install dependencies:' },
  techLocalDepsDesc: { es: 'Instala todos los paquetes de Python necesarios.', en: 'Installs all necessary Python packages.' },
  techLocalMigrate: { es: 'Aplicar migraciones:', en: 'Apply migrations:' },
  techLocalMigrateDesc: { es: 'Crea o actualiza las tablas en la base de datos.', en: 'Creates or updates the tables in the database.' },
  techLocalRun: { es: 'Ejecutar el servidor:', en: 'Run the server:' },
  techLocalRunDesc: { es: 'Inicia el servidor de desarrollo.', en: 'Starts the development server.' },
  techLocalUrl: { es: 'El servidor estará disponible en', en: 'The server will be available at' },
  
  // User Manual
  userTitle: { es: 'Manual de Usuario', en: 'User Manual' },
  userIntro: { es: 'Bienvenido a KeittWeb. Este manual le guiará a través de las funcionalidades clave de la aplicación, desde el acceso inicial hasta el uso de los diferentes módulos de análisis y gestión agrícola.', en: 'Welcome to KeittWeb. This manual will guide you through the key functionalities of the application, from initial access to using the different agricultural analysis and management modules.' },
  userLoginTitle: { es: 'Ingreso al Sistema', en: 'System Login' },
  userLoginDesc: { es: 'Para comenzar a utilizar KeittWeb, primero debe iniciar sesión con sus credenciales.', en: 'To start using KeittWeb, you must first log in with your credentials.' },
  userLoginStep1: { es: 'Navegue a la página de inicio de la aplicación.', en: 'Navigate to the application\'s home page.' },
  userLoginStep2: { es: 'Introduzca su nombre de usuario y contraseña en los campos correspondientes.', en: 'Enter your username and password in the corresponding fields.' },
  userLoginStep3: { es: 'Haga clic en el botón "Iniciar Sesión".', en: 'Click the "Login" button.' },
  userLoginImgAlt: { es: 'Pantalla de inicio de sesión', en: 'Login screen' },
  userModulesTitle: { es: 'Módulos de la Aplicación', en: 'Application Modules' },
  userModulesDesc: { es: 'Una vez dentro, tendrá acceso a varios módulos desde el menú de navegación lateral. A continuación se describe cada uno de ellos.', en: 'Once inside, you will have access to several modules from the side navigation menu. Each is described below.' },
  userHomeModuleTitle: { es: 'Inicio e Información', en: 'Home and Information' },
  userHomeModuleDesc: { es: 'Las secciones de Inicio, Introducción e Información le proporcionan una visión general del proyecto, noticias relevantes y datos de contacto. Son el punto de partida para familiarizarse con la plataforma.', en: 'The Home, Introduction, and Information sections provide an overview of the project, relevant news, and contact information. They are the starting point for familiarizing yourself with the platform.' },
  userSoilModuleTitle: { es: 'Análisis de Suelo', en: 'Soil Analysis' },
  userSoilModuleDesc: { es: 'Este es uno de los módulos centrales. Aquí puede registrar los resultados de un análisis de suelo para obtener recomendaciones de fertilización. El proceso es el siguiente:', en: 'This is one of the central modules. Here you can record the results of a soil analysis to get fertilization recommendations. The process is as follows:' },
  userSoilModuleStep1: { es: 'Haga clic en "Análisis de Suelo" en el menú.', en: 'Click on "Soil Analysis" in the menu.' },
  userSoilModuleStep2: { es: 'Rellene el formulario con los valores de pH, materia orgánica, nutrientes, etc.', en: 'Fill out the form with the values for pH, organic matter, nutrients, etc.' },
  userSoilModuleStep3: { es: 'Envíe el formulario para ver los resultados y recomendaciones.', en: 'Submit the form to see the results and recommendations.' },
  userSoilModuleImgAlt: { es: 'Formulario de análisis de suelo', en: 'Soil analysis form' },

  userFarmingModuleTitle: { es: 'Riego, Siembra y Cultivo', en: 'Irrigation, Sowing, and Cultivation' },
  userFarmingModuleDesc: { es: 'Estos módulos le permiten gestionar y consultar información específica sobre:', en: 'These modules allow you to manage and consult specific information about:' },
  userFarmingIrrigation: { es: 'Riego: Recomendaciones y calendarios de riego basados en el tipo de cultivo y clima.', en: 'Irrigation: Recommendations and irrigation schedules based on crop type and climate.' },
  userFarmingSowing: { es: 'Tipo de Siembra: Guías sobre las mejores prácticas de siembra.', en: 'Sowing Type: Guides on best sowing practices.' },
  userFarmingCultivation: { es: 'Cultivo: Seguimiento del ciclo de vida del cultivo, desde la siembra hasta la cosecha.', en: 'Cultivation: Tracking the crop life cycle, from sowing to harvest.' },
  userFutureModuleTitle: { es: 'Apartados Futuros', en: 'Future Sections' },
  userFutureModuleDesc: { es: 'El equipo de KeittWeb está trabajando para expandir la plataforma. Próximamente se incluirán los siguientes módulos:', en: 'The KeittWeb team is working to expand the platform. The following modules will be included soon:' },
  userFutureFoliar: { es: 'Análisis Foliar: Para diagnosticar deficiencias nutricionales a través de las hojas.', en: 'Foliar Analysis: To diagnose nutritional deficiencies through the leaves.' },
  userFutureHarvest: { es: 'Cosecha y Post-Cosecha: Herramientas para optimizar la recolección y el manejo del producto.', en: 'Harvest and Post-Harvest: Tools to optimize collection and product handling.' },
  userFaqTitle: { es: 'Preguntas Frecuentes (FAQ)', en: 'Frequently Asked Questions (FAQ)' },
  userFaq1Trigger: { es: '¿Qué hago si olvidé mi contraseña?', en: 'What do I do if I forgot my password?' },
  userFaq1Content: { es: 'En la página de inicio de sesión, encontrará un enlace de "¿Olvidó su contraseña?". Haga clic en él y siga las instrucciones para restablecerla a través de su correo electrónico.', en: 'On the login page, you will find a "Forgot your password?" link. Click it and follow the instructions to reset it via your email.' },
  userFaq2Trigger: { es: 'El sistema muestra un error de "Credenciales Incorrectas".', en: 'The system shows an "Incorrect Credentials" error.' },
  userFaq2Content: { es: 'Este error significa que el nombre de usuario o la contraseña que introdujo no coinciden con nuestros registros. Verifique que ambos datos estén escritos correctamente. Recuerde que la contraseña distingue entre mayúsculas y minúsculas.', en: 'This error means that the username or password you entered does not match our records. Verify that both details are spelled correctly. Remember that the password is case-sensitive.' },
  userFaq3Trigger: { es: 'No puedo ver los resultados de mi análisis de suelo.', en: 'I can\'t see the results of my soil analysis.' },
  userFaq3Content: { es: 'Asegúrese de haber completado todos los campos obligatorios del formulario. Si el problema persiste, intente recargar la página o contacte con el soporte técnico.', en: 'Make sure you have completed all the required fields in the form. If the problem persists, try reloading the page or contact technical support.' },

};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const t = useCallback((key: string) => {
    return translations[key]?.[locale] || key;
  }, [locale]);
  
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
