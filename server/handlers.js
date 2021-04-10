"use strict";

const fetch = require("isomorphic-fetch");
require("dotenv").config();
const opencage = require("opencage-api-client");
const publicIp = require("public-ip");

const getToken = (req, res, next) => {
  const clientId = process.env.PETFINDER_CLIENT_ID;
  const clientSecret = process.env.PETFINDER_SECRET;

  const authString = Buffer.from(clientId + ":" + clientSecret).toString(
    "base64"
  );

  fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  })
    .then((response) => response.json())
    .then((json) => {
      res.send(json);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCurrentLocation = async (req, res) => {
  const key = process.env.GEOLOCATION_API;
  const ip = await publicIp.v4();

  fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${key}&ip=${ip}`)
    .then((response) => response.json())
    .then((json) => {
      res.status(200).json({ status: 200, data: json });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ status: 404, message: "No location found" });
    });
};

const handleDiposit = async (req, res) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

  console.log("route reached", req.body);
  let { amount, id } = req.body;
  console.log("amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "CAD",
      payment_method: id,
      confirm: true,
    });
    console.log("payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
};

const getLatLng = async (req, res) => {
  const city = req.params.city;
  const requestObj = {
    q: city,
    key: process.env.OPENCAGE_API_KEY,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      res.status(200).json({ data: data.results[0].geometry });
    })
    .catch((error) => {
      console.log("error", error.message);
      res.status(404).json({ status: 404, message: "No lat/lng found" });
    });
};

module.exports = { getToken, getCurrentLocation, handleDiposit, getLatLng };
