const controller = require("../controller/logic/mark.controller")

module.exports =(app) =>{

    console.log("Loading routes of mark")
    app.get("/mark", (req, res, next) =>{
        controller.getAll(req, res, next);
    })

    app.get("/mark/bycode/:code", (req, res, next) =>{
        console.log("geting mark by code");
        controller.getByCode(req, res, next);
    })
    
    app.post("/mark", (req, res, next) =>{
        controller.createMark(req, res, next);
    })

    app.put("/mark", (req, res, next) =>{
        controller.updateMark(req, res, next);
    })

    app.delete("/mark", (req, res, next) =>{
        controller.deleteMark(req, res, next);
    })
}