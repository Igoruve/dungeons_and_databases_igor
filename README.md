# Dungeons and Databases
Dungeons and Databases is a backend project developed from scratch using Node.js, Express, and Sequelize, with persistence in a MySQL database. The main goal is to showcase the construction of a functional and secure RESTful API, integrating modern backend development practices.

## Technologies Used
- Node.js + Express (server and routing)

- Sequelize (ORM for MySQL)

- MySQL (relational database)

- Docker (containerization)

- Workbench (visual database management)

- Postman (API testing)

- dotenv (environment variable management)

- bcrypt (password encryption)

- JWT (JSON Web Tokens) (secure authentication)

## Installation and Execution
### Clone the repository:
git clone https://github.com/your_user/dungeons_and_databases.git
cd dungeons_and_databases

### Install dependencies:
npm install

### Create a .env file at the root of the project with the following variables:

DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=dungeons_and_databases
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=your_jwt_secret

### (Optional) If you want to run everything with Docker:

docker-compose up --build

## Authentication and Security
Registration and login are protected using bcrypt to securely store passwords.

JWT is used to generate session tokens and to authenticate private routes.

## Main API Features
### Authentication:
POST /register — Create a new user.

POST /login — Authenticate a user and return a token.

### Characters (example):
GET /character — List all characters.

GET /character/:id — View details of a character.

POST /character — Create a character.

PUT /character/:id — Update a character.

DELETE /character/:id — Delete a character.

## Testing
Endpoints were tested using Postman.

## Docker
The project can easily be launched using Docker, with the database included.

docker-compose up

This will launch both the Node.js server and a MySQL instance.

Developed by igoruve
