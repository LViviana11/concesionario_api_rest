/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

const markDto = require("../../model/dto/mark.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createMark = (req, res, next) =>{
    
    let mark ={
        name: req.body.name
    };
    console.log(req.body)
    markDto.create(mark, (err, data) =>{
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

    markDto.getAll({}, (err, data) =>{
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

exports.updateMark = (req, res, next) =>{
    let mark ={
        
        name: req.body.name
    };

    markDto.update({_id: req.body.id}, mark, (err, data) =>{
       
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

exports.deleteMark = () =>{

    markDto.delete({_id: req.body.id}, (err, data) =>{
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



