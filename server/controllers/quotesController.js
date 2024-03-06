const connection = require('../database-mysql/index');

async function getQuotes(req, res) {
  try {
    const sql = 'SELECT * FROM quotes';
    
    const [results] = await connection.query(sql);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}


async function addQuote(req, res) {
  try {
    const { text, category } = req.body;
    const {id}=req.params
    if (!id || !text || !category) {
      return res.status(400).json();
    }

    const sql = 'INSERT INTO quotes (users_userid, text, category) VALUES (?, ?, ?)';

    const result= await connection.query(sql, [id, text, category]);
    res.status(201).json(result);
    
  } catch (error) {
    console.log(req.params)
    console.error(error);
    res.status(500).json(error);
  }
}

async function deleteQuote(req, res) {
  try {
    const quoteId = req.params.id;

    if (!quoteId) {
      return res.status(400).json({ message: 'Invalid quote ID' });
    }

    const sql = 'DELETE FROM quotes WHERE id = ?';

    const result=await connection.query(sql, [quoteId]);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function getMyQuotes(req, res) {
  try {
    const {id}=req.params
    const sql = 'SELECT * FROM quotes WHERE users_userid = ?';
    const [results] = await connection.query(sql,id);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

module.exports = { getQuotes, addQuote, deleteQuote, getMyQuotes };
