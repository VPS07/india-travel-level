import { STATE_LENGTH } from "./constant";

const levelStringToArray = (levelStr) => {
  const levelString = levelStr ?? "";
  const levelRegex = /^[0-5]+$/;
  if (levelString.length !== STATE_LENGTH || !levelString.match(levelRegex)) {
    return new Array(STATE_LENGTH).fill(0);
  }

  const arr = levelString.split("");
  return arr.map((provinceLevel) => parseInt(provinceLevel));
};

const levelArrayToString = (levelArr) => {
  if (levelArr.length !== STATE_LENGTH) {
    return new Array(STATE_LENGTH).fill("0").join("");
  }

  return levelArr.join("");
};

export { levelStringToArray, levelArrayToString };
