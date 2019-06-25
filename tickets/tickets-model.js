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

async function add(ticket) {
  const [id] = await db('tickets').insert(ticket);

  const posted = await findById(id)
  return posted
}

async function findById(id) {
  const findId = await db('tickets')
    .where({ id })
    .first();

    return findId
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