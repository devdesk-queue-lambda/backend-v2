const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update
};

function find() {
  return db('tickets');
}

function findBy(filter) {
  return db('tickets').where(filter).first();
}

async function add(ticket) {
  const [id] = await db('tickets').insert(ticket);

  return findById(id);
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