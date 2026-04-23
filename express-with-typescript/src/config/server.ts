
import express from "express";
import usersRoutes from "../routes/user.routes";
import cors from 'cors';
import { logger } from "../middleware/logger.middleware";

const app = express();

console.log("1. Initialisation des middlewares...");
app.use(cors());
app.use(express.json());
app.use(logger);

console.log("2. Chargement des routes...");
app.use("/users", usersRoutes);

const port = 3000;

const server = app.listen(port, () => {
  console.log(`🚀 Serveur réellement actif sur : http://localhost:${port}`);
});



// SOLUTION RADICALE : On force Node à rester éveillé
// On lui donne une petite tâche à faire toutes les heures pour qu'il ne s'éteigne pas
setInterval(() => {}, 1000 * 60 * 60);

export default app;


/*
import express from "express";
import usersRoutes from "../routes/user.routes";
import cors from 'cors';
import { logger } from "../middleware/logger.middleware";

const app = express();

console.log("1. Initialisation des middlewares...");
app.use(cors());
app.use(express.json());
app.use(logger);

console.log("2. Chargement des routes...");
app.use("/users", usersRoutes);

const port = 3000;
const server = app.listen(port, () => {
  console.log(`🚀 Serveur réellement actif et en attente sur : http://localhost:${port}`);
});
// Cette partie doit être bien présente et ne pas être dans un bloc IF bizarre
server.keepAliveTimeout = 70000;
export default app;
// Supprime l'export default pour le test, on veut que le fichier s'exécute
*/