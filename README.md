# proyecto_individual_backend

## Dungeons and Databases
Dungeons and Databases es un proyecto backend desarrollado desde cero utilizando Node.js, Express y Sequelize, con persistencia en una base de datos MySQL. El objetivo principal es mostrar la construcción de una API RESTful funcional y segura, integrando prácticas modernas de desarrollo backend.

## Tecnologías utilizadas
- Node.js + Express (servidor y enrutamiento)

- Sequelize (ORM para MySQL)

- MySQL (base de datos relacional)

- Docker (contenedorización)

- Workbench (gestión visual de la base de datos)

- Postman (pruebas de la API)

- dotenv (gestión de variables de entorno)

- bcrypt (encriptación de contraseñas)

- JWT (JSON Web Tokens) (autenticación segura)

## Instalación y ejecución
### Clona el repositorio:
git clone https://github.com/tu_usuario/dungeons_and_databases.git
cd dungeons_and_databases

### Instala las dependencias:
npm install
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_NAME=dungeons_and_databases
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=tu_secreto_jwt

(Opcional) Si quieres correr todo con Docker:
docker-compose up --build

## Autenticación y seguridad
Registro y Login protegidos mediante bcrypt para almacenar contraseñas de manera segura.

JWT utilizado para la generación de tokens de sesión y autenticación de rutas privadas.

## Principales funcionalidades de la API
### Autenticación:

POST /register — Crear un nuevo usuario.

POST /login — Autenticar un usuario y devolver un token.

### Personajes (ejemplo):

GET /character — Listar todos los personajes.

GET /character/:id — Ver detalles de un personaje.

POST /character — Crear un personaje.

PUT /character/:id — Actualizar un personaje.

DELETE /character/:id — Eliminar un personaje.


### Pruebas
Se realizaron pruebas de los endpoints utilizando Postman.

## Docker
El proyecto puede levantarse fácilmente utilizando Docker con la base de datos incluida.

docker-compose up
Esto levantará tanto el servidor de Node.js como una instancia de MySQL configurada.

Desarrollado por igoruve
