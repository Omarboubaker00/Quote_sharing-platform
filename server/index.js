const express = require('express');
const usersRoutes = require('./routes/usersRoute');
const quotesRoutes = require('./routes/quotesRoute');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/../client/"));
app.use(express.json());
app.use(cors());

app.use('/api/users', usersRoutes);
app.use('/api/quotes', quotesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});