/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

const vehicleDto = require("../../model/dto/vehicle.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createVehicle = (req, res, next) =>{
    
    let vehicle ={
        color: req.body.color,
        modelo: req.body.modelo,
        serieChassis: req.body.serieChassis,
        serieMotor: req.body.serieMotor,
        id_mark: req.body.id_mark,
        id_category: req.body.id_category,
        price: req.body.price, 
        discount: req.body.discount,
        status: req.body.status,
        id_provider: req.body.id_provider

    };
    vehicleDto.create(vehicle, (err, data) =>{
       
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
            res.status(201).json(
                {
                    info: data
                }
            );

    });
};


exports.getAll = (req, res, next) =>{

    vehicleDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
    
};

exports.updateVehicle = (req, res, next) =>{
    let vehicle ={
        color: req.body.color,
        modelo: req.body.modelo,
        serie_chassis: req.body.serie_chassis,
        serie_motor: req.body.serie_motor,
        id_mark: req.body.id_mark,
        id_category: req.body.id_category,
        price: req.body.price, 
        discount: req.body.discount,
        status: req.body.status,
        id_provider: req.body.id_provider
    };

    vehicleDto.update({_id: req.body.id}, vehicle, (err, data) =>{
       
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
       
        return res.status(201).json(
            {
                info: data
            }
        );
    });
    
};

exports.deleteVehicle = () =>{

    vehicleDto.delete({_id: req.body.id}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
    
};



