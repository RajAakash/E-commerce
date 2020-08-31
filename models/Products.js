const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');

//Create Schema
const ProductSchema = new Schema({
    name: {
        type:String
    },
    price: {
        type:Number,
    },
    model:{
        type:String,
    }
});

module.exports = Post = mongoose.model('products', ProductSchema);