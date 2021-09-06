/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")


const proveedorSchema = new mongoose.Schema({
    
    razon_social:{
        type:"String",
        required: true,
    },
    direction:{
        type:"String",
        required: true,
    },
    telephone:{
        type:"String",
        required: true,
    },
    email:{
        type:"String",
        required: true,
        unique: true
    }
    
})
 //exportamos el esquema  - schema exportation
proveedorSchema.plugin(validator);
module.exports = proveedorSchema;