const controller = require("../controller/logic/category.controller")

module.exports =(app) =>{

    console.log("Loading routes of category")
    app.get("/category", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/category", (req, res, next) =>{
        controller.createCategory(req, res, next);
    })

    app.put("/category", (req, res, next) =>{
        controller.updateCategory(req, res, next);
    })

    app.delete("/category", (req, res, next) =>{
        controller.deleteCategory(req, res, next);
    })
}