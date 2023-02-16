import React from "react";
//STYLE
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { getGameDetailAsync } from "../redux/slices/gameDetailSlice";
import { getGameScreenshotAsync } from "./../redux/slices/gameDetailSlice";
//ROUTER
import { Link } from "react-router-dom";
const Game = ({ name, released, image, id }) => {
  const stringId = id.toString();
  // console.log(typeof stringId);
  const dispatch = useDispatch();
  const gameDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(getGameDetailAsync(id), [dispatch]);
    dispatch(getGameScreenshotAsync(id), [dispatch]);
  };
  return (
    <StyledGame layoutId={stringId} onClick={gameDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
