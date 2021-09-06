/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

const photosDto = require("../../model/dto/photos.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createPhotos = (req, res, next) =>{
    
    let photos ={
        name: req.body.name,
        id_vehicle: req.body.id_vehicle
    };
    console.log(req.body)
    photosDto.create(photos, (err, data) =>{
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

    photosDto.getAll({}, (err, data) =>{
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

exports.updatePhotos = (req, res, next) =>{
    let photos ={
        
        name: req.body.name,
        id_vehicle: req.body.id_vehicle
    };

    photosDto.update({_id: req.body.id}, photos, (err, data) =>{
       
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

exports.deletePhotos = () =>{

    photosDto.delete({_id: req.body.id}, (err, data) =>{
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



