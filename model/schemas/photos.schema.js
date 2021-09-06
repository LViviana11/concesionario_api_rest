/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")


const photosSchema = new mongoose.Schema({
    
    name:{
        type:"String",
        required: true,
    },
    id_vehicle:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_vehicle"
    }
})
 //exportamos el esquema  - schema exportation
photosSchema.plugin(validator);
module.exports = photosSchema;