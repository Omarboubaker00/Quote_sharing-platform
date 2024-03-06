const express = require('express');
const quotesController = require('../controllers/quotesController');

const router = express.Router();

router.get('/', quotesController.getQuotes);

router.get('/:id',quotesController.getMyQuotes);

router.post('/:id', quotesController.addQuote);

router.delete('/:id',quotesController.deleteQuote)

module.exports = router;