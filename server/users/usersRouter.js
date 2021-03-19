const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const IUser = require("./usersSchema");
const userRepository = require("./usersRepository");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const user = new IUser({
      email: req.body.email,
      password: hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      adress: req.body.adress,
      role: req.body.role,
    });
    const newUser = await user.save();
    delete newUser.password;
    res.json(newUser);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await userRepository.findOne({ userName });
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
    console.log("im in users");
    const users = await userRepository.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ err: "not getting into get at usersRouter" });
  }
});
router.get("/get/:id", async (req, res) => {
  try {
    const user = await userRepository.usersById({
      Users: req.params.accountNumber,
    });
    res.status(200).json(user);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get user by id at usersRouter" });
  }
});
module.exports = router;
