import { words } from "./words";

// constant values

export const LETTERS_MAX = 5;
export const ANSWER_GUESS = 6;

// make a wordle syntax

const pickRandom = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum].split("");
};

// uppercase

export const upperFunction = () => {
  const word = pickRandom(words);
  const upperWord = word.map((letter) => letter.toUpperCase());

  return upperWord;
};
