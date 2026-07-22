require('express-async-errors');

const express = require('express');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const authRouter = require('./router/auth');

// Extra Security
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const app = express();

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// middleware
app.use('/api/v1/auth', authRouter);

app.use(errorHandler);
app.use(notFound);

module.exports = app;
