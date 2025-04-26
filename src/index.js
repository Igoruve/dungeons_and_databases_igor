import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import router from "./routes/index.js";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SECRET;

// Middlewares básicos
app.use(cors()); // configurar CORS
app.use(express.json()); // configurar body parser para recibir datos en formato json
app.use(express.urlencoded({ extended: true })); // configurar body parser para recibir datos de formularios
app.use(express.static("src/public")); // configurar directorio de archivos estáticos

// Motor de plantillas Pug
app.set("view engine", "pug");
app.set("views", "src/views");

// Configurar sesión
app.use(
  session({
    secret: process.env.SECRET,
    resave: false, // no guardar la cookie en cada petición
    saveUninitialized: false, // no guardar la cookie si no se inicializa
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // tiempo de vida de la cookie en milisegundos
    },
  })
);

// Rutas
app.use("/", router);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
