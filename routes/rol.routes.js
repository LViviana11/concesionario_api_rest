const controller = require("../controller/logic/rol.controller")

module.exports =(app) =>{

    console.log("Loading routes of rol")
    app.get("/rol", (req, res, next) =>{
        controller.getAll(req, res, next);
    })

    app.get("/rol/bycode/:code", (req, res, next) =>{
        console.log("geting rol by code");
        controller.getByCode(req, res, next);
    })
    
    app.post("/rol", (req, res, next) =>{
        controller.createRol(req, res, next);
    })

    app.put("/rol", (req, res, next) =>{
        controller.updateRol(req, res, next);
    })

    app.delete("/rol", (req, res, next) =>{
        controller.deleteRol(req, res, next);
    })
}