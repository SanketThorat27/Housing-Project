const express=require("express");
const { handleUserSignup, handlegetUserSignup, handleGetUserLogin } = require("../controllers/user");
const router =express.Router();

router.post('/signup',handleUserSignup)
router.get('/signup',handlegetUserSignup)

router.post('/login',handleGetUserLogin)
router.get('/login',handleGetUserLogin)
module.exports=router