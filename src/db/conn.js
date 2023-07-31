const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/ecommerceOrders", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful to database")
}).catch((err) => {
    console.log("Error connecting database: " + err)
})
