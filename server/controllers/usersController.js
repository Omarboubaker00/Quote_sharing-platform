const connection = require('../database-mysql/index');

async function signup(req, res) {
  try {
    const { name, email, password, nationality } = req.body;
    if (!name || !email || !password || !nationality) {
      return res.status(400).json();
    }

    const sql = 'INSERT INTO users (name,email,password,nationality) VALUES (?, ?, ?, ?)';

    await connection.query(sql, [name, email, password, nationality]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json();
    }

    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';

    const [results] = await connection.query(sql, [email, password]);
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
      
    }
console.log(results)
    res.status(200).json(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}




module.exports = { signup, login };
