# Dungeons and Databases

**Dungeons and Databases** es una API REST desarrollada con **Node.js**, **Express** y **Sequelize**, como parte de un proyecto de formación en desarrollo **Full-Stack**. El objetivo principal es demostrar la integración de una base de datos relacional con una arquitectura de servidor organizada, escalable y segura.

## Funcionalidades

- Registro y login de usuarios con autenticación **JWT**
- Encriptación de contraseñas mediante **bcrypt**
- Relaciones entre tablas en una base de datos **MySQL**
- Control de acceso con **middleware de validación**
- Arquitectura modular y mantenible

## 🛠Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [JWT (JSON Web Tokens)](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## 📁 Estructura del proyecto

├── config/ # Configuración de Sequelize y base de datos
├── controllers/ # Lógica de negocio para cada endpoint
├── middleware/ # Validación y autenticación
├── models/ # Definición de modelos y relaciones Sequelize
├── routes/ # Rutas de la API
├── utils/ # Funciones auxiliares
├── .env # Variables de entorno
└── index.js # Punto de entrada principal

## ⚙️ Instalación

1. **Clona el repositorio:**
git clone https://github.com/Igoruve/dungeons-and-databases-backend.git
cd dungeons-and-databases-backend

Instala las dependencias:

npm install
Crea un archivo .env con las siguientes variables:
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
JWT_SECRET=tu_secreto_jwt
Ejecuta las migraciones (si aplica) y levanta el servidor:

npm start
El servidor estará disponible en http://localhost:3000.

## Endpoints principales
POST /auth/register – Registro de nuevos usuarios

POST /auth/login – Inicio de sesión y generación de token JWT

GET /protected – Ejemplo de ruta protegida (requiere token)

Nota: Puedes expandir esta sección incluyendo más endpoints específicos.

## Pruebas
Pruebas manuales recomendadas mediante herramientas como Postman o Insomnia. También puedes implementar tests automatizados con Jest o Mocha si deseas ampliar el proyecto.

## Contribuciones
¡Contribuciones, sugerencias y mejoras son bienvenidas! Siéntete libre de abrir issues o pull requests.
