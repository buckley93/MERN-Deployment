const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pets", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You have been connected to your database successfully"))
    .catch(err => console.log("There was an error when connecting to your database", err));