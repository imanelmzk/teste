import { request } from './../../node_modules/effect/src/Effect';
import { PrismaClient } from '@prisma/client';
import {Request, Response} from "express";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) =>{
    const users = await prisma.user.findMany();
    res.json(users);
};

export const createUser = async (req: Request, res: Response) =>{
    const {name, email} = req.body;
    const newUser = await prisma.user.create({
        datae: {name, email}
    });
    res.json(newUser);
}







//import { Request, Response }  from "express";

//export const getUsers = (req : Request, res: Response) => {
//    const users = [
//        {id : 1, name: "Imane"},
//        {id: 2, name: "Yassine"},
//    ];
//    res.json(users);
//};