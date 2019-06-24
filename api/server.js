const express = require('express');

const configureMiddleware = require('./middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const ticketsRouter = require('../tickets/tickets-router.js');

const server = express();

configureMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/tickets', ticketsRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;