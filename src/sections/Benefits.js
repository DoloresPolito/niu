import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import BenefitCard from "../components/BenefitCard";
import {
  Heading1,
  Heading2,
  Button,
  Container,
  CardTitle,
  CardText,
} from "../styles/texts";
import { Link, useNavigate } from "react-router-dom";
import cards from "../jsons/benefitscards.json";
import largecards from "../jsons/largebenefitscards.json";
import down from "../assets/benefits/drop white.png";

function Benefits() {
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
      setShowFilteredCards(true);
    }
  }, []);

  const navigate = useNavigate();

  const categorias = ["todas las categorias", "1", "2", "3", "4", "5"];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilteredCards, setShowFilteredCards] = useState(false);

  const handleNavigation = (to) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowFilteredCards(true);
  };



  const filteredCards = showFilteredCards
    ? cards.filter(
        (card) =>
          selectedCategory === "todas las categorias" ||
          card.category === selectedCategory
      )
    : cards;

  return (
    <>
      <BenefitsSection>
        <Navbar />
        <Cover>
          <ContentWraper>
            <Heading1>cofre</Heading1>
            <Heading2>
              niu es tu billetera, <b>pero a otro level</b>
            </Heading2>
            <Button><p>descargá ahora</p></Button>
          </ContentWraper>
        </Cover>
        <Container>
          <h5>no te pierdas estos beneficios</h5>

          <CategorySearchSection
            categorias={categorias}
            selectedCategory={selectedCategory}
            handleCategorySelect={handleCategorySelect}
          />

          <PrincipalBox>
            {largecards.map((card, index) => (
              <LargeCard card={card} index={index} />
            ))}
          </PrincipalBox>

          <Box>
            {filteredCards.map((card, index) => (
              <Link
                to={"/benefit/" + card.id}
                onClick={() => handleNavigation("/benefits")}
                style={{ textDecoration: "none" }}
              >
                <BenefitCard card={card} index={index} />
              </Link>
            ))}
          </Box>
        </Container>
        <Footer />
      </BenefitsSection>
    </>
  );
}

const LargeCard = ({ card, index }) => {
  return (
    <>
      <Item key={index}>
        <CardImage src={card.image} alt="card logo" />
        <div className="logo">
          <img alt="logo" src={card.logo} />
        </div>
        <div>
          <CardTitle>{card.title}</CardTitle>
          <CardText>{card.content}</CardText>
        </div>
      </Item>
    </>
  );
};

const CategorySearchSection = ({
  categorias,
  selectedCategory,
  handleCategorySelect,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (category) => {
    handleCategorySelect(category);
    setShowOptions(false); 
    localStorage.setItem("selectedCategory", category);
  };

  return (
    <CategorySearchContainer>
      <InputContainer>
        <div>
          <CategoryInput
            onClick={() => setShowOptions(!showOptions)}
            placeholder="Buscar categoría"
            value={selectedCategory}
            readOnly
          />
        </div>
        <div className="image">
          <CategoryImage src={down} alt="down" />
        </div>
      </InputContainer>

      {showOptions && (
        <CategoryOptions>
          {categorias.map((category, index) => (
            <CategoryOption
              key={index}
              onClick={() => handleOptionClick(category)} 
            >
              {category}
            </CategoryOption>
          ))}
        </CategoryOptions>
      )}
    </CategorySearchContainer>
  );
};

const BenefitsSection = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  background: linear-gradient(-45deg, #5c0a33, black, #5c0a33, black);

  h5 {
    font-family: "Pixelify Sans", sans-serif;
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: white;
    letter-spacing: 2px;
    padding: 30px 0;
    text-align: center;
  }
`;

const Cover = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("/backgrounds/imagen header beneficios 1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWraper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
`;

const PrincipalBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px;

  @media only screen and (min-width: 600px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
  }

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 0px 150px 0px;

  @media only screen and (max-width: 750px) {
    padding: 150px 0px 150px 0px;
  }
`;

const Item = styled.div`
  color: white;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 270px;
  position: relative;
  width: 550px;

  div {
    padding-left: 20px;
    margin-top: 40px;
  }

  .logo {
    height: 80px;
    width: 60px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 20px;
    top: 70px;
    background-image: url(${(props) => props.backgroundimage});

    img {
      height: 80px;
      width: 80px;
      padding: 0px !important;
      margin-left: -20px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1200px) {
    margin: 10px 0px;
  }
`;

const CardImage = styled.img`
  width: 550px;
  height: 150px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const CategorySearchContainer = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  width: 100%;
  

  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 50px;

  div {
    margin: 10px;
  }

  .image {
    margin-left: -40px;
  }

  @media only screen and (max-width: 560px) {
    width: 100%;
  }
`;

const CategoryImage = styled.img`
  height: 10px;
  width: 15px;
  align-self: center;
`;
const CategoryInput = styled.input`
  width: 460px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  font-family: "Pixelify Sans", sans-serif;
  height: 40px;
  font-size: 16px;
  color: white !important;
  border: none;
  @media only screen and (max-width: 560px) {
    width: 100%;
  }

  ::placeholder {
    font-family: "Pixelify Sans", sans-serif;
  }
  &:focus {
    outline: none;
    border-color: transparent;
  }
`;

const CategoryOptions = styled.div`
  position: absolute;
  top: 100%;

  width: 100%;
  background-color: #2e0619;
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 100;
  width: 500px;
  @media only screen and (max-width: 560px) {
    width: 100%;
    left: 50%;
  }
`;

const CategoryOption = styled.div`
  padding: 10px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

`;

export default Benefits;
