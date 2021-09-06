/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */

const customerDto = require("../../model/dto/customer.dto");

const config = require("config");

/**Helper */

const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createCustomer = (req, res, next) => {
    let customer = {

        name: req.body.name,
        document: req.body.document,
        phone: req.body.phone,
        email: req.body.email
    };
    customerDto.create(customer, (err, data) => {
        if (err) {
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
        )
    });
};

exports.updateCustomer = (req, res, next) => {
    let customer = {
        name: req.body.name,
        document: req.body.document,
        phone: req.body.phone,
        email: req.body.email
    };

    customerDto.update({ _id: req.body.id }, customer, (err, data) => {

        if (err) {
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
        )
    });


};


exports.getAll = (req, res, next) => {
    customerDto.getAll({}, (err, data) => {
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
    customerDto.getByDocument({ document: req.params.document }, (err, data) => {
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


exports.deleteCustomer = (req, res, next) => {
    customerDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: "El cliente ha sido borrado",
                data: data
            }
        )
    });
};

