const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The pets name is required!"],
        minlength: [ 3, "Name must be atleast 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "The pets type is required!"],
        minlength: [ 3, "Type must be atleast 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "The pets description is required!"],
        minlength: [ 3, "Desription must be atleast 3 characters long"]
    },

    skills1: {
        type: String
    },
    skills2: {
        type: String
    },
    skills3: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);