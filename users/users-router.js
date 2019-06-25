const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkAuthType = require("../auth/check-authType-middleware.js");

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

router.post('/', restricted, checkAuthType, (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({message: "All required fields must be filled to create a ticket"})    
  } else {
    db.add(req.body)
    .then(ticket => {
        res.status(201).json(ticket)
    }).catch(err => {
      res.status(500).json(err)
    })
  }
});

module.exports = router;
