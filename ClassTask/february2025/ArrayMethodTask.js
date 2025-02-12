let greaterThanOrEqualTo70 = (scores) => {
  return scores.filter((score) => score >= 70);
}

let add10To = (scores) => {
  return scores.map((score) => score + 10);
};

const squareOfEachNumber = (scores) => {
  return scores.map((score) => score * score);
};

module.exports = {greaterThanOrEqualTo70, add10To, squareOfEachNumber};