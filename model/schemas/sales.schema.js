/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

//creamos el esquemas - schema creation

const salesSchema = new mongoose.Schema({
    id_vehicle:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"coll_vehicle" 
    },
    id_seller:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_seller"
    },
    id_customer:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"coll_customer"
    },
    placa:{
        type: "String",
        required: true,
        unique: true 
    }
    
    
})
 //exportamos el esquema  - schema exportation
salesSchema.plugin(validator);
module.exports = salesSchema;