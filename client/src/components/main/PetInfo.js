import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PetContext } from "./PetContext";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { themeVars } from "../GlobalStyles";

import { fetchAnimal, fetchOrganization } from "../../helpers/api-helpers";
import { receiveSuperLikedPet, removeLikedPet } from "../../actions";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiCheck, FiX } from "react-icons/fi";
import { CgHome } from "react-icons/cg";

import LoadingIcon from "../LoadingIcon";
import Rotate from "../Rotate";

const Wrapper = styled.div`
  .available {
    height: 100vh;
    overflow: scroll;
  }

  .not-available {
    display: flex;
    justify-content: center;
  }
`;

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
  margin-bottom: 5px;
`;

const Organization = styled.div`
  display: flex;
  color: ${themeVars.darkGray};
  font-size: 16px;
  margin-bottom: 10px;
`;

const StyledLink = styled.span`
  color: ${themeVars.darkGray};
  text-decoration: underline;
  padding-left: 6px;
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
  margin-bottom: 20px;
`;

const GoodWith = styled.ul`
  padding: 0;
  margin-bottom: 8px;
  color: ${themeVars.darkGray};
`;

const List = styled.li`
  list-style-type: none;
  margin: 8px 0 0 0;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: flex-start;
  margin: 0 5% 20px 5%;
`;

const Tag = styled.div`
  color: ${themeVars.coralOrange};
  background: ${themeVars.white};
  border: 2px solid ${themeVars.coralOrange};
  border-radius: 15px;
  padding: 5px 20px;
  margin: 5px 15px 5px 0;
`;

const BtnContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  &.adopt {
    border-top: 1px solid ${themeVars.gray};
  }

  &.action {
    height: 100px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(244, 249, 249, 0.3);
  }
`;

const AdoptBtn = styled.button`
  max-width: 80%;
  font-size: 18px;
  color: ${themeVars.white};
  background: ${themeVars.coralOrange};
  padding: 10px 20px;
  margin: 50px 0 150px 0;
  border: none;
  border-radius: 15px;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${themeVars.yellow};
  }
`;

const LoadingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 250px;
`;

const NotAvailable = styled.p`
  color: ${themeVars.darkGray};
  font-size: 18px;
  position: relative;
  top: 150px;
  text-align: center;
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

const PetInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectedPet } = useContext(PetContext);
  const petInfo = useSelector((state) => state.pet.pet);
  const loadingStatus = useSelector((state) => state.pet.status);
  const accessToken = useSelector((state) => state.auth.token);
  const organizationInfo = useSelector(
    (state) => state.organization.organization
  );
  const [petPhotosArr, setPetPhotosArr] = useState([]);
  const [pet, setPet] = useState();
  const [organizationName, setOrganizationName] = useState();

  useEffect(() => {
    fetchAnimal(dispatch, accessToken, selectedPet.id);
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
  }, [loadingStatus, petInfo]);

  useEffect(() => {
    if (pet) {
      const organizationId = pet.organization_id;
      fetchOrganization(dispatch, accessToken, organizationId);
    }
  }, [pet]);

  useEffect(() => {
    if (organizationInfo) {
      setOrganizationName(organizationInfo.name);
    }
  }, [organizationInfo]);

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
  if (loadingStatus === "error") {
    return (
      <Wrapper className="not-available">
        <NotAvailable>This animal is no longer available...</NotAvailable>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="available">
      {pet && petPhotosArr && organizationName && (
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
            <Organization>
              Organization:
              <StyledLink
                onClick={() => {
                  history.push(`/organization/${pet.organization_id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {organizationName}
              </StyledLink>
            </Organization>
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
          {pet.tags.length > 0 && (
            <TagContainer>
              {pet.tags.map((tag) => {
                return <Tag key={tag}>{tag}</Tag>;
              })}
            </TagContainer>
          )}
          <BtnContainer className="adopt">
            <AdoptBtn
              onClick={() => {
                dispatch(receiveSuperLikedPet(selectedPet));
                dispatch(removeLikedPet(selectedPet));
                history.push("/submit-application");
                window.scrollTo(0, 0);
              }}
            >
              {`Adopt ${pet.name}`}
            </AdoptBtn>
          </BtnContainer>
        </>
      )}
    </Wrapper>
  );
};

export default PetInfo;
