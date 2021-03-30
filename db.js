const mongoose = require("mongoose");

mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://localhost/studentdb",
   { useNewUrlParser: true }
);


module.exports = mongoose;