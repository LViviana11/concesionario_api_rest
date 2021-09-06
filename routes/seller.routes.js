const controller = require("../controller/logic/seller.controller")

module.exports =(app) =>{

    console.log("Loading routes of seller")
    app.get("/seller", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/seller", (req, res, next) =>{
        controller.createSeller(req, res, next);
    })

    app.put("/seller", (req, res, next) =>{
        controller.updateSeller(req, res, next);
    })

    app.delete("/seller", (req, res, next) =>{
        controller.deleteSeller(req, res, next);
    })
}