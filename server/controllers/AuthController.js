const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { jwtToken } = require("../config");

const { User } = require("../models");

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, 10, async (error, hashedPassword) => {
      if (error) {
        res.status(500).json({
          error: "There was an error hashing the password."
        });
      } else {
        await User.create({
          email: req.body.email,
          password: hashedPassword
        });
        try {
          res.status(201).json({
            type: "success",
            message: "User registered successfully."
          });
        } catch (err) {
          console.log(err);
          res.status(500).send({
            error: "An error has occured trying to create the user."
          });
        }
      }
    });
  },

  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        type: "error",
        message: "Email and password fields are essential for authentication."
      });
    }

    try {
      const user = await User.findOne({
        where: { email: email }
      });

      if (!user) {
        return res.status(403).json({
          type: "error",
          message: "User with provided email not found in database."
        });
      }

      bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
          return res
            .status(500)
            .json({ type: "error", message: "bcrypt error", error });
        }
        if (result) {
          res.json({
            type: "success",
            message: "User logged in.",
            user: { id: user.id, email: user.email },
            token: jwt.sign({ id: user.id, email: user.email }, jwtToken)
          });
        } else {
          res
            .status(403)
            .json({ type: "error", message: "Password is incorrect." });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: "An error has occured trying to find that user."
      });
    }
  }

  // routes.get("/me", (req, res) => {
  //   const token = req.headers["x-access-token"];
  //   if (!token) {
  //     return res
  //       .status(400)
  //       .json({ type: "error", message: "x-access-token header not found." });
  //   }

  //   jwt.verify(token, jwtToken, (error, result) => {
  //     if (error) {
  //       return res.status(403).json({
  //         type: "error",
  //         message: "Provided token is invalid.",
  //         error
  //       });
  //     }
  //     return res.json({
  //       type: "success",
  //       message: "Provided token is valid.",
  //       result
  //     });
  //   });
  // });
};
