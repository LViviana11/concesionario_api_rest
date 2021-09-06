/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

//creamos el esquemas - schema creation

const customerSchema = new mongoose.Schema({

    name:{
        type:"String",
        required: true,
    },
    document:{
        type:"String",
        required: true,
        unique: true
    },
    phone:{
        type:"String",
        required: true
    },
    email:{
        type:"String",
        required: true,
        unique: true
    }
})
 //exportamos el esquema  - schema exportation
customerSchema.plugin(validator);
module.exports = customerSchema;