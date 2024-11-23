import express from "express";
import cors from 'cors';

// Creamos la aplicacion a traves del paquete express
const app = express();
// Configurar rutas para el acceso personal
import personalRutas from "./routes/personalRutas";
// Todo lo que regresa al usuario es tipo JSON
app.use(express.json());
app.use(cors());
// Puerto para escuchar la peticion del frontend
const PUERTO = 3001;
// Activar las ruta base
app.use("/api/personal", personalRutas);
// RUTA
// app.get("/hola", (_req, res) => {
//   let fecha = new Date().toLocaleDateString();
//   res.send("Mundo con la fecha" + fecha + " con TypeScript");
// });

// Encendemos el servidor y lo ponemos en escucha
app.listen(PUERTO, () => {
  console.log(`Servidor en ejecucion y escuchando en el puerto ${PUERTO}`);
});
