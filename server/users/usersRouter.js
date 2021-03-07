const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const usersSchema = require("./usersSchema");
const userRepository = require("./usersRepository");

router.post("/register", async (req, res) => {
  const {
    id,
    email,
    password,
    verifyPassword,
    firstName,
    lastName,
    city,
    adress,
  } = req.body;
  let usersSchema = {};
  usersSchema.id = id;
  usersSchema.email = email;
  usersSchema.password = password;
  usersSchema.verifyPassword = verifyPassword;
  usersSchema.firstName = firstName;
  usersSchema.lastName = lastName;
  usersSchema.city = city;
  usersSchema.adress = adress;
  res.json(usersSchema);
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await usersSchema.findOne({ userName });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(500).send({ error });
    }
  } catch (err) {
    console.log(err);
  }
});
// && bcrypt.compareSynce(password, user.hash)

router.get("/", async (req, res) => {
  try {
    const users = await userRepository.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ err: "not getting into get at usersRouter" });
  }
});
router.get("/get/:id", async (req, res) => {
  try {
    const user = await userRepository.usersById({ Users: req.params.accountNumber });
    res.status(200).json(user);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get user by id at usersRouter" });
  }
});
module.exports = router;
