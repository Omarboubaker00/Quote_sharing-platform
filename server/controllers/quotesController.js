const connection = require('../database-mysql/index');

const getQuotes=()=> {
  return connection.execute('SELECT * FROM quotes')
    .then(([results]) => results)
    .catch((err) => {
      console.error(err.message);
      throw { error: 'Internal Server Error' };
    });
}

const addQuote=(user_id,text,category)=> {
  if (!user_id || !text || !category) {
    return Promise.reject({ error: ' required fields' });
  }

  return connection.execute('INSERT INTO quotes (users_user-id,text,category) VALUES (?,?, ?)', [user_id,text,category])
    .then(() => ({ message: 'Quote added successfully' }))
    .catch((err) => {
      console.error(err.message);
      throw { error: 'Internal Server Error' };
    });
}

module.exports = { getQuotes, addQuote };