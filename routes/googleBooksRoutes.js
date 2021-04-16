const router = require('express').Router()
const { Book } = require('../models')
const axios = require('axios')

router.get('/books/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data: { data } }) => {
      Book.find({})
        .then(books => {
          const booksFiltered = data.filter(book => {
            let keep = true
            books.forEach(saved => {
              if (saved.bookId === book.id) {
                keep = false
              }
            })
            return keep
          })
          res.json(booksFiltered)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

module.exports = router
