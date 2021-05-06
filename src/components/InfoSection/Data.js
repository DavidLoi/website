import travelling from "../../images/svg-1.svg";
import investing from "../../images/svg-2.svg";
import android from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "pathplanner",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Python | Distance Matrix API | Kivy",
  headline: "Path Planner",
  description:
    "Calculates the optimal path given a starting location, an ending location and any number of locations inbetween.",
  link: "https://github.com/DavidLoi/Path-Planner",
  buttonLabel: "View repository",
  imgStart: false,
  img: travelling,
  alt: "travelling",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "stocksimulation",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Python | NumPy | pandas | Matplotlib",
  headline: "Monte Carlo Stock Simulation",
  description:
    "Gathers historical prices for a selected stock ticker and predicts the price of it after a configurable number of days using statistics and probability theory.",
  link: "https://github.com/DavidLoi/Monte-Carlo-Stock-Simulation",
  buttonLabel: "View repository",
  imgStart: true,
  img: investing,
  alt: "investing",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "tictactoe",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Java | Android Studio | XML",
  headline: "Tic Tac Toe",
  description:
    "A Tic Tac Toe game for Android phones that keeps track of each player's score and also has a button to reset the board.",
  link: "https://github.com/DavidLoi/TicTacToe",
  built: "Built with Java, Android Studio, and XML.",
  buttonLabel: "View repository",
  imgStart: false,
  img: android,
  alt: "android",
  dark: true,
  primary: true,
  darkText: false,
};
