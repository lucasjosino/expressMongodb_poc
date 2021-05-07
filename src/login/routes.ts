import express from "express";
import loginController from "./LoginFactory";
 
var router = express.Router();

router.post('/login', function (req, res) { 

  loginController.login(req,res);
  
})

export default router;

