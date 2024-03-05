const express = require('express');
const quotesController = require('../controllers/quotesController');

const router = express.Router();

router.get('/', (req, res) => {
  quotesController.getQuotes()
    .then((quotes) => res.json(quotes))
    .catch((error) => res.status(500).json(error));
});

router.post('/', (req, res) => {
   
  const { users_userid, text,category } = req.body

  quotesController.addQuote(users_userid,text,category)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;