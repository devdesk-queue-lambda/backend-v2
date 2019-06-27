const db = require('../database/dbConfig.js');

const { add, remove } = require('./users-model.js');

const prepBeforeEach = require("../testsMiddleware/prepBeforeEach.js")

describe('users model', () => {
  beforeEach(done => prepBeforeEach(done));

  describe('insert()', () => {

    it('should insert users', async () => {

      await add({ username: 'Matt', password: "abc" });
      await add({ username: 'Jonathan', password: "abc" });

      const users = await db('users');

      expect(users).toHaveLength(4);
    });

    it('should insert the provided user', async () => {
      let user = { username: 'Sam', password: "abc" };

      let inserted = await add(user);

      const users = await db('users');
      
      expect(users[2].username).toBe(user.username);
    });
  });

  describe('remove()', () => {
    it('should remove 1 user', async () => {
      let users = await db('users');

      expect(users).toHaveLength(2);

      await remove("1");

      users = await db('users');

      expect(users).toHaveLength(1);
    });
  });

});
