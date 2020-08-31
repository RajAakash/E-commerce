const express = require('express');
const router = express.Router();

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/', (req, res) => {
    res.send('Hello!');
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    
    console.log(req.body);
    res.json({ message: 'sucess' }).status(200);
})

module.exports = router;
