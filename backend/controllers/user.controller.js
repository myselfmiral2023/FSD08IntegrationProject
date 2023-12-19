import dotenv from 'dotenv';
//dotenv.config({ path: '../.env'})
//console.log("USERCONTROLLER env variable test:" + process.env.JWT_KEY)
// controllers/userController.js
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from 'validator';

export const register = (req, res) => {
  const email = req.body.email;
  const passwordhash = req.body.passwordhash;
  const username = req.body.username;
  const address = req.body.address;
  const role = req.body.role;
  const isActive = req.body.isActive;
  const subscribed = req.body.subscribed;

  // Check existing user
  User.findByEmail(req.body.email, (err, user) => {
    if (err) return res.status(500).json(err);
    if (user) return res.status(409).json("User already exists!");
    console.log("Start User creation-----------");
    // Create user
    var user = new User({
      email: req.body.email,
      username:req.body.username,
      passwordhash: req.body.passwordhash,
      role: req.body.role,
      isActive: req.body.isActive,
      subscribed: req.body.subscribed,
      address: req.body.address,
      songsSinceAd: req.body.songsSinceAd
  });
  console.log("End User creation-----------");
    // Create a new user
    User.createUser(user, (err) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  // Check user
  User.findByEmail(req.body.email, (err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json("User not found!");
    console.log("email-----------"+ req.body.email);
    // Check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.passwordhash, user.passwordhash);
    console.log("Password Correct?-----------"+ isPasswordCorrect);

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");
try{
    //const token = jwt.sign({ id: user.id }, 10);
    const secretKey = "10";
    const token = jwt.sign({ id: user.id }, secretKey);

    
    //const token = "";
    const { passwordhash, ...other } = user;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
    } catch(ex){
      console.log("Exception-----------------"+ex);
    }
  });
  };

export const findById = (req, res) => {
  //create method for findById
  User.findById(req.params.id, (err, user) => {
    console.log(req.params.id);
    if (err) {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving Users.",
      });
  } else {
      res.json(user);
  }
  });
}

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true,
  }).status(200).json("User has been logged out.");
};

export const getAll = (req, res) => {
  //create method for getAll
}
