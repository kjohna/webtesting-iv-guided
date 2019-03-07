const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');

// consider cleanup afterEach up here. for now, it's only running after 'insert' tests

describe('hobbits mode.', () => {
  describe('insert', () => {
    // remember to clean up after tests!
    // async is a good idea here so you don't start running another test during cleanup
    afterEach(async () => {
      await db('hobbits').truncate();
    });

    it('should insert the provided hobbit into the db', async () => {
      let hobbit = await Hobbits.insert({ name: 'gaffer' });
      // assumes that the db will return name of inserted hobbit
      expect(hobbit.name).toBe('gaffer');

      // best to try inserting another and make sure that the proper hobbit is returned after insertion
      hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
    });
    // the next test would not work if not cleaning up afterEach the first! there would still be the hobbit inserted from first test.
    it('should insert the provided hobbits into the db', async () => {
      await Hobbits.insert({ name: 'gaffer' });
      await Hobbits.insert({ name: 'sam' });

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    });
  });

});