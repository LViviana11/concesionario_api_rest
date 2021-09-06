const controller = require("../controller/logic/usernameSeller.controller")

module.exports =(app) =>{

    console.log("Loading routes of usernameSeller")
    app.get("/usernameSeller", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/usernameSeller", (req, res, next) =>{
        controller.createUsernameSeller(req, res, next);
    })

    app.put("/usernameSeller", (req, res, next) =>{
        controller.updateUsernameSeller(req, res, next);
    })

    app.delete("/usernameSeller", (req, res, next) =>{
        controller.deleteUsernameSeller(req, res, next);
    })
}