"use strict";

// import the needed node_modules.
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const {
  getToken,
  getCurrentLocation,
  handleDiposit,
  getLatLng,
  getCity,
} = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static("public"))
  .use(cors())

  .get("/petfinder_access_token", getToken)

  .get("/current_location", getCurrentLocation)

  .post("/stripe/charge", cors(), handleDiposit)

  .get("/organization/:city", getLatLng)

  .get("/current_city/:lat/:lng", getCity)

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(process.env.PORT || 8000, () =>
    console.log(`Listening on port 8000`)
  );
