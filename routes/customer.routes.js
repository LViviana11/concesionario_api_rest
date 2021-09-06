const controller = require("../controller/logic/customer.controller")

module.exports =(app) =>{

    console.log("Loading routes of customer")
    app.get("/customer", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/customer", (req, res, next) =>{
        controller.createCustomer(req, res, next);
    })

    app.put("/customer", (req, res, next) =>{
        controller.updateCustomer(req, res, next);
    })

    app.delete("/customer", (req, res, next) =>{
        controller.deleteCustomer(req, res, next);
    })
}