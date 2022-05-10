const quizData = [
  {
    question: `how old is florin?`,
    a: `10`,
    b: `17`,
    c: `26`,
    d: `110`,
    correct: `c`,
  },
  {
    question: `what is the best programming langage in 2022?`,
    a: `java`,
    b: `c`,
    c: `python`,
    d: `javascript`,
    correct: `d`,
  },
  {
    question: `who is the president of us?`,
    a: `Florin pop`,
    b: `Donald Thrump`,
    c: `Ivan solano`,
    d: `Mihai andrei`,
    correct: `a`,
  },
  {
    question: `what does HTML stand for?`,
    a: `HyperText Markup Langage `,
    b: `Cascading Style Sheet`,
    c: `Jason Object Notation`,
    d: `Helicopter Terminals Motorboats Lamborgini`,
    correct: `a`,
  },
  {
    question: `what year was javascript launch?`,
    a: `1996`,
    b: `1995`,
    c: `1994`,
    d: `non of the above`,
    correct: ``,
  },
];
const answerEls = document.querySelectorAll(`.answer`);
const quiz = document.getElementById(`quiz`);
const questionEl = document.getElementById(`question`);
const a_text = document.getElementById(`a_text`);
const b_text = document.getElementById(`b_text`);
const c_text = document.getElementById(`c_text`);
const d_text = document.getElementById(`d_text`);
const submitBtn = document.getElementById(`submit`);

let currentQuestion = 0;
let score = 0;
let answer = undefined;
let answerEl = undefined;

loadQuiz();

function loadQuiz() {
  deselectedAnswers();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}
submitBtn.addEventListener("click", () => {
  /*chack to see the answer*/
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    currentQuestion++;
    if (answer && answer === quizData[currentQuestion]) {
      score++;
    }

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML=`<h2>you answered correctly  at ${score} / ${quizData.length} questions</h2>
      <button onclick="location.reload()">Reload</button>`
    }
  }
});
