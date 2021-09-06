/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

const rolDto = require("../../model/dto/rol.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createRol = (req, res, next) =>{
    
    let rol ={
        name: req.body.name
    };
    console.log(req.body)
    rolDto.create(rol, (err, data) =>{
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

    rolDto.getAll({}, (err, data) =>{
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

exports.updateRol = (req, res, next) =>{
    let rol ={
        
        name: req.body.name
    };

    rolDto.update({_id: req.body.id}, rol, (err, data) =>{
       
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

exports.deleteRol = () =>{

    rolDto.delete({_id: req.body.id}, (err, data) =>{
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



