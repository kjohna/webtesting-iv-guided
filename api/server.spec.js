const request = require('supertest'); // don't forget to yarn add supertest --dev

const server = require('./server.js');

describe('server.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  // here are the basic range of tests for a request:
  // - http status code
  // - format of the data
  // - shape of the response body
  describe('GET /', () => {
    // ***** http status code *****
    it('should return 200 OK: promise', () => {
       // use request library on server (both required at top)
       // need to set this up as an async test! 
       // (1) make sure to return the promise if doing with promises:
      return request(server).get('/').then( res => {
        expect(res.status).toBe(200);
      }); // don't worry about .catch, failed test will be the error, caught that way automatically
    });
    // (2) or use async/await
    it('should return 200 OK: async/await', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
    
    // ***** format of the data (JSON) *****
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });

    // ***** shape of the response body *****
    it('should return { api: "up" }', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'up' });
    });
  });
});
