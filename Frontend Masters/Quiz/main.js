
let points = 0;

function getAnswer () {
    let userAnswer = documet.getElementById('text').value;
}

australia()

function australia(userAnswer) {
  // what is the capital of australia?
  // 100 pts
  
  document.getElementById('#text').innerHTML = 'what is the capital of australia?';
  
  

  const isCorrect = userAnswer.toUpperCase() === 'CANBERRA';

  if (isCorrect) {
    points += 100;
  } else {
    alert("That´s nicht korrekt!")
  }
  return isCorrect;

}

canada();

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

}

function firstThreeLetters(userAnswer, word) {
  // what are the first three letters of <word>?
  // 200 pts

}

function squared(userAnswer, number) {
  // what is <number> squared?
  // 200 pts

  const newAnswer = parseInt(userAnswer);

  const isCorrect = userAnswer === number * 2;

}

function multiplication(userAnswer, num1, num2) {
  // what is <num1> multiplied by <num2>?
  // 300 pts

}

function age(userAnswer, currentYear, birthYear) {
  // if someone was born in <birthYear> and already has had their birthday this year, how old are they?
  // 300 pts

}

function larger(userAnswer, num1, num2) {
  // which of ${number4} and ${number5} is larger (if they're the same then pick that number)?
  // 300 pts

}

function getScore() {
  // returns the current user's quiz score score

}
