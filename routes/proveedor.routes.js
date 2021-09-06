const controller = require("../controller/logic/proveedor.controller")

module.exports =(app) =>{

    console.log("Loading routes of proveedor")
    app.get("/proveedor", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/proveedor", (req, res, next) =>{
        controller.createProveedor(req, res, next);
    })

    app.put("/proveedor", (req, res, next) =>{
        controller.updateProveedor(req, res, next);
    })

    app.delete("/proveedor", (req, res, next) =>{
        controller.deleteProveedor(req, res, next);
    })
}