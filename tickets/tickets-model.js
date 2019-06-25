const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('tickets');
}

function findBy(filter) {
  return db('tickets').where(filter).first();
}

function add(ticket) {
  return db('tickets').insert(ticket);
}

function findById(id) {
  return db('tickets')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("tickets")
  .where({ id })
  .update(changes)
}

function remove(id) {
  return db("tickets")
  .where({ id })
  .del()
}