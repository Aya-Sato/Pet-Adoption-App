import React, { useContext, useEffect, useState } from "react";
import { PetContext } from "./PetContext";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

import { fetchAnimal } from "../../helpers/api-helpers";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiCheck, FiX } from "react-icons/fi";
import { CgHome } from "react-icons/cg";
import LoadingIcon from "../LoadingIcon";
import Rotate from "../Rotate";

const Img = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto auto;
`;

const Name = styled.h3`
  color: ${themeVars.darkGray};
  font-size: 30px;
  margin: 40px 0 0 0;
`;

const Age = styled.div`
  color: ${themeVars.darkGray};
  font-size: 18px;
  margin-top: 8px;
`;

const Characteristics = styled.div`
  color: ${themeVars.darkGray};
  font-size: 18px;
  margin: 5px 0;
`;

const City = styled.div`
  color: ${themeVars.darkGray};
  font-size: 16px;
  margin-bottom: 10px;
`;

const Attributes = styled.li`
  display: flex;
  flex-direction: column;
  color: ${themeVars.mediumGray};
`;

const SpayedNeutered = styled.ul`
  margin: 8px 0 0 0;
  padding: 0;
`;

const HouseTrained = styled.ul`
  margin: 8px 0 0 0;
  padding: 0;
`;

const SpecialNeeds = styled.ul`
  margin: 8px 0 0 0;
  padding: 0;
`;

const ShotsCurrent = styled.ul`
  margin: 8px 0 0 0;
  padding: 0;
`;

const Environment = styled.div`
  color: ${themeVars.mediumGray};
`;

const GoodWith = styled.ul`
  padding: 0;
  margin-bottom: 8px;
  text-decoration: underline;
`;

const List = styled.li`
  list-style-type: none;
  margin: 8px 0 0 0;
`;

const LoadingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 150px;
`;

const checkStyle = {
  color: `${themeVars.coralOrange}`,
  position: "relative",
  top: "3px",
};

const xStyle = {
  color: `${themeVars.green}`,
  position: "relative",
  top: "3px",
};

const Pet = () => {
  const dispatch = useDispatch();
  const { selectedPetId } = useContext(PetContext);
  const petInfo = useSelector((state) => state.pet.pet);
  const loadingStatus = useSelector((state) => state.pet.status);
  const accessToken = useSelector((state) => state.auth.token);
  const [petPhotosArr, setPetPhotosArr] = useState([]);
  const [pet, setPet] = useState();

  useEffect(() => {
    fetchAnimal(dispatch, accessToken, selectedPetId);
  }, []);

  useEffect(() => {
    if (petInfo) {
      setPetPhotosArr(
        petInfo.photos.map((photo) => {
          return photo.large;
        })
      );
      setPet(petInfo);
    }
  }, [petInfo]);

  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (loadingStatus === "loading") {
    return (
      <LoadingIconContainer>
        <Rotate>
          <LoadingIcon />
        </Rotate>
      </LoadingIconContainer>
    );
  }
  return (
    <>
      {pet && petPhotosArr && (
        <>
          <Slider {...settings}>
            {petPhotosArr.map((photo, index) => {
              return <Img src={photo} alt="pet" key={index} />;
            })}
          </Slider>
          <TextContainer>
            <Name>{pet.name}</Name>
            <Age>{pet.age}</Age>
            <Characteristics>
              {`${pet.gender}, ${pet.breeds.primary}`}
            </Characteristics>
            {pet.contact.address.city && pet.contact.address.state && (
              <City>
                <CgHome
                  style={{
                    position: "relative",
                    top: "1.5px",
                    marginRight: "5px",
                  }}
                />
                {`Located in ${pet.contact.address.city}, ${pet.contact.address.state}`}
              </City>
            )}
            <Attributes>
              <SpayedNeutered>
                {pet.attributes.spayed_neutered ? (
                  <div>
                    <FiCheck style={checkStyle} /> Spayed or Neutered
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> Spayed or Neutered
                  </div>
                )}
              </SpayedNeutered>
              <HouseTrained>
                {pet.attributes.house_trained ? (
                  <div>
                    <FiCheck style={checkStyle} /> House trained
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> House trained
                  </div>
                )}
              </HouseTrained>
              <SpecialNeeds>
                {pet.attributes.special_needs ? (
                  <div>
                    <FiCheck style={checkStyle} /> Special needs
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> Special needs
                  </div>
                )}
              </SpecialNeeds>
              <ShotsCurrent>
                {pet.attributes.shots_current ? (
                  <div>
                    <FiCheck style={checkStyle} /> Vaccinations up to date
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> Vaccinations up to date
                  </div>
                )}
              </ShotsCurrent>
            </Attributes>
            <Environment>
              <GoodWith>Good in a home with:</GoodWith>
              <List>
                {pet.environment.children ? (
                  <div>
                    <FiCheck style={checkStyle} /> Children
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> Children
                  </div>
                )}
              </List>
              <List>
                {pet.environment.dogs ? (
                  <div>
                    <FiCheck style={checkStyle} /> Dogs
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> Dogs
                  </div>
                )}
              </List>
              <List>
                {pet.environment.cats ? (
                  <div>
                    <FiCheck style={checkStyle} /> Cats
                  </div>
                ) : (
                  <div>
                    <FiX style={xStyle} /> Cats
                  </div>
                )}
              </List>
            </Environment>
          </TextContainer>
        </>
      )}
    </>
  );
};

export default Pet;
