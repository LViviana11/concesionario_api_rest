const controller = require("../controller/logic/invoice.controller")

module.exports =(app) =>{

    console.log("Loading routes of invoice")
    app.get("/invoice", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/invoice", (req, res, next) =>{
        controller.createInvoice(req, res, next);
    })

    app.put("/invoice", (req, res, next) =>{
        controller.updateInvoice(req, res, next);
    })

    app.delete("/invoice", (req, res, next) =>{
        controller.deleteInvoice(req, res, next);
    })
}