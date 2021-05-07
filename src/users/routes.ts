import express from "express";
import mongoose, { Model, Schema }  from "mongoose";
import loginController from "../login/LoginFactory";
import { Users } from '../users/UserEntity';
 
var router = express.Router();

//TODO user o router com a forma mais simples
router.get('/users',function (req,res,next) {loginController.verifyToken(req,res,next)},function (req, res) { 

  return res.send("tudo saindo como o planejado!");
  
})

export default router;

