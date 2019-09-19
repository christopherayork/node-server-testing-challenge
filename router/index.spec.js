const request = require('supertest');
const server = require('../');
const charDB = require('../characters/models/character-model');
const db = require('../data/dbConfig');

beforeEach(async () => {
  await db('characters').truncate();
});

describe('server.js', () => {
  describe('characters route', () => {
    it('should get all characters', async () => {
      const expectedStatusCode = 200;
      const res = await request(server).get('/characters');
      expect(res.status).toEqual(expectedStatusCode);
    });

    it('should get all characters', async () => {
      const expectedLength = 0;
      const res = await request(server).get('/characters');
      expect(res.body.length).toEqual(expectedLength);
    });

    it('should post a character', async () => {
      const char = { name: 'Roshi', race: 'Human' };
      let expected = 1;
      const [res] = await charDB.insert(char);
      expect(res).toEqual(expected);
      let [match] = await charDB.findByName(char.name);
      expect(match).toEqual({ ...char, id: res });
    });

    it('deletes a character', async () => {
      const char = { name: 'Roshi', race: 'Human' };
      const [res] = await charDB.insert(char);
      const id = 1;
      const removed = await charDB.remove(id);
      expect(removed).toEqual({ id, ...char});
      let find = await charDB.findByName(char.name);
      expect(find).toEqual([]);
    });
  });
});