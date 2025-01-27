import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { ImLocation } from "react-icons/im";
import { CgHome } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import DefaultProfilePhoto from "../../assets/default-profile.png";
import { PetContext } from "../main/PetContext";

import Map from "./Map";
const { REACT_APP_map_apiKey } = process.env;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  z-index: 1;
  position: relative;
  top: 75px;
`;

const Name = styled.h2`
  position: relative;
  top: 100px;
  color: ${themeVars.darkGray};
  font-size: 22px;
  font-weight: normal;
  text-align: center;
  margin: 0;
`;

const City = styled.div`
  position: relative;
  top: 100px;
  margin-top: 15px;
  color: ${themeVars.darkGray};
`;

const TopSection = styled.section`
  width: 100%;
  height: 150px;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to top left,
    ${themeVars.coralOrange} 0%,
    ${themeVars.yellow} 60%,
    ${themeVars.teaGreen} 100%
  );
`;

const MapContainer = styled.div`
  position: relative;
  top: 120px;
`;

const AddressContainer = styled.div`
  width: 100%;
  position: relative;
  top: 120px;
  color: ${themeVars.darkGray};
`;

const Address = styled.div`
  margin-left: 50px;
`;

const PhoneContainer = styled.div`
  width: 100%;
  position: relative;
  top: 120px;
  color: ${themeVars.darkGray};
`;

const Phone = styled.div`
  margin-left: 50px;

  a {
    color: ${themeVars.darkGray};
  }
`;

const EmailContainer = styled.div`
  width: 100%;
  position: relative;
  top: 120px;
  color: ${themeVars.darkGray};
`;

const Email = styled.div`
  margin-left: 50px;

  a {
    color: ${themeVars.darkGray};
  }
`;

const MessageContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Message = styled.div`
  color: ${themeVars.darkGray};

  span {
    text-decoration: underline;
  }
`;

const SubHeading = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  margin: 30px 0 10px 30px;
  color: ${themeVars.green};
`;

const BtnContainer = styled.div`
  height: 120px;
  position: relative;
  top: 120px;
  margin-top: 50px;
  padding-top: 30px;
`;

const Btn = styled.button`
  font-size: 18px;
  color: ${themeVars.coralOrange};
  background: ${themeVars.white};
  border-radius: 15px;
  border: 2px solid ${themeVars.coralOrange};
  outline: none;
  padding: 8px 16px;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_map_apiKey}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
};

const Organization = () => {
  const [loadMap, setLoadMap] = useState(false);
  const org = useSelector((state) => state.organization.organization);
  const history = useHistory();
  const { selectedPet } = useContext(PetContext);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <>
      {org && (
        <Wrapper>
          <TopSection />
          <Image
            src={org.photos[0] ? org.photos[0].large : DefaultProfilePhoto}
            alt="company logo"
          />
          <Name>{org.name}</Name>
          <City>
            <ImLocation
              style={{
                fontSize: "17px",
                position: "relative",
                top: "2px",
              }}
            />
            {org.address.city}, {org.address.state}
          </City>
          <MapContainer>
            {loadMap && <Map address={org.address} />}
          </MapContainer>
          <AddressContainer>
            <SubHeading>
              <CgHome style={{ position: "relative", top: "1px" }} /> Address:
            </SubHeading>
            {org.address.address1 && <Address>{org.address.address1}</Address>}
            {org.address.address2 && <Address>{org.address.address2}</Address>}
            <Address>
              {org.address.city}, {org.address.state}, {org.address.postcode},{" "}
              {org.address.country}
            </Address>
          </AddressContainer>
          <PhoneContainer>
            <SubHeading>
              <ImPhone
                style={{ fontSize: "16px", position: "relative", top: "1px" }}
              />{" "}
              Phone Number:
            </SubHeading>
            <Phone>
              <a href={`tel:${org.phone}`}>{org.phone}</a>
              {!org.phone && <div>Not available</div>}
            </Phone>
          </PhoneContainer>
          <EmailContainer>
            <SubHeading>
              <HiOutlineMail
                style={{ fontSize: "19px", position: "relative", top: "3px" }}
              />{" "}
              Email:
            </SubHeading>
            <Email>
              <a href={`mailto:${org.email}`}>{org.email}</a>
              {!org.email && <div>Not available</div>}
              {org.email && (
                <MessageContainer>
                  <Message>
                    Or{" "}
                    <span
                      onClick={() => {
                        history.push(`/contact/${org.id}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Message via Adopet
                    </span>
                  </Message>
                </MessageContainer>
              )}
            </Email>
          </EmailContainer>
          <BtnContainer>
            <Btn
              onClick={() => {
                history.push(`/pet/${selectedPet.id}`);
              }}
            >
              Back
            </Btn>
          </BtnContainer>
        </Wrapper>
      )}
    </>
  );
};

export default Organization;
