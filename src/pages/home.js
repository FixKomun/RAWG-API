import React, { useEffect } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularGamesAsync,
  getNewGamesAsync,
  getUpcomingGamesAsync,
} from "../redux/slices/gamesSlice";
//COMPONENTS
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//STYLE
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
//ROUTER
import { useLocation } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!path) {
      document.body.style.overflow = "auto";
    }
    dispatch(getPopularGamesAsync());
    dispatch(getNewGamesAsync());
    dispatch(getUpcomingGamesAsync());
  }, [dispatch]);

  //Get data from store
  const { popularGames, upcomingGames, newGames, searched } = useSelector(
    (state) => state.games
  );

  const location = useLocation();
  const path = location.pathname;

  return (
    <GameList>
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {path !== "/" && (
            <GameDetail
              location={location}
              key={location.pathname}
              path={path}
            />
          )}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>

            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popularGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </LayoutGroup>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Home;
