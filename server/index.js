"use strict";

// import the needed node_modules.
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fetch = require("isomorphic-fetch");
require("dotenv").config();

express()
    .use(morgan("tiny"))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.static("public"))

    .get("/petfinder_access_token", (req, res, next) => {
        const clientId = process.env.PETFINDER_CLIENT_ID;
        const clientSecret = process.env.PETFINDER_SECRET;

        const authString = Buffer.from(clientId + ':' + clientSecret).toString(
            'base64'
        );

        fetch("https://api.petfinder.com/v2/oauth2/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
        })
        .then((response) => response.json())
        .then((json) => {
            res.send(json);
        })
        .catch((err) => {
            console.log(err);
        })
    })

  // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    .listen(8000, () => console.log(`Listening on port 8000`));