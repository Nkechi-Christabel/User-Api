const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 8000;
const dbURI =
  "mongodb+srv://Nkechi:test123@auth.fifgyjk.mongodb.net/auth?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(PORT, () =>
      console.log(
        `The server is running on port ${PORT}! You better go catch it!`
      )
    )
  )
  .catch((err) => console.log(err));

app.use(cors());
/*
The json-parser takes the JSON data of a request, transforms it into a JavaScript object 
and then attaches it to the body property of the request object before the route handler is called.
The event handler function can access the data from the body property of the request object.
Without the json-parser, the body property would be undefined. 
*/
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//==============
//api routes
//==============
app.use("/api/auth", apiRoutes);
