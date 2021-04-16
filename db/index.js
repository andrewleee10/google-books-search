module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/books_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
