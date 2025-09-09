export const documentationContext = `
## Manual de Instalación

Requerimientos:
- SO: Windows Server 2019+
- CPU: 2.0 GHz Dual Core
- RAM: 4 GB
- Almacenamiento: 50 GB
- Software: Python 3.10+, Node.js 18+, Git

Instalación en Windows Server:
1. Conectar por Escritorio Remoto.
2. Instalar Python 3.10+ (añadir a PATH).
3. Instalar Node.js (LTS).
4. Instalar Git.
5. Clonar el repositorio: git clone https://github.com/tu-usuario/KeittWeb.git

Configuración de GitHub:
- Crear un repositorio en GitHub.
- Subir el código:
  git remote add origin https://github.com/tu-usuario/KeittWeb.git
  git branch -M main
  git push -u origin main

Despliegue en Render:
1. Registrarse en Render con GitHub.
2. Hacer clic en "New +" y seleccionar "Web Service".
3. Seleccionar el repositorio KeittWeb.
4. Llenar los campos del formulario (nombre, rama, etc.).
5. Comando de build: ./build.sh
6. Comando de inicio: gunicorn keittweb.wsgi
7. Hacer clic en "Deploy Web Service".

---

## Manual Técnico

Arquitectura:
- Frontend: Angular 18 (SPA).
- Backend: Django + Python 3.10 con Django REST Framework (API RESTful).
- Base de Datos: PostgreSQL, gestionada con Django ORM.

Procesos Principales:
- Autenticación: Basada en tokens JWT.
- Análisis de Suelo: El frontend envía datos a la API, el backend procesa y devuelve un informe.

Estructura de Carpetas (Backend):
- backend/: Contenedor principal.
  - keittweb/: Configuraciones globales.
    - settings.py: Configuración principal.
    - urls.py: Enrutador principal.
  - 13 aplicaciones (analisis_foliar, analisis_suelo, etc.)
  - build.sh: Script para instalar dependencias y migraciones.
  - requirements.txt: Dependencias de Python.

Ejemplo de App (suelo/):
- fixtures/: Datos iniciales para la BD.
- migrations/: Migraciones de la BD.
- admin.py: Configuración del admin de Django.
- apps.py: Configuración de la app.
- models.py: Modelos de datos.
- serializers.py: Convierten modelos a JSON.
- urls.py: Rutas de la app.
- views.py: Lógica de las solicitudes HTTP.

Despliegue Local:
1. Clonar: git clone https://github.com/agl5702/backup-guia-mango
2. Crear y activar entorno virtual: python -m venv venv && source venv/bin/activate
3. Instalar dependencias: pip install -r requirements.txt
4. Migraciones:
   - python manage.py makemigrations users tipo_siembra ...
   - python manage.py migrate
5. Cargar datos iniciales: python manage.py loaddata user.json ...
6. Ejecutar servidor: python manage.py runserver

---

## Manual de Usuario

Ingreso al Sistema:
1. Ir a la página de inicio.
2. Introducir usuario y contraseña.
3. Clic en "Iniciar Sesión".

Módulos:
- Inicio e Información: Visión general, noticias y contacto.
- Análisis de Suelo: Registrar análisis para obtener recomendaciones de fertilización.
- Riego, Siembra y Cultivo: Gestión y consulta de información.
- Futuros: Análisis Foliar, Cosecha.

Preguntas Frecuentes (FAQ):
- ¿Olvidé mi contraseña?: Usar el enlace en la página de login.
- "Credenciales Incorrectas": Verificar datos, la contraseña distingue mayúsculas y minúsculas.
- No veo resultados del análisis: Asegurarse de completar todos los campos obligatorios.
`;
