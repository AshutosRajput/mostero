exports.rollDice = (req, res) => {
  const { betType, betAmount, currentPoints } = req.body;

  const die1 = Math.ceil(Math.random() * 6);
  const die2 = Math.ceil(Math.random() * 6);
  const sum = die1 + die2;

  let win = false;
  let multiplier = 0;

  if (sum < 7 && betType === "down") {
    win = true;
    multiplier = 2;
  } else if (sum === 7 && betType === "seven") {
    win = true;
    multiplier = 5;
  } else if (sum > 7 && betType === "up") {
    win = true;
    multiplier = 2;
  }

  const updatedPoints = win
    ? currentPoints + betAmount * (multiplier - 1)
    : currentPoints - betAmount;

  res.json({
    dice: [die1, die2],
    sum,
    win,
    multiplier,
    updatedPoints,
  });
};
