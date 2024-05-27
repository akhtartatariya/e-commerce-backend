
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String,
        default: '#fff'
    },
    panelcolor: {
        type: String,
        default: '#fff'
    }
    ,
    textcolor: {
        type: String,
        default: '#000'
    }


})

export const User = mongoose.model('User', productSchema)