// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const app = express();

// const PORT = 5000;
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
// app.listen(PORT, () =>
//     console.log(`server running on port $(PORT)`.yellow.bold)
// );


// const express = require("express");
// const colors = require("colors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");


// const PORT = 5000;

// const app = express();

// //properties of express transferd in to app

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("hello word");
// });

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`.bgBlue.black);
// });


//ofline \ c:\
//online / localhost:5000
//online  www.google.com

//ecomerce
//user,product,order

//user/
// createuser
// create user by name
//create user /name/email/password

//delet user
//delete user /name
//delete user/name/email/password

//getuser
//getuser/name
//getuser/name/email/password




// doctor aplication
// user doctor appointment
// whats app
//user massage send receive



// 29 july class=============
// =============================

// const express = require("express");
// const colors = require("colors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const userdata=require("./utility/userdata.json")

// const PORT = 5000;

// const app = express();
// //properties of express transferd in to app

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(userdata);
// });

// app.listen(PORT, () => {
//     console.log(`server is listening on port ${PORT}`.yellow);
// });


//30 july class simple html file uploded on server=====================================

// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const morgan = require("morgan");
// const userdata = require("./utility/userdata.json");
// const path = require("path");
// const app = express();
// const PORT = 5000;

// app.use(express.json());

// app.use(express.static(path.resolve(__dirname, "./public/")));

// app.get("/userdata", (req, res) => {
//     res.send(userdata);
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public","index.html"));
// });

// app.get("/contact", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public", "contact.html"));
// });

// app.listen(PORT, () => {
//     console.log(`server is listening on port ${PORT}`.green);
// });



// 31 july class server file deploy on render ===================================================


const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const userdata = require("./utility/userdata.json");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "./public/")));

app.get("/userdata", (req, res) => {
    res.send(userdata);
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "contact.html"));
});
app.get("/stopwatch", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "stopwatch.html"));
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`.blue);
});









