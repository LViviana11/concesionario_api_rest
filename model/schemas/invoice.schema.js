/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

//creamos el esquemas - schema creation

const invoiceSchema = new mongoose.Schema({

    id_sale:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_sales" 
    },
    consecutivo:{
        type: "String",
        required: true,
        unique: true 
    },
    date:{
        type: "String",
        required: true
    },
    price_sale:{
        type: "String",
        required: true,
    }
    
    
})
 //exportamos el esquema  - schema exportation
invoiceSchema.plugin(validator);
module.exports = invoiceSchema;