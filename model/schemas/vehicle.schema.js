/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")


const vehicleSchema = new mongoose.Schema({
    
    color:{
        type:"String",
        required: true,
    },
    modelo:{
        type:"String",
        required: true,
    },
    serieChassis:{
        type:"String",
        required: true,
        unique: true
    },
    serieMotor:{
        type:"String",
        required: true,
        unique: true
    },
    id_mark:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_mark"
        
    },
    id_category:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_category"
    
    },
    price:{
        type:"Number",
        required: true,
    },
    discount:{
        type:"Number",
        required: true,
    },
    status:{
        type:"String",
        required: true,
    },
    id_provider:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_proveedor"
    }
})
 //exportamos el esquema  - schema exportation
vehicleSchema.plugin(validator);
module.exports = vehicleSchema;