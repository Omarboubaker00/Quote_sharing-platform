const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/',(req,res)=>{
    usersController.getUsers()
    .then((result)=>res.json(result))
    .catch((error) => res.status(400).json(error));
})


router.post('/signup', (req, res) => {
  const { email, password,name,nationality } = req.body;

  usersController.signup(email, password,name,nationality)
    .then((result) => res.json(result))
    .catch((error) => res.status(400).json(error));
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  usersController.login(email, password)
    .then((result) => res.json(result))
    .catch((error) => res.status(401).json(error));
});



module.exports = router;