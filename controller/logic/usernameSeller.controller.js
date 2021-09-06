/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */ 

 const usernameSellerDto = require("../../model/dto/usernameSeller.dto");
 const config = require("config");
 const helper = require("../helpers/general.helper")
 
 exports.createSeller = (req, res, next) =>{
     
     let usernameSeller ={
         username: req.body.username,
         clave: req.body.clave,
         id_seller: req.body.id_seller
 
     };
     console.log(req.body)
     usernameSellerDto.create(usernameSeller, (err, data) =>{
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
 
     usernameSellerDto.getAll({}, (err, data) =>{
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
 
 exports.updateUsernameSeller = (req, res, next) =>{
     let usernameSeller ={
        username: req.body.username,
        clave: req.body.clave,
        id_seller: req.body.id_seller
     };
 
     usernameSellerDto.update({_id: req.body.id}, usernameSeller, (err, data) =>{
        
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
 
 exports.deleteUsernameSeller = () =>{
 
     usernameSellerDto.delete({_id: req.body.id}, (err, data) =>{
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
 