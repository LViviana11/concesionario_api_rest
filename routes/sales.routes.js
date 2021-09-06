const controller = require("../controller/logic/sales.controller")

module.exports =(app) =>{

    console.log("Loading routes of sales")
    app.get("/sales", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/sales", (req, res, next) =>{
        controller.createSales(req, res, next);
    })

    app.put("/sales", (req, res, next) =>{
        controller.updateSales(req, res, next);
    })

    app.delete("/sales", (req, res, next) =>{
        controller.deleteSales(req, res, next);
    })
}