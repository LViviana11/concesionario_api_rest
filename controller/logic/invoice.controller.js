/**Dto
 *          me permite recibir informacion que gener require y poder enviarla a alas funciones de dto  que se construyeron  */

const invoiceDto = require("../../model/dto/invoice.dto");

const config = require("config");

/**Helper */

const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createInvoice = (req, res, next) => {
    let invoice = {

        id_sale: req.body.id_sale,
        consecutivo: req.body.consecutivo,
        date: req.body.date,
        price_sale: req.body.price_sale
    };
    invoiceDto.create(invoice, (err, data) => {
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

exports.updateInvoice = (req, res, next) => {
    let invoice = {
        id_sale: req.body.id_sale,
        consecutivo: req.body.consecutivo,
        date: req.body.date,
        price_sale: req.body.price_sale
    };

    invoiceDto.update({ _id: req.body.id }, invoice, (err, data) => {

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
    invoiceDto.getAll({}, (err, data) => {
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
    invoiceDto.getByDocument({ document: req.params.document }, (err, data) => {
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


exports.deleteInvoice = (req, res, next) => {
    invoiceDto.delete({ _id: req.body.id }, (err, data) => {
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

