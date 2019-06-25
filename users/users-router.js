const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkAuthType = require("../auth/check-authType-middleware.js");
const checkAdmin = require("../auth/check-admin-middleware.js")

const bcrypt = require('bcryptjs');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.put('/:id', restricted, checkAdmin, (req, res) => {

  const newAuthType = req.body;
  const id = req.params.id;
  let username = null;
  let password = null;
  
  Users.getUsernameAndPassword(req.params.id).then(user => {
    username = user.username;
    password = user.password;
  })

  const newUser = {
    username: username,
    password: password,
    authType: newAuthType
  }

  Users.update(id, newUser)
  .then(count => {
    if (count > 0) {
      Users.findById(id)
      .then(user => {
        res.status(200).json(user)
      }) 
    } else {
      res.status(404).json("User not found")
    }
  }).catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', restricted, checkAdmin, (req, res) => {
  Users.remove(req.params.id)
  .then(count => {
    if (count > 0) res.status(204).end()
    else zoo.status(404).json("User not found")
  }).catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router;
