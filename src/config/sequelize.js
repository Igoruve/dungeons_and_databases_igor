import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT || 3306; // Usar el puerto del .env o 3306 por defecto
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_DIALECT = "mysql";

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

async function testConnection(retries = 5, delay = 5000) {
  for (let i = 0; i < retries; i++) {
    try {
      await connection.authenticate();
      console.log("Connection has been established successfully.");
      return true;
    } catch (error) {
      console.error(`Connection attempt ${i+1} failed:`, error);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay/1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  console.error("Failed to establish connection after multiple attempts");
  return false;
}

testConnection();

export default connection;