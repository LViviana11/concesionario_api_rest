/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")


const categotySchema = new mongoose.Schema({

    name:{
        type:"String",
        required: true,
    }
})
 //exportamos el esquema  - schema exportation
categotySchema.plugin(validator);
module.exports = categotySchema;