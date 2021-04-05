import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { getMessages } from "../../helpers/db-helpers";

import LoadingIcon from "../LoadingIcon";
import Rotate from "../Rotate";

const Wrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 100px);
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
        {messagesArr.map((messageArr) => {
          return (
            <>
              <h2>{messageArr[0].recipient}</h2>
              {messageArr.map((message) => {
                return <p>{message.message}</p>;
              })}
            </>
          );
        })}
      </Wrapper>
    );
  }
};

export default Message;
