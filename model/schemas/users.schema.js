/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

//creamos el esquemas - schema creation

const usersSchema = new mongoose.Schema({

    name:{
        type:"String",
        required: true,
    },
    phone:{
        type:"String",
        required: true
    },
    email:{
        type:"String",
        required: true,
        unique: true
    },
    id_rol:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_rol"
    }
    
})
 //exportamos el esquema  - schema exportation
usersSchema.plugin(validator);
module.exports = usersSchema;