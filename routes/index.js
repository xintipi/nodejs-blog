const usersRouter = require('./users');
const newsRouter = require('./news');

module.exports = function (app) {
  app.use('/users', usersRouter);
  app.use('/news', newsRouter);
};
