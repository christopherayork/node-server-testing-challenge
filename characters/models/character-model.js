const charDB = require('../../data/dbConfig');

function find() {
  return charDB('characters');
}

function findByID(id) {
  if(!id) return false;
  else return charDB('characters').where({ id });
}

function findByName(name) {
  if(!name) return false;
  else return charDB('characters').where({ name });
}

function insert(char) {
  if(!char || !char.name || !char.race) return false;
  else return charDB('characters').insert(char);
}

function update(id, char) {
  if(!id || !char || !char.name || !char.race) return false;
  else return charDB('characters').update(char).where({ id });
}

async function remove(id) {
  if(!id) return false;
  else {
    let [removed] = await findByID(id);
    await charDB('characters').del();
    return removed;
  }
}

module.exports = {
  find,
  findByID,
  findByName,
  insert,
  update,
  remove
};
