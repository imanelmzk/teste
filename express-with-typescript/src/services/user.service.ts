//import { updateUser } from './../controllers/user.controller';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// * Récupérer tous les utilisateurs By ID + * GET *
export const getUserById = async(id: number) =>{
    console.log(`Récupération de l'utilisateur avec l'ID : ${id}`);
    return await prisma.user.findUnique({
        where : {id : id}
    });
};

// * Récupérer tous les utilisateurs + * GET *
export const getUsers = async() =>{
    console.log(`Récupération de tous les utilisateurs`);
    return await prisma.user.findMany({
        orderBy : {id : 'asc'} // Tri par ID croissant
    });    
}

// * Créer un nouvel utilisateur + * POST *
export const createUser = async(name: string, email: string)=>{
    console.log(`Création d'un nouvel utilisateur : ${name} (${email})`);
    return await prisma.user.create({
        data : {name,email}
    });
};

// * Modifier un utilisateur via id + * PUT/PATCH *
export const updateUser = async(id: number, name: string, email?: string)=>{
    return await prisma.user.update({
        where : {id},
        data : {
            name : name,
            email : email
           // ...(email && { email }) // Si email est fourni, on l'ajoute à l'objet data, sinon on ne le modifie pas
        }
    });
    
};

// * Supprimer un utilisateur via id + * DELETE *
export const deleteUser = async(id: number) =>{
    return await prisma.user.delete({
        where : {id}
    });
};