import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Notes API',
    description:
      'Notes API is a RESTful backend application built with Node.js, Express, and MongoDB. It provides secure user authentication and allows authenticated users to create, update, search, and manage personal notes.',
  },
  host: 'http://localhost:3000/',
  // host: 'https://nodejs-hw-4-ql29.onrender.com',
};

const outputFile = './swagger.json';
const routes = [
  './routes/authRoutes.js',
  './routes/notesRoutes.js',
  './routes/userRoutes.js',
];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);
