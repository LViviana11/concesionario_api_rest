/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

const categoryDto = require("../../model/dto/category.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createCategory = (req, res, next) =>{
    
    let category ={
        name: req.body.name
    };
    console.log(req.body)
    categoryDto.create(category, (err, data) =>{
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

    categoryDto.getAll({}, (err, data) =>{
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

exports.updateCategory = (req, res, next) =>{
    let category ={
        
        name: req.body.name
    };

    categoryDto.update({_id: req.body.id}, category, (err, data) =>{
       
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

exports.deleteCategory = () =>{

    categoryDto.delete({_id: req.body.id}, (err, data) =>{
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



