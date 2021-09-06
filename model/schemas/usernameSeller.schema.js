/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

//creamos el esquemas - schema creation

const usernameSellerSchema = new mongoose.Schema({

    username:{
        type:"String",
        required: true,
        unique: true
    },
    clave:{
        type:"String",
        required: true,
        unique: true
    },
    id_seller:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_seller"
    }
})
 //exportamos el esquema  - schema exportation
usernameSellerSchema.plugin(validator);
module.exports = usernameSellerSchema;