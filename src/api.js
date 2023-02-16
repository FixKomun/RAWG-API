//Base URL
const base_url = `https://api.rawg.io/api/games`;

//Getting the date
const getDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};

const lastYear = getDate().slice(0, 4) - 1 + "-01-01";
const currentYear = new Date().getFullYear();
const nextYear = parseInt(getDate().slice(0, 4)) + 1 + "-01-01";
const currentDate = getDate();
//console.log(nextYear);

//Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () =>
  `${base_url}?key=${process.env.REACT_APP_RAWG_KEY}${popular_games}`;
export const upcomingGamesURL = () =>
  `${base_url}?key=${process.env.REACT_APP_RAWG_KEY}${upcoming_games}`;
export const newGamesURL = () =>
  `${base_url}?key=${process.env.REACT_APP_RAWG_KEY}${new_games}`;
export const gameDetailsURL = (game_id) =>
  `${base_url}/${game_id}?key=${process.env.REACT_APP_RAWG_KEY}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_KEY}`;

//Searched games

export const searchGameURL = (game_name) =>
  `${base_url}?key=${process.env.REACT_APP_RAWG_KEY}&search=${game_name}&page_size=9`;
