import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopSection = styled.section`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to top left,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 10%;
`;

const Heading = styled.h2`
  font-size: 25px;
  color: ${themeVars.darkGray};
  margin-top: 30px;
`;

const CardHeading = styled.h2`
  font-size: 22px;
  color: ${themeVars.darkGray};
  margin-top: 30px;
`;

const Input = styled.input`
  width: 95%;
  font-size: 15px;
  padding: 5px 0 5px 15px;
  margin: 5px 0;
  border: 1px solid ${themeVars.mediumGray};
  border-radius: 5px;
`;

const Select = styled.select`
  width: 95%;
  font-size: 15px;
  padding: 5px 0 5px 10px;
  margin: 5px 0;
  border: 1px solid ${themeVars.mediumGray};
  border-radius: 5px;
  background: ${themeVars.white};
`;

const Diposit = styled.p`
  font-size: 15px;
  color: ${themeVars.darkGray};
  margin-top: 20px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0 80px 0;
`;

const Button = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 30px;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const CardElementWrapper = styled.div``;

export const ApplicationForm = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const pet = useSelector((state) => state.pet.pet);
  const [name, setName] = useState(currentUser.name ? currentUser.name : "");
  const [petName, setPetName] = useState(pet ? pet.name : "");
  const [petId, setPetId] = useState(pet ? pet.id : "");
  const [email, setEmail] = useState(
    currentUser.email ? currentUser.email : ""
  );
  const [phone, setPhone] = useState(
    currentUser.phone ? currentUser.phone : ""
  );
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("CA");

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        address: {
          city: city,
          country: country,
          line1: streetAddress,
          line2: null,
          postal_code: postalCode,
          state: province,
        },
        email: email,
        name: name,
        phone: phone,
      },
    });

    if (!error) {
      console.log("token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8000/stripe/charge",
          {
            amount: 50,
            id: id,
          }
        );

        if (response.data.success) {
          console.log("payment successful!");
          history.push("/application-confirmation");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      <Wrapper>
        <TopSection />
        <Form onSubmit={handleSubmit}>
          <Heading>Adoption Application</Heading>
          <Input
            type="text"
            id="name"
            placeholder="Your name"
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            value={name}
            required
          />
          <Input
            type="text"
            id="pet-name"
            placeholder="Name of Pet You Wish to Adopt"
            onChange={(ev) => {
              setPetName(ev.target.value);
            }}
            value={petName}
            required
          />
          <Input
            type="text"
            id="pet-id"
            placeholder="Pet ID"
            onChange={(ev) => {
              setPetId(ev.target.value);
            }}
            value={petId}
            required
          />
          <Input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            value={email}
            required
          />
          <Input
            type="number"
            id="phone"
            placeholder="Phone number"
            onChange={(ev) => {
              setPhone(ev.target.value);
            }}
            value={phone}
            required
          />
          <Input
            type="text"
            id="streetAddress"
            placeholder="Your address"
            onChange={(ev) => {
              setStreetAddress(ev.target.value);
            }}
            value={streetAddress}
            required
          />
          <Input
            type="text"
            id="city"
            placeholder="City"
            onChange={(ev) => {
              setCity(ev.target.value);
            }}
            value={city}
            required
          />
          <Input
            type="text"
            id="province"
            placeholder="Province"
            onChange={(ev) => {
              setProvince(ev.target.value);
            }}
            value={province}
            required
          />
          <Input
            type="text"
            id="postalCode"
            placeholder="Postal code"
            onChange={(ev) => {
              setPostalCode(ev.target.value);
            }}
            value={postalCode}
            required
          />
          <Select
            name="country"
            id="country"
            onChange={(ev) => {
              setCountry(ev.target.value);
            }}
            value={country}
          >
            <option value="CA">Canada</option>
            <option value="US">United States</option>
          </Select>
          <Diposit>
            The adoption fee will vary in costs depending on the shelters and
            rescues. A deposit of $50 is required to make an application and
            reserve the pet. <br />
            <br />
            The deposit is non-refundable but it will count towards the adoption
            fee.
          </Diposit>
          <CardElementWrapper>
            <CardHeading>Credit Card Information</CardHeading>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: `${themeVars.darkGray}`,
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </CardElementWrapper>
          <ButtonsWrapper>
            <Button>Submit Application</Button>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
    </>
  );
};

export default ApplicationForm;
