const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { User } = require("../models");

router.post("/register", async (req, res) => {
  await User.findOne({
    where: { email: req.body.email }
  })
    .then(user => {
      if (user) {
        res.status(409).json({
          type: "error",
          message: "An account has already been registered with that email."
        });
      } else {
        bcrypt.hash(req.body.password, 10, async (error, hashedPassword) => {
          if (error) {
            res.status(500).json({
              type: "error",
              message: "There was an error hashing the password."
            });
          } else {
            try {
              await User.create({
                email: req.body.email,
                password: hashedPassword
              });
              res.status(201).json({
                type: "success",
                message: "User registered successfully."
              });
            } catch (err) {
              console.log(err);
              res.status(500).send({
                type: "error",
                message: "An error has occured trying to create the user."
              });
            }
          }
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({
        error: "An error has occured trying to find that user."
      });
    });
});

module.exports = router;
