"use strict";

// import the needed node_modules.
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

express()
    .use(morgan("tiny"))
    .use(bodyParser.json())
    .use(express.static("public"))

  // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    .listen(8000, () => console.log(`Listening on port 8000`));