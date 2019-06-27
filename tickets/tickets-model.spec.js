const db = require("../database/dbConfig.js");

const { add, remove } = require("./tickets-model.js");

const prepBeforeEach = require("../testsMiddleware/prepBeforeEach.js");

describe("tickets model", () => {
  beforeEach(done => prepBeforeEach(done));

  describe("add()", () => {
    it("should insert users", async () => {
      await add({
        type: "javascript",
        description: "here we go asdfa",
        owner: 1,
        assigned: null,
        date: "2019-06-26T00:00:00.000Z",
        ressolved: false,
        title: "hello this is another test",
        tried: "let's do this."
      });

      const tickets = await db("tickets");

      expect(tickets).toHaveLength(1);
    });

    it("should insert the provided ticket", async () => {
      await add({
        type: "javascript",
        description: "here we go asdfa",
        owner: 1,
        assigned: null,
        date: "2019-06-26T00:00:00.000Z",
        ressolved: false,
        title: "hello this is another test",
        tried: "let's do this."
      });

      const tickets = await db("tickets");

      expect(tickets[0].type).toBe("javascript");
    });

    describe("remove()", () => {
      it("should remove 1 ticket", async () => {
        await add({
          type: "javascript",
          description: "here we go asdfa",
          owner: 1,
          assigned: null,
          date: "2019-06-26T00:00:00.000Z",
          ressolved: false,
          title: "hello this is another test",
          tried: "let's do this."
        });

        let tickets = await db("tickets");

        expect(tickets).toHaveLength(1);

        await remove("1");

        tickets = await db("tickets");

        expect(tickets).toHaveLength(0);
      });
    });
  });
});
