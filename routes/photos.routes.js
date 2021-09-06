const controller = require("../controller/logic/photos.controller")

module.exports =(app) =>{

    console.log("Loading routes of photos")
    app.get("/photos", (req, res, next) =>{
        controller.getAll(req, res, next);
    })
    
    app.post("/photos", (req, res, next) =>{
        controller.createPhotos(req, res, next);
    })

    app.put("/photos", (req, res, next) =>{
        controller.updatePhotos(req, res, next);
    })

    app.delete("/photos", (req, res, next) =>{
        controller.deletePhotos(req, res, next);
    })
}