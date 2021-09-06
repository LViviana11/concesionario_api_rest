/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */

const usersDto = require("../../model/dto/users.dto");
const config = require("config");
const helper = require("../helpers/general.helper")

exports.createUsers = (req, res, next) =>{
    let user ={
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        id_rol: req.body.id_rol
    }
    usersDto.create(user, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            )
        }

    return res.status(200).json({
        info: data
    })
    })
}
exports.login = (req, res, next) => {

    usersDto.login({ usersname: req.body.usersname }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        if (data.length > 0) {
            let pass = helper.DecryptPassword(data[0].password);
            console.log("Password en BD: " + pass);
            if (req.body.password === pass) {
                console.log("generar Token");
                tk = helper.GenerateToken(data[0]);
                return res.status(200).json(
                    {
                        token: tk
                    }
                );
            } else {
                return res.status(400).json(
                    {
                        info: "Usersname or password are incorrect."
                    }
                );
            }

        } else {
            return res.status(400).json(
                {
                    info: "Usersname or password is incorrect"
                }
            )
        }

    });

};

exports.updateUsers = (req, res, next) =>{
    let user ={
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        id_rol: req.body.id_rol
    }

    usersDto.update({_id: req.body.id}, user, (err, data) =>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            info: data
        })
    })
}

exports.getAll = (req, res, next) => {

    usersDto.getAll({}, (err, data) => {
        if (err) {
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


