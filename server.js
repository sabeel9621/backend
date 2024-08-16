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


const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");


const PORT = 5000;

const app = express();

//properties of express transferd in to app

app.use(express.json());

app.get('/', (req, res) => {
    res.send({"Massage":"welcome to home page"});
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgBlue.black);
});


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


// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const morgan = require("morgan");
// const rootroute = require("./routes/rootroute");

// const userdata = require("./utility/userdata.json");
// const path = require("path");
// const connectDB = require("./config/db");

// const app = express();
// const PORT = 7000 || 6000;
// app.use(express.json());

// app.use(express.static(path.resolve(__dirname, "./public/")));

// app.get("/userdata", (req, res) => {
//     res.send(userdata);
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });

// app.get("/contact", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public", "contact.html"));
// });
// app.get("/stopwatch", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public", "stopwatch.html"));
// });

// app.listen(PORT, () => {
//     console.log(`server is listening on port ${PORT}`.blue);
// });


// database connection 1 aug class=========================


// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv").config();
// const morgan = require("morgan");
// const path = require("path");
// const connectDB = require("./config/db");


// const app = express();
// const PORT = process.env.PORT || 5000;

// connectDB();

// app.use(express.json());

// app.get("/", (req, res) => {
//     console.log("welcome to express");

// });

// app.listen(PORT, () => {
//     console.log(`server is listening on ${PORT}`.yellow);
// })



// class 5 augst schema design express===============================================================================

// const express = require("express");
// const colors = require("colors");
// const dotenv = require("dotenv");
// // const cors = require("cors");
// const morgan = require("morgan");
// const rootroute = require("./routes/rootroute");
// // const productroute = require("./routes/products/productroute");
// // const userroute = require("./routes/users/userroute");
// // const orderroute = require("./routes/orders/orderroute");
// // const {
// //     notFound,
// //     errorHandler,
// // } = require("./middlewares/errorHandlingMiddleware");
// const connectDB = require("./config/db");
// //express jo hai na wo server handling kar sakti hai
// //express ko server ke liye use karna hai
// //express ki properties ko humne app mai transfer/ assign kar diya
// //jisse hum http protocol ka use kar payenge jisme http methods ka access kar sakenge eg. get post put patch delete

// // dotenv.config();


// const PORT = process.env.PORT || 7000 || 6000;
// const app = express();
// connectDB();

// // app.use("/", rootroute);
// // app.use("/products", productroute);
// // app.use("/users", userroute);
// // app.use("/orders", orderroute);

// // Error Handling middlewares
// // app.use(notFound);
// // app.use(errorHandler);

// app.use(express.json());
// app.use(morgan("dev"));
// app.get("/", rootroute);


// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`.bgYellow.white);
// });


