/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */

const sellerDto = require("../../model/dto/seller.dto");
const userDto = require("../../model/dto/usernameSeller.dto");
const config = require("config");

/**Helper */

const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createSeller = (req, res, next) => {
    let seller = {

        name: req.body.name,
        document: req.body.document,
        phone: req.body.phone,
        email: req.body.email
    };
    sellerDto.create(seller, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }

        let user = {
            username: req.body.document,
            clave: helper.encryptedPassword(req.body.clave),
            id_seller: data._id


        };
        userDto.create(user, (err, u) => {
            if (err) {
                sellerDto.delete({ _id: data._id }, (err, data) => {
                    if (err) {
                        return res.status(400).json(
                            {
                                error: err
                            }
                        );
                    }
                });
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }
            notHelper.sendSMS(seller.phone, user);
        });
        res.status(201).json(
            {
                info: data
            }
        )
    });
};

exports.updateSeller = (req, res, next) => {
    let seller = {
        name: req.body.name,
        document: req.body.document,
        phone: req.body.phone,
        email: req.body.email
    };
    console.log(seller)
    userDto.getByCode({ username: req.body.olddocument }, (err, data) => {
        console.log(err);
        console.log(data.length == 0);

        if (err || data.length == 0) {
            console.log(err);
            console.log(data);
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        sellerDto.update({ _id: req.body.id }, seller, (err, data) => {

            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                );
            }

            if (req.body.olddocument != undefined) {
                
                let user = {
                    username: req.body.document,
                    clave: helper.encryptedPassword(req.body.clave),
                    id_seller: data._id
                    
                };

                userDto.update({ username: req.body.olddocument }, user, (err, u) => {
                    console.log(err)
                    if (err) {
                        return res.status(400).json(
                            {
                                error: err
                            }
                        );
                    }
                    notHelper.sendSMS(seller.phone, user);
                });
            } else {
                return res.status(400).json(
                    {
                        info: "El numero de documento no puede estar vacío!"
                    }
                );
            }
            res.status(201).json(
                {
                    info: data
                }
            )
        });
    });

};


exports.getAll = (req, res, next) => {
    sellerDto.getAll({}, (err, data) => {
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
        )
    });
};

exports.getByDocument = (req, res, next) => {
    sellerDto.getByDocument({ document: req.params.document }, (err, data) => {
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
        )
    });
};


exports.deleteSeller = (req, res, next) => {
    sellerDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        userDto.delete({ username: data.document }, (err, data) => {
            if (err) {
                return res.status(400).json(
                    {
                        error: err
                    }
                )
            }
        });
        res.status(200).json(
            {
                info: "El VENDEDOR ha sido borrado",
                data: data
            }
        )
    });
};

