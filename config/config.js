const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const FileStore = require('session-file-store')(session);
const sessionConfig = require('./sessionConfig');

const mapRouter = require('../routes/map');
const mainRouter = require('../routes/routes_main');
const loginRouter = require('../routes/routes_login');
const registerRouter = require('../routes/routes_register');
const logoutRouter = require('../routes/routes_logout');
const userMiddleware = require('../middleware/user');
const infoRoudeRouter = require('../routes/router_infoRoude');
const personalRouter = require('../routes/personal');
const myRoudsRouter = require('../routes/myRouds');

const config = (app) => {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(userMiddleware);
  app.use('/', mainRouter);
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);
  app.use('/logout', logoutRouter);
  app.use('/infoRoude', infoRoudeRouter);
  app.use('/personal/create', personalRouter);
  app.use('/personal/myRouds', myRoudsRouter);
  app.use('/map', mapRouter);

  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '..', 'views'));
};

module.exports = config;
