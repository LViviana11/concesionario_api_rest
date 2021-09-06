/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

const proveedorDto = require("../../model/dto/proveedor.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createProveedor = (req, res, next) =>{
    
    let proveedor ={
        razon_social: req.body.razon_social,
        direction: req.body.direction,
        telephone: req.body.telephone, 
        email: req.body.email

    };
    console.log(req.body)
    proveedorDto.create(proveedor, (err, data) =>{
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

    proveedorDto.getAll({}, (err, data) =>{
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

exports.updateProveedor = (req, res, next) =>{
    let proveedor ={
        
        razon_social: req.body.razon_social,
        direction: req.body.direction,
        telephone: req.body.telephone, 
        email: req.body.email
    };

    proveedorDto.update({_id: req.body.id}, proveedor, (err, data) =>{
       
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

exports.deleteProveedor = () =>{

    proveedorDto.delete({_id: req.body.id}, (err, data) =>{
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



