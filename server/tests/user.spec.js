const createApp = require('../app');
const request = require('supertest');
const MongoMemoryServer = require('mongodb-memory-server');

const User = require('../models/user')

let app;

// This will create an new instance of "MongoMemoryServer" and automatically start it
    const mongod = await MongoMemoryServer.MongoMemoryServer.create();

//start server before any tests run
beforeAll(async () => {
    const uri = await mongod.getUri();
    const config = { mongoUrl: uri };
    app = await createApp(config);
});
  
//stop server after tests run
// afterAll(async () => {
//   await mongod.stop();
// });

describe('POST /signup/', () => {
    describe('when a post request is made to /signup', () => {
      it('should respond with a 200 status code', async () => {
        const data = {
            username: 'user1',
            password: 'password',
        }
        const response = await request(app)
          .post('/signup/')
          .send(data);

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toEqual('Signup successful')
      });
    });
});

describe('POST /login/', () => {
  describe('when a post request is made to /login', () => {
    // it('should return an error if the username is empty', async () => {
    //   const data = {
    //     password: 'password',
    //   }

    //   const response = await request(app)
    //   .post('/login/')
    //   .send(data);
    // })

    it('should respond with a 200 status code', async () => {
      const data = {
        username: 'user1',
        password: 'password',
      }
      const response = await request(app)
        .post('/login/')
        .send(data);

      expect(response.statusCode).toBe(200)
    })

    it('should respond with json content type', async () => {
      const data = {
        username: 'user1',
        password: 'password',
      }
      const response = await request(app)
        .post('/login/')
        .send(data);

      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
    //should return a jwt
  })
})