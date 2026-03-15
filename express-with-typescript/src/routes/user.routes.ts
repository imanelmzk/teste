import express = require("express");
import { getUsers, createUser } from "../controllers/user.controller";
import { Router } from 'express';

const router = Router();
//GET /users
router.get("/", getUsers); 

//POST /users
/*
router.post("/", (req, res) => {
    res.send("Create a new user");
}); 
*/
// OU
router.post("/", createUser);

/*
const router = express.Router();
// **  Route définie 
export default router.get("/", getUsers);
*/
export default router;