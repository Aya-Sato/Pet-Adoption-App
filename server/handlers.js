"use strict";

const fetch = require("isomorphic-fetch");
require("dotenv").config();

const getToken = (req, res, next) => {
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
};

module.exports = { getToken };