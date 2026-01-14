function checkQuiz() {
  const form = document.getElementById('quizForm');
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    if (form['q'+i].value === 'correct') score++;
  }

  const result = document.getElementById('quizResult');
  result.textContent = `🎉 You scored ${score} out of 5!`;

  if(score === 5) {
    result.textContent += " Perfect! You're a CS master! 🌟";
  } else if(score >= 3) {
    result.textContent += " Great job! Keep learning! 👍";
  } else {
    result.textContent += " Don't worry, review the concepts and try again! 💪";
  }
}
