/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")


const markSchema = new mongoose.Schema({
    name:{
        type:"String",
        required: true,
    }
})
 //exportamos el esquema  - schema exportation
markSchema.plugin(validator);
module.exports = markSchema;