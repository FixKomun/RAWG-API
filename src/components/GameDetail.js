import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";
//ROUTER
import { useNavigate } from "react-router-dom";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ path }) => {
  const navigate = useNavigate();
  //EXIT DETAIL
  const onExit = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  //GET STARS
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }

    return stars;
  };

  //GET PLATFORM IMAGES
  const getPlatformImage = (platformName) => {
    if (platformName.includes("PlayStation")) {
      return playstation;
    } else if (platformName.includes("Xbox")) {
      return xbox;
    } else if (platformName === "PC") {
      return steam;
    } else if (platformName === "Nintendo Switch") {
      return nintendo;
    } else if (platformName.includes("OS")) {
      return apple;
    } else {
      return gamepad;
    }
  };

  //Get stuff from redux store
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetail
  );

  return (
    <>
      {!isLoading && (
        <Card className="shadow" onClick={onExit}>
          <Detail layoutId={path}>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatformImage(data.platform.name)}
                      alt={data.platform.name}
                      title={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="image" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.map((screen) => (
                <img src={screen.image} key={screen.id} alt="game-image" />
              ))}
            </div>
          </Detail>
        </Card>
      )}
    </>
  );
};

const Card = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #09244e;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
