import React, { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../header/HeaderContext";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

import Rotate from "../Rotate";
import LoadingIcon from "../LoadingIcon";
import { createMessage } from "../../helpers/db-helpers";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: ${themeVars.darkGray};
  font-size: 25px;
  margin: 30px 0 0 0;
`;

const Form = styled.form``;

const Label = styled.label`
  width: 85%;
  font-size: 18px;
  color: ${themeVars.darkGray};
  text-align: left;
`;

const Input = styled.input`
  width: 85%;
  font-size: 16px;
  padding: 5px;
  border: 1px solid ${themeVars.mediumGray};
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 85%;
  height: 180px;
  font-size: 16px;
  padding: 5px;
  border: 1px solid ${themeVars.mediumGray};
  border-radius: 5px;

  @media (max-width: 320px) {
    height: 120px;
  }
`;

const InputContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

const BtnContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Btn = styled.button`
  color: ${themeVars.white};
  font-size: 18px;
  background: ${themeVars.coralOrange};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  margin: 30px 10px 0 10px;
  outline: none;

  &.back {
    color: ${themeVars.coralOrange};
    background: ${themeVars.white};
    border: 2px solid ${themeVars.coralOrange};
    border-radius: 15px;
    padding: 8px 16px;
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
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

const BottomSection = styled.section`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to bottom right,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const Contact = () => {
  const history = useHistory();
  const { setActive } = useContext(HeaderContext);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const currentUserId = useSelector((state) => state.currentUser.currentUserId);
  const org = useSelector((state) => state.organization.organization);
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (currentUser) {
      setSender(currentUser.name);
    }
  }, [currentUser]);

  useEffect(() => {
    if (org) {
      setRecipient(org.name);
    }
  }, [org]);

  const updateSender = (ev) => {
    setSender(ev.target.value);
  };

  const updateRecipient = (ev) => {
    setRecipient(ev.target.value);
  };

  const updateMessage = (ev) => {
    setMessage(ev.target.value);
  };

  const onSubmit = (data) => {
    const message = {
      ...data,
      recipientEmail: org.email,
    };
    const userId = currentUserId;
    createMessage(userId, message);
    setActive("message");
    history.push("/message");
  };

  return (
    <div>
      <TopSection />
      {currentUser && org && (
        <Wrapper>
          <Heading>Message</Heading>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Label htmlFor="sender">Sender: </Label>
              <Input
                type="text"
                id="sender"
                name="sender"
                value={sender}
                onChange={updateSender}
                ref={register({ required: true })}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="recipient">Recipient: </Label>
              <Input
                type="text"
                id="recipient"
                name="recipient"
                value={recipient}
                onChange={updateRecipient}
                ref={register({ required: true })}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="message">Message: </Label>
              <Textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={updateMessage}
                ref={register({ required: true })}
              />
            </InputContainer>
            <BtnContainer>
              <Btn>Send</Btn>
              <Btn
                className="back"
                onClick={(ev) => {
                  ev.preventDefault();
                  history.push(`/organization/${org.id}`);
                }}
              >
                Back
              </Btn>
            </BtnContainer>
          </Form>
        </Wrapper>
      )}
      {(!currentUser || !org) && (
        <Rotate>
          <LoadingIcon />
        </Rotate>
      )}
      <BottomSection />
    </div>
  );
};

export default Contact;
