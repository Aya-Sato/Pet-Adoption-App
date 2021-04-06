import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { getMessages } from "../../helpers/db-helpers";

import LoadingIcon from "../LoadingIcon";
import Rotate from "../Rotate";
import DefaultProfilePhoto from "../../assets/default-profile.png";

import moment from "moment";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const MessagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const Heading = styled.h2`
  width: 100%;
  background: linear-gradient(
    to bottom right,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
  color: ${themeVars.white};
  font-size: 18px;
  padding: 15px;
  margin: 4px 0;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 10px 30px 10px 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time = styled.div`
  font-size: 14px;
  color: ${themeVars.darkGray};
  margin: 5px 0;
`;

const Text = styled.p`
  font-size: 16px;
  margin: 5px 0 10px 0;
  width: 65vw;
`;

const LoadingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 250px;
`;

const Message = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.currentUser.currentUserId);
  const messageStatus = useSelector(
    (state) => state.messages && state.messages.status
  );
  const messages = useSelector(
    (state) => state.messages && state.messages.messages
  );

  useEffect(() => {
    if (userId) {
      getMessages(dispatch, userId);
    }
  }, [userId]);

  if (messageStatus === "loading" && !messages) {
    return (
      <LoadingIconContainer>
        <Rotate>
          <LoadingIcon />
        </Rotate>
      </LoadingIconContainer>
    );
  } else if (messages) {
    const messagesArr = Object.values(messages);
    return (
      <Wrapper>
        {messagesArr.map((messageArr, index) => {
          return (
            <div key={index}>
              <Heading>{messageArr[0].recipient}</Heading>
              {messageArr.map((message) => {
                const date = moment(message.time).format("lll");
                return (
                  <MessagesContainer key={message.time}>
                    <div style={{ display: "flex" }}>
                      <Image
                        src={
                          message.recipientPhoto
                            ? message.recipientPhoto
                            : DefaultProfilePhoto
                        }
                        alt="organization logo"
                      />
                      <MessageContainer>
                        <Time>{date}</Time>
                        <Text>{message.message}</Text>
                      </MessageContainer>
                    </div>
                  </MessagesContainer>
                );
              })}
            </div>
          );
        })}
      </Wrapper>
    );
  } else {
    return <div></div>;
  }
};

export default Message;
