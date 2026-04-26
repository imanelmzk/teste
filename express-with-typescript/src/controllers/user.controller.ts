import { createUserSchema } from '../validators/user.schema';
//import { getUserById } from './user.controller';
// import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import /*getUserById + createUser + updateUser + deleteUser*/ * as userService from "../services/user.service";

/*
// 1. On garde notre test simplifié pour voir si ça répond enfin
export const getUserById = async (req: Request, res: Response) => {
  console.log("Requête reçue pour l'ID:", req.params.id);
  return res.json({ message: "Le backend fonctionne enfin !" });
};

// 2. On ajoute les fonctions vides pour que TypeScript arrête de crier
export const createUser = async (req: Request, res: Response) => {
  return res.json({ message: "Fonction createUser prête" });
};

export const updateUserController = async (req: Request, res: Response) => {
  return res.json({ message: "Fonction update prête" });
};

export const deleteUser = async (req: Request, res: Response) => {
  return res.json({ message: "Fonction delete prête" });
};*/

// * Créer un nouvel utilsateur avec validation ZOD
export const createUserSchemaTeste = async(req: Request, res: Response) =>{
  try{
      //* 1. On valide les données reçues (req.body) avec ZOD 
      //* Si les données sont fausses, 
      //* Zod lance une erreur qui va directement dans le catch
      const validatedData = createUserSchema.parse(req.body); // ✅ corrige "createUserSchema.({name, email})" → "createUserSchema.parse(req.body)"

      //* 2. Si les données sont valides, on peut les utiliser pour créer l'utilisateur
      const {name, email} = validatedData; // ✅ corrige "const {name, email} = req.body;" → "const {name, email} = validation;"

      const newUser = await userService.createUser(name, email);
      res.status(201).json(newUser);
  }catch(error : any){
    //* 3. Si ZOD détecte une erreur, on renvoi un message précis
    if(error.name == "ZODErreur"){
      return res.status(400).json({
        error: "Données invalides",
        details: error.errors // Donne les détails.
      });
    }
      res.status(500).json({error : "Serveur échoué"})
  }
}


// * Récupérer tous les utilisateurs par ID+ * GET *
export const getUserById = async (req: Request, res: Response) => {
  console.log("Requete reçue pour l'ID:", req.params.id); // ✅ Ajoute un log pour vérifier que l'ID est bien reçu
  try {
    const user = await userService.getUserById(Number(req.params.id));
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    return res.json(user); // <--- Vérifie que le "res.json" est bien là
  } catch (error) {
    // Si tu oublies le res.status ici, en cas d'erreur, ça chargera à l'infini
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
export const getUsers = async(req: Request, res: Response) =>{
  try{
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
}

// *  Créer un nouvel utilisateur + * POST *
export const createUser = async(req: Request, res:Response) =>{
  try{
    const validatedData = createUserSchema.parse(req.body);
    const {name, email} = validatedData;
    const newUser = await userService.createUser(name, email);
    res.status(201).json(newUser);
  }catch(error){
    console.error("détail du l'erreur:",error);
    res.status(500).json({error : "Erreur Interne"})
  };
};
export const updateUserController = async(req: Request, res: Response) =>{
  try{
    // On force TYPESCRIPT à considérer req.params.id comme une string, puis on le convertit en nombre avec parseInt
    const id = parseInt(req.params.id as string); // ✅ corrige "const id = Number(req.params.id);" → "const id = parseInt(req.params.id as string);"
    const {name, email} = req.body;
    // On appale le service de mise à jour en lui passant l'id et le nom (email est optionnel)
    const updatedUser = await userService.updateUser(id, name, email);
    res.json(updatedUser);
  }catch(error){
    res.status(500).json({error : "Erreur lors de la mise à jour de l'utilisateur"})
  }
}

// * Modifier un utilisateur via id + * PUT/PATCH *
export const updateUser = async(req: Request, res: Response) =>{
  try{
    const id = Number(req.params.id); 
    const {name, email} = req.body;
    const updatedUser = await userService.updateUser(id, name, email);
    res.json(updatedUser);
  }catch(error){
      res.status(404).json({error : "Utilisateur non trouvé"})
    };
};


 // * Supprimer un utilisateur via id + * DELETE *
 export const deleteUser = async (req:Request, res:Response) =>{
  try{
    const id = Number(req.params.id);
    // const {name, email} = req.body;
    const deletedUser = await userService.deleteUser(id);
    res.json(deletedUser);
  }catch(error){
    res.status(404).json({error : "Utilisateur non trouvé"})
  }

 }




// const prisma = new PrismaClient(); On supprime ceci, car on a remplacé tous par "srevice/user.service.ts"
/*
// * Récupérer tous les utilisateurs + * GET * 
export const getUserById = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findUnique({
      where: { id: Number(req.params.id) } // ✅ corrige "id" → "Number(req.params.id)"
    })
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
};

// *  Créer un nouvel utilisateur + * POST * 
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email } // ✅ corrige "datae" → "data"
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
  }
};

// * Modifier un utilisateur via id + * PUT/PATCH *
export const updateUser = async(req: Request, res : Response) => {
  const id = Number(req.params.id);
  const {name, email} = req.body;

  try{
    const updatedUser = await prisma.user.update({
      where : {id},
      data : {name, email}
    })
    res.json(updatedUser);
  }
  catch{
    //res.status(500).json({error : "Erreur lors de la modification de l'utilisateur"})
    res.json({message: "Erreur lors de la modification de l'utilisateur"})
  }
}

// * Supprimer un utilisateur via id + * DELETE *
export const deleteUser = async(req: Request, res: Response) =>{
  const id = Number(req.params.id);
  try{
    const deletedUser = await prisma.user.delete({
      where : {id}
    });
    res.json(deletedUser);
  }catch(error){
    res.json({message: "Erreur lors de la suppression de l'utilisateur"})
  }
}*/