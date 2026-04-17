import express from "express";
import usersRoutes from "../routes/user.routes";
import cors from 'cors';

const app = express();

// Middleware CORS pour lier le frontend et le backend
app.use(cors());

// Permet de parser le JSON du body
app.use(express.json());

// Monter le route /users
app.use("/users", usersRoutes);

// Ajoute cette route de test pour vérifier si ça répond
app.get('/users/1', (req, res) => {
  res.json({ 
    id: 1, 
    name: "Imane Test", 
    email: "imane@test.com" 
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
export default app;