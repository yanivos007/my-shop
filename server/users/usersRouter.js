const express = require("express");
var cookieSession = require("cookie-session");

const router = express.Router();
const IUser = require("./usersSchema");
const userRepository = require("./usersRepository");
const bcrypt = require("bcrypt");
const session = require("express-session");

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
  const { email, password } = req.body;
  const user = await userRepository.usersByEmail(email);
  console.log(user + "user");
  if (!user) {
    res.status(500).send("cannot find user");
  }
  try {
    const hash = await userRepository.hashPassword(email);
    console.log("hash" + hash);
    if (await bcrypt.compare(password, hash)) {
      req.session.email = email;
      console.log(session);
      const sessionUser = remove(user, ["password"]);
      console.log("sessionUser" + sessionUser);
    } else {
      res.send("were bad");
      console.log("were bad");
    }
  } catch {
    res.status(500).send("not getting any user");
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
    const user = await userRepository.usersById({
      Users: req.params.accountNumber,
    });
    if (req.session.password) {
      res.status(200).json(user);
      res.redirect("/home");
    }
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get user by id at usersRouter" });
  }
});
module.exports = router;
