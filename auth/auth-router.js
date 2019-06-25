const router = require('express').Router();
const bcrypt = require('bcryptjs');

const tokenService = require('../auth/token-service.js');
const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  let username = req.body.username;

  if(!username || !req.body.password) {
    res.status(400).json({ message: "All required fields must be filled" });
  } else {
    Users.findBy({ username }).then(found => {
      if (found && found.length > 0) {
        return res.status(401).json({ message: "Username is already taken" });
      }
      else {
        Users.add(user)
        .then(saved => {
          res.status(201).json(saved);
        })
        .catch(error => {
          res.status(500).json(error);
        });
      }
    })
  }
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  console.log(req.body);

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenService.generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;