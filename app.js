/** packages
 * instalar npm i express config --save
*/

const express = require("express");
const config = require("config")
const bodyParser = require("body-parser")

/**App configuration */

const app = express();
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {
        extended: true
    }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getlpAddress");
app.use("*", ipFn)

/**Methods */
app.get("/",(req, res, next) =>{
    res.send("welcom to academic rest api from app");
})


//Mark routes loading
const markRoutes = require("./routes/mark.routes");
markRoutes(app);

//Category routes loading
const categoryRoutes = require("./routes/category.routes");
categoryRoutes(app);

//photos routes loading
const photosRoutes = require("./routes/photos.routes");
photosRoutes(app);

//vehicle routes loading
const vehicleRoutes = require("./routes/vehicle.routes");
vehicleRoutes(app);

//Proveedor routes loading
const proveedorRoutes = require("./routes/proveedor.routes");
proveedorRoutes(app);

//Seller routes loading
const sellerRoutes = require("./routes/seller.routes");
sellerRoutes(app);

//Customer routes loading
const customerRoutes = require("./routes/customer.routes");
customerRoutes(app);

//Sales routes loading
const salesRoutes = require("./routes/sales.routes");
salesRoutes(app);

//Invoice routes loading
const invoiceRoutes = require("./routes/invoice.routes");
invoiceRoutes(app);

//Rol routes loading
const rolRoutes = require("./routes/rol.routes");
rolRoutes(app);

//Users routes loading
const usersRoutes = require("./routes/users.routes");
usersRoutes(app);

app.listen(port, () =>{
    console.log("Server is running...")
});