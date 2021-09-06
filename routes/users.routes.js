const controller = require("../controller/logic/users.controller")

module.exports =(app) =>{

    console.log("Loading routes of users")
    app.get("/users", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/users", (req, res, next) =>{
        controller.createUsers(req, res, next);
    })

    app.put("/users", (req, res, next) =>{
        controller.updateUsers(req, res, next);
    })

    app.delete("/users", (req, res, next) =>{
        controller.deleteUsers(req, res, next);
    })
}