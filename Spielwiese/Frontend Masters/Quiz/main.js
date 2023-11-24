let points = 0;



function australia() {
  // what is the capital of australia?
  // 100 pts


  const isCorrect = userAnswer.toUpperCase() === 'CANBERRA';

  if (isCorrect) {
    points += 100;
  }
  return isCorrect;
}

function canada(userAnswer) {
  // what is the capital of canada?
  // 100 pts
  document.getElementById('#text').innerHTML = 'what is the capital of australia?';

  const isCorrect = userAnswer.toUpperCase() === 'OTTAWA';

  if (isCorrect) {
    points += 100;
  }
  return isCorrect;
}

function uppercase(userAnswer, word) {
  // what is <word> in all capital letters?
  // 200 pts

  const isCorrect = userAnswer === word.toUpperCase();

  if (isCorrect) {
    points += 100;
  }
  return isCorrect;
}

function firstThreeLetters(userAnswer, word) {
  // what are the first three letters of <word>?
  // 200 pts

  const isCorrect = userAnswer === word.substr(0, 3);

  if (isCorrect) {
    points += 200;
  }
  return isCorrect;

}

function squared(userAnswer, number) {
  // what is <number> squared?
  // 200 pts

  const isCorrect = parseInt(userAnswer) === number ** 2;

  if (isCorrect) {
    points += 200;
  }
  return isCorrect;

}

function multiplication(userAnswer, num1, num2) {
  // what is <num1> multiplied by <num2>?
  // 300 pts

  const isCorrect = userAnswer == num1 * num2;

  if (isCorrect) {
    points += 300;
  }
  return isCorrect;

}

function age(userAnswer, currentYear, birthYear) {
  // if someone was born in <birthYear> and already has had their birthday this year, how old are they?
  // 300 pts

  const isCorrect = currentYear - birthYear == userAnswer;

  if (isCorrect) {
    points += 300;
  }
  return isCorrect;

}

function larger(userAnswer, num1, num2) {
  // which of ${number4} and ${number5} is larger (if they're the same then pick that number)?
  // 300 pts

  if (num1 > num2) {
    isCorrect = userAnswer == num1;
  } else {
    isCorrect = userAnswer == num2;
  }

  if (isCorrect) {
    points += 300;
  }
  return isCorrect;

}

function getScore() {
  // returns the current user's quiz score score

}
