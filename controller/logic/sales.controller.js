/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */

const salesDto = require("../../model/dto/sales.dto");

const config = require("config");

/**Helper */

const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createSales = (req, res, next) => {
    let sales = {

        id_vehicle: req.body.id_vehicle,
        id_seller: req.body.id_seller,
        id_customer: req.body.id_customer,
        placa: req.body.placa,
        id_invoice: req.body.id_invoice
    };
    salesDto.create(sales, (err, data) => {
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

exports.updateSales = (req, res, next) => {
    let sales = {
        id_vehicle: req.body.id_vehicle,
        id_seller: req.body.id_seller,
        id_customer: req.body.id_customer,
        placa: req.body.placa,
        id_invoice: req.body.id_invoice
    };

    salesDto.update({ _id: req.body.id }, sales, (err, data) => {

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
    salesDto.getAll({}, (err, data) => {
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
    salesDto.getByDocument({ document: req.params.document }, (err, data) => {
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


exports.deleteSales = (req, res, next) => {
    salesDto.delete({ _id: req.body.id }, (err, data) => {
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

