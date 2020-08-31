const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.port || 5000;
const url = 'mongodb+srv://aakash:aakash@cluster0-r9wl8.mongodb.net/test?retryWrites=true&w=majority';
var Schema = mongoose.Schema;

const user = require('./routes/api/User');
const products = require('./routes/api/Products');

app.get('/', (req, res) => {
    res.json('hello world')
});
app.use(express.json());
app.use('/api/user', user);
app.use('/api/products', products);

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log('Connected'))
        .catch(()=>console.log('connection failed!'));

   
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})