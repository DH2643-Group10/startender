const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels.js");

router.post("/signup", (request, response) => {
  //response.send('send')
  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
