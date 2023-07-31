const mongoose = require("mongoose");

var connURL = "mongodb+srv://tijulukose0402:Tiju123@cluster0.auktjfy.mongodb.net/ecommerceOrders?retryWrites=true&w=majority";

mongoose.connect(connURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful to database");
}).catch((err) => {
    console.log("Error connecting database: " + err);
})
