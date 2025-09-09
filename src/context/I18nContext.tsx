
"use client";

import React, { createContext, useState, useContext, ReactNode, useCallback, useMemo } from 'react';

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
  downloadDocs: { es: 'Descargar Documentación', en: 'Download Documentation' },
  scrollToTop: { es: 'Volver arriba', en: 'Scroll to top' },
  close: { es: 'Cerrar', en: 'Close' },
  send: { es: 'Enviar', en: 'Send' },

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
  
  // Resources
  additionalResourcesTitle: { es: 'Recursos Adicionales', en: 'Additional Resources' },
  authorContactTitle: { es: 'Datos de contacto del autor', en: 'Author contact details' },
  authorContactAuthor: { es: 'Autor', en: 'Author' },
  authorContactEmail: { es: 'Correo electrónico', en: 'Email' },
  authorContactPhone: { es: 'Teléfono', en: 'Phone' },
  authorContactMessage: { es: 'Si tienes alguna pregunta o experimentas problemas con el sistema, no dudes en ponerte en contacto. Estaré encantado de ayudarte con cualquier duda o inconveniente que puedas tener.', en: 'If you have any questions or experience problems with the system, do not hesitate to get in touch. I will be happy to help you with any questions or issues you may have.' },
  
  // Modal
  modalViewDocs: { es: 'Ver documentación', en: 'View documentation' },
  modalDownloadPDF: { es: 'Descargar PDF', en: 'Download PDF' },
  modalInstallDesc: { es: 'Esta sección le guiará a través de la instalación y configuración del entorno de KeittWeb en su servidor.', en: 'This section will guide you through the installation and setup of the KeittWeb environment on your server.' },
  modalTechDesc: { es: 'Explore los detalles técnicos, la arquitectura del sistema y la estructura del código para desarrolladores.', en: 'Explore the technical details, system architecture, and code structure for developers.' },
  modalUserDesc: { es: 'Aprenda a utilizar todas las funciones de KeittWeb, desde el inicio de sesión hasta los módulos de análisis.', en: 'Learn how to use all the features of KeittWeb, from login to the analysis modules.' },
  modalViewCanva: { es: 'Ver presentación', en: 'View presentation' },
  modalViewVideo: { es: 'Ver video', en: 'Watch video' },


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
  installRenderDescV2: { es: 'Render es una plataforma en la nube que facilita el despliegue de aplicaciones. Usaremos Render para alojar nuestra aplicación.', en: 'Render is a cloud platform that simplifies application deployment. We will use Render to host our application.' },
  installRenderV2Step1: { es: 'Nos dirigimos a la página oficial de Render y nos registramos o iniciamos sesión con GitHub.', en: 'Go to the official Render page and register or log in with GitHub.' },
  installRenderV2Step2: { es: 'Una vez dentro, deberíamos ver este panel de control.', en: 'Once inside, we should see this dashboard.' },
  installRenderV2ImgAlt1: { es: 'Panel de control de Render', en: 'Render dashboard' },
  installRenderV2Step3: { es: 'Hacemos clic en el botón "New +" y seleccionamos la opción "Web Service".', en: 'Click the "New +" button and select the "Web Service" option.' },
  installRenderV2Step4: { es: 'Seleccionamos nuestro repositorio KeittWeb y hacemos clic en el botón "Connect".', en: 'Select our KeittWeb repository and click the "Connect" button.' },
  installRenderV2ImgAlt2: { es: 'Conectar repositorio en Render', en: 'Connect repository in Render' },
  installRenderV2Step5: { es: 'Llenamos los campos del formulario con la información del proyecto (nombre, rama, comando de build, etc.).', en: 'Fill out the form fields with the project information (name, branch, build command, etc.).' },
  installRenderV2Step6: { es: 'En la parte inferior, hacemos clic en el botón "Deploy Web Service" y esperamos unos minutos a que finalice el despliegue.', en: 'At the bottom, click the "Deploy Web Service" button and wait a few minutes for the deployment to finish.' },
  installRenderV2Step7: { es: 'Al finalizar, veremos un mensaje de éxito, lo que significa que nuestro sitio web ha sido desplegado correctamente.', en: 'Upon completion, we will see a success message, which means our website has been deployed correctly.' },
  installRenderV2ImgAlt3: { es: 'Mensaje de despliegue exitoso en Render', en: 'Successful deployment message on Render' },
  installRenderV2Step8: { es: '¡Listo! Ahora puedes acceder a tu aplicación KeittWeb desde la URL proporcionada por Render.', en: 'Done! You can now access your KeittWeb application from the URL provided by Render.' },
  
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
  folderStructureIntro: { es: "La carpeta inicial es la llamada “backend” en ella se encuentran las configuraciones básicas, cors, conexión a la base de datos y su motor, permisos de autenticación, middleware, aplicaciones instaladas.", en: "The initial folder is called “backend”; it contains basic settings, CORS, database connection and engine, authentication permissions, middleware, and installed applications." },
  folderBackendDesc: { es: "Contenedor principal del proyecto Django.", en: "Main Django project container." },
  folderKeittwebDesc: { es: "Configuraciones globales del proyecto.", en: "Global project settings." },
  folderSettings: { es: 'Configuración principal del proyecto (apps, BD, etc.).', en: 'Main project settings (apps, DB, etc.).' },
  folderUrls: { es: 'Enrutador principal de URLs del proyecto.', en: 'Main project URL router.' },
  folderAppsTitle: { es: "Aplicaciones (Apps)", en: "Applications (Apps)" },
  folderAppsDesc: { es: "Hay un total de 13 aplicaciones para cada módulo.", en: "There are a total of 13 applications for each module." },
  folderBuildShDesc: { es: "Script para instalar dependencias y ejecutar migraciones.", en: "Script to install dependencies and run migrations." },
  folderRequirements: { es: 'Lista de todas las dependencias de Python del proyecto.', en: 'Lists all of the project\'s Python dependencies.' },
  folderAppExampleIntro: { es: "A continuación, se detalla la estructura de una aplicación de ejemplo, `suelo`, que es representativa de las demás:", en: "Below is the detailed structure of an example application, `suelo`, which is representative of the others:" },
  folderSueloAppDesc: { es: "App que se encarga del registro y análisis de datos del suelo.", en: "App responsible for recording and analyzing soil data." },
  folderFixturesDesc: { es: "Contiene datos iniciales que son necesarios para realizar algunos procesos, por lo cual, al momento de iniciar el servidor, serán registrados en la base de datos, automatizando algunas funcionalidades como la de interpretación de los análisis del suelo.", en: "Contains initial data that is necessary to perform some processes, which will be registered in the database when the server starts, automating some functionalities like the interpretation of soil analysis." },
  folderMigrationsDesc: { es: "Se crea automáticamente al ejecutar nuestras primeras migraciones en la base de datos, y también cualquier cambio es registrado en dicha carpeta.", en: "It is created automatically when we run our first migrations in the database, and any changes are also recorded in this folder." },
  folderInitDesc: { es: "Tiene como función marcar un directorio como un paquete de Python. Esto permite que los módulos en ese directorio se puedan importar en otros archivos del proyecto.", en: "Its function is to mark a directory as a Python package. This allows modules in that directory to be imported into other project files." },
  folderAdminDesc: { es: "Está diseñado para registrar y personalizar la administración de los modelos en el sitio de administración de Django.", en: "It is designed to register and customize the administration of models on the Django administration site." },
  folderAppsPyDesc: { es: "Es responsable de la configuración de cada aplicación dentro de un proyecto Django. Es un componente esencial que permite definir detalles sobre la aplicación y personalizar su comportamiento.", en: "It is responsible for the configuration of each application within a Django project. It is an essential component that allows defining details about the application and customizing its behavior." },
  folderModelsDesc: { es: "Define la estructura de los datos que se gestionan en el sistema.", en: "Defines the structure of the data managed in the system." },
  folderSerializersDesc: { es: "Su funcionalidad es convertir las instancias de los modelos de Django en representaciones JSON, para que puedan ser fácilmente consumidos por el front-end.", en: "Its functionality is to convert Django model instances into JSON representations, so they can be easily consumed by the front-end." },
  folderAppUrlsDesc: { es: "Se utiliza para definir las rutas de la aplicación web, asociando las URL que los usuarios visitan con las vistas correspondientes.", en: "It is used to define the routes of the web application, associating the URLs that users visit with the corresponding views." },
  folderViewsDesc: { es: "Es donde se define la lógica que maneja las solicitudes HTTP. Las vistas son funciones o clases que reciben solicitudes de los usuarios, procesan los datos y devuelven una respuesta.", en: "This is where the logic that handles HTTP requests is defined. Views are functions or classes that receive user requests, process data, and return a response." },

  techLocalTitle: { es: 'Despliegue Local', en: 'Local Deployment' },
  techLocalDesc: { es: 'Para ejecutar el backend en un entorno de desarrollo local, siga estos pasos:', en: 'To run the backend in a local development environment, follow these steps:' },
  techLocalCloneTitle: { es: 'Clonar el repositorio', en: 'Clone the repository' },
  techLocalCloneDesc: { es: 'Primero, clone el repositorio del backend desde GitHub a su máquina local.', en: 'First, clone the backend repository from GitHub to your local machine.' },
  techLocalVenvTitle: { es: 'Crear y activar entorno virtual', en: 'Create and activate virtual environment' },
  techLocalVenvDesc: { es: 'Es una buena práctica aislar las dependencias del proyecto. Navegue a la carpeta recién creada `backup-guia-mango`.', en: 'It is good practice to isolate project dependencies. Navigate to the newly created `backup-guia-mango` folder.' },
  techLocalVenvActivate: { es: 'python -m venv venv\nsource venv/bin/activate  # En Linux/macOS\n.\\venv\\Scripts\\activate  # En Windows', en: 'python -m venv venv\nsource venv/bin/activate  # On Linux/macOS\n.\\venv\\Scripts\\activate  # On Windows' },
  techLocalDepsTitle: { es: 'Instalar dependencias', en: 'Install dependencies' },
  techLocalDepsDesc: { es: 'Instala todos los paquetes de Python necesarios para el proyecto.', en: 'Installs all necessary Python packages for the project.' },
  techLocalMigrateTitle: { es: 'Realizar migraciones', en: 'Perform migrations' },
  techLocalMigrateDesc: { es: 'Cree los archivos de migración para todas las aplicaciones del proyecto.', en: 'Create the migration files for all project applications.' },
  techLocalApplyMigrateDesc: { es: 'Aplique las migraciones para crear o actualizar el esquema de la base de datos.', en: 'Apply the migrations to create or update the database schema.' },
  techLocalLoadDataTitle: { es: 'Cargar datos iniciales', en: 'Load initial data' },
  techLocalLoadDataDesc: { es: 'Cargue los datos base necesarios (fixtures) para que el sistema funcione correctamente.', en: 'Load the necessary base data (fixtures) for the system to work correctly.' },
  techLocalRunTitle: { es: 'Ejecutar el servidor', en: 'Run the server' },
  techLocalRunDesc: { es: 'Inicia el servidor de desarrollo de Django.', en: 'Starts the Django development server.' },
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

  // Footer
  footerSlogan: { es: 'Innovación para un campo más productivo.', en: 'Innovation for a more productive field.' },
  footerServicesTitle: { es: 'Servicios', en: 'Services' },
  footerService1: { es: 'Análisis de Suelo', en: 'Soil Analysis' },
  footerService2: { es: 'Recomendaciones', en: 'Recommendations' },
  footerService3: { es: 'Planes de Cultivo', en: 'Cultivation Plans' },
  footerService4: { es: 'Consultoría', en: 'Consulting' },
  footerSupportTitle: { es: 'Soporte', en: 'Support' },
  footerSupport1: { es: 'FAQ', en: 'FAQ' },
  footerSupport2: { es: 'Contacto', en: 'Contact' },
  footerSupport3: { es: 'Tutoriales', en: 'Tutorials' },
  footerSupport4: { es: 'Estado del Sistema', en: 'System Status' },
  footerLegalTitle: { es: 'Legal', en: 'Legal' },
  footerLegal1: { es: 'Términos de Servicio', en: 'Terms of Service' },
  footerLegal2: { es: 'Política de Privacidad', en: 'Privacy Policy' },
  footerLegal3: { es: 'Licencia', en: 'License' },
  footerResourcesTitle: { es: 'Recursos', en: 'Resources' },
  footerResources1: { es: 'Blog', en: 'Blog' },
  footerResources2: { es: 'Casos de Éxito', en: 'Success Stories' },
  footerResources3: { es: 'Documentación', en: 'Documentation' },
  footerResources4: { es: 'API', en: 'API' },
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
