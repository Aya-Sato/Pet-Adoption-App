import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { ApplicationForm } from "./ApplicationForm";

const PUBLIC_KEY =
  "pk_test_51IZRQhAQ8LgXh03svToNmf6EUbAQSJeEp46gILMsT8rJ60IWRTB2Tf1s3rC9Uhgwv7ChhqHlJ9lKvw2zM8lbp6Di00hllLsAG6";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <ApplicationForm />
    </Elements>
  );
};

export default Stripe;
