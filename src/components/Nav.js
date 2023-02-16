import React, { useState } from "react";
//STYLE
import styled from "styled-components";
import { motion } from "framer-motion";
//Images
import logo from "../img/logo.svg";
//Redux and routes
import {
  getSearchedGamesAsync,
  clearSearchedGames,
} from "./../redux/slices/gamesSlice";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    if (inputText) {
      dispatch(getSearchedGamesAsync(inputText));
      setInputText("");
    } else {
      dispatch(clearSearchedGames());
    }
  };
  const clearSearched = () => {
    dispatch(clearSearchedGames());
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={inputText} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.4rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;

    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;
