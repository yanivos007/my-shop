const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const usersSchema = require ('./usersSchema')

router.post('/post', (req, res)=> {
    const {id, email, password, verifyPassword, firstName, lastName, city, adress } = req.body;
    let usersSchema ={};
    usersSchema.id = id;
    usersSchema.email = email;
    usersSchema.password = password;
    usersSchema.verifyPassword = verifyPassword;
    usersSchema.firstName = firstName;
    usersSchema.lastName = lastName;
    usersSchema.city = city;
    usersSchema.adress = adress;
res.json(usersSchema)
})
router.get('/', (req, res)=> {
    try{

        const fetchAllUsers = await Users.find();
        res.status(200).json(fetchAllUsers);
    }catch(err){
        res.status(400).json({ err: "not getting into get at usersRouter" })

    }

})
router.post('/get/:id', (req, res)=> {
    try{

        const fetchUserById = await Users.find({Users: req.params.accountNumber});
        res.status(200).json( fetchUserById );
    }catch{
        res.status(400).json({ err: "not getting into get user by id at usersRouter" })
    }

})
