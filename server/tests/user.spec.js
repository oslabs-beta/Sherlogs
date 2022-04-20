// const createApp = require('../app');
// const request = require('supertest');
// const MongoMemoryServer = require('mongodb-memory-server');

// const { baseUrl, auth } = require('../utils/constants');
// const User = require('../models/user');

// let app;

// const memoryServer = async () => {
//   return await MongoMemoryServer.MongoMemoryServer.create();
// };

// const mongod = memoryServer();

// beforeAll(async () => {
//   const uri = (await mongod).getUri();
//   const config = { mongoUrl: uri };
//   app = await createApp(config);
// });

// afterAll(async () => {
//   await (await mongod).stop();
// });

// describe('POST /signup/', () => {
//   describe('when a post request is made to /signup', () => {
//     it('should respond with a 200 status code', async () => {
//       const data = {
//         username: 'user1',
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/signup/`)
//         .send(data);

//       expect(response.statusCode).toBe(200);
//       expect(response.body.message).toEqual('Signup successful');
//     });

//     it('should return an error if the username field is empty', async () => {
//       const data = {
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/signup/`)
//         .send(data);

//       expect(response.body.log).toBe('Invalid username or password');
//     });

//     it('should return an error if the password field is empty', async () => {
//       const data = {
//         username: 'user1',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/signup/`)
//         .send(data);

//       expect(response.body.log).toBe('Invalid username or password');
//     });

//     it('should return an error if the username already exists in the database', async () => {
//       const data = {
//         username: 'user1',
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/signup/`)
//         .send(data);

//       expect(response.body.log).toBe('Invalid username or password');
//     });
//   });
// });

// describe('POST /login/', () => {
//   describe('when a post request is made to /login', () => {
//     it('should respond with a 200 status code', async () => {
//       const data = {
//         username: 'user1',
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.statusCode).toBe(200);
//     });

//     it('should respond with json content type', async () => {
//       const data = {
//         username: 'user1',
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.headers['content-type']).toEqual(
//         expect.stringContaining('json')
//       );
//     });

//     it('should return a token', async () => {
//       const data = {
//         username: 'user1',
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.body.token).toBeDefined();
//     });

//     it('should return an error if no username is provided', async () => {
//       const data = {
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.body.log).toBe('Missing username or password');
//     });

//     it('should return an error if no password is provided', async () => {
//       const data = {
//         username: 'user1',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.body.log).toBe('Missing username or password');
//     });

//     it('should return an error if login username is incorrect', async () => {
//       const data = {
//         username: 'wrongUser',
//         password: 'password',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.body.log).toBe('Username does not exist');
//     });

//     it('should return an error if password is incorrect', async () => {
//       const data = {
//         username: 'user1',
//         password: 'wrongpassword',
//       };
//       const response = await request(app)
//         .post(`${baseUrl}${auth}/login/`)
//         .send(data);

//       expect(response.body.log).toBe('Password is incorrect');
//     });
//   });
// });
