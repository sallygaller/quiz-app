const STORE = [
  {
    question: "What do winners of the game show 'Countdown' receive?",
    answers: {
      a: "A Countdown hot water bottle",
      b: "A Countdown teapot",
      c: "A Countdown pen and notebook",
      d: "A Countdown calendar"
    },
    correctAnswer: "b",
    answerMessage: "Winners receive a Countdown teapot and are the envy of the nation.",
    image: "images/countdown-teapot.jpg",
    imageAlt: "A blue and green decorative teapot with a clock design",
  },
  {
    question: "What did one contestant request for breakfast in the reality show 'Four in a Bed'?",
    answers: {
      a: "Freshly squeezed tomato juice with an umbrella in it",
      b: "A burnt fried egg",
      c: "Strained baked beans",
      d: "A peeled soft-boiled egg"
    },
    correctAnswer: "d",
    answerMessage: "A contestant asked for a peeled soft-boiled egg, which he did not receive.",
    image: "images/breakfast.jpg",
    imageAlt: "A full English breakfast",
  },
  {
    question: "What kitchen implement did one 'Come Dine With Me' contestant put in his mouth to sample his dessert?",
    answers: {
      a: "A wooden spoon",
      b: "A bread knife",
      c: "A balloon whisk",
      d: "A lemon zester"
    },
    correctAnswer: "c",
    answerMessage: "A contestant put the entire head of a whisk in his mouth.",
    image: "images/whisk.jpg",
    imageAlt: "A contestant with the head of a balloon whisk in his mouth",
  },
  {
    question: "In 'Antiques Roadshow', for what purpose was a family inadvertently using a rare piece of owl-shaped pottery from 1680?",
    answers: {
      a: "An ashtray",
      b: "A flower vase",
      c: "A garden ornament",
      d: "A paperweight"
    },
    correctAnswer: "b",
    answerMessage: "Before being valued at £20,000, Ozzie the Owl was used as a flower vase.",
    image: "images/owl.jpg",
    imageAlt: "A decorative piece of slipware pottery shaped like an owl",
  },
  {
    question: "What predicted the gender of the new royal baby in a 2018 episode of 'This Morning?'",
    answers: {
      a: "A psychic octopus",
      b: "A psychic rock",
      c: "A psychic banana",
      d: "A psychic hamster"
    },
    correctAnswer: "c",
    answerMessage: "It was a psychic banana, which was later proven right.",
    image: "images/banana.jpeg",
    imageAlt: "A banana being sliced open",
  },
  {
    question: "In the detective drama 'Midsomer Murders', how many murders had taken place in the fictional village of Midsomer as of 2016?",
    answers: {
      a: "222",
      b: "105",
      c: "1,276",
      d: "782"
    },
    correctAnswer: "a",
    answerMessage: "The show featured 222 murders with an average of nearly 3 per episode.",
    image: "images/midsomer-murders.jpg",
    imageAlt: "The three main characters in a Midsomer Murders looking brooding",
  },
  {
    question: "What is the home renovation show 'Homes Under the Hammer' well known for?",
    answers: {
      a: "Dark lighting",
      b: "The presenters going off-script",
      c: "Very literal music choices",
      d: "Angry contestants"
    },
    correctAnswer: "c",
    answerMessage: "'Homes Under the Hammer' is known for its literal music choices. During his introduction, the contestant below was accompanied by Human League’s 'Mirror Man'.",
    image: "images/mirror-man.PNG",
    imageAlt: "A Homes under the Hammer contestant who used to manufacture rearview mirrors for trucks",
  },
  {
    question: "What animal was interviewed on BBC news in 2015?",
    answers: {
      a: "Harry the horse",
      b: "Peggy the cat",
      c: "Bounce the dog",
      d: "Nibbles the rabbit"
    },
    correctAnswer: "c",
    answerMessage: "Bounce the dog was 'interviewed' for a piece about animal psychology. He even had his own chair.",
    image: "images/bounce-the-dog.png",
    imageAlt: "A yellow labrador being interviewed on BBC news",
  },
  {
    question: "What was 'Supermarket Sweep' host Dale Winton’s catchphrase?",
    answers: {
      a: "Go wild in the aisles!",
      b: "You’re off your trolley!",
      c: "Find a prize in the pies!",
      d: "Grab a kebab!"
    },
    correctAnswer: "a",
    answerMessage: "Dale’s catchphrase was 'Go wild in the aisles!' Another Dale classic was 'Let’s check ‘em out!’",
    image: "images/dale-winton.jpg",
    imageAlt: "The host of Supermarket Sweep surrounded by groceries",
  },
  {
    question: "Ainsley Harriott surprised a viewer on 'This Morning' by tiptoeing into her living room brandishing what?",
    answers: {
      a: "A grandfather clock",
      b: "An ironing board",
      c: "A vacuum cleaner",
      d: "A frying pan"
    },
    correctAnswer: "d",
    answerMessage: "Ainsley brandished a frying pan whilst bellowing 'why helloooo, Jill!'",
    image: "images/ainsley-harriott.jpg",
    imageAlt: "A man holding a frying pan walks towards two women on a sofa",
  },
];

let questionIndex = 0;
let questionNumber = questionIndex + 1;
let userScore = 0;

function handleStart() {
  $('.js-homepage').show();
  $('.js-results-page').hide();
  $('.js-answer-page').hide();
  $('.js-question-page').hide();
  $('#start').on('click', function (event) {
    $('.js-homepage').hide();
    $('.js-answer-page').hide();
    $('.js-question-page').prepend(render());;
    $('section').removeClass("hidden");
  });
};

function updateQuestionNumber() {
  questionNumber++;
  questionIndex++;
}

function updateScore(){
  userScore++
  $('.js-current-score').text(userScore);
}

function render() {
  $('.js-question-page').show();
  $('.js-question-number').text(questionNumber);
  $('.js-current-score').text(userScore);
  return renderForm();
}

function renderForm() {
  let thisQuestion = questionIndex;
  let myForm = $(`<form class="options">
    <div class="group item-questionpage text-center">
    <fieldset>
      <h3 class="h3-question">${STORE[thisQuestion].question}</h3>
    </fieldset>
    </div>
  </form>`)

  let quizOptions = $(myForm).find('fieldset');

  for (const property in STORE[thisQuestion].answers) {
    $(`<div class="option-text">
        <label id="${property}" for="${property}">
        <input class="radio" type="radio" id="${STORE[thisQuestion].answers[property]}" value="${STORE[thisQuestion].answers[property]}" name="answer" required>
        <span class="option-text">${STORE[thisQuestion].answers[property]}</span>
        </label>
        </div>
        `).appendTo(quizOptions);
  }
  $(`<button type="submit" role="button" id="submit" class="btn submit">Submit</button>`).appendTo(quizOptions);
  return myForm;
}

function handleSubmit() {
  $('.js-question-page').on('submit', function (event) {
    event.preventDefault();
    let userSelected = $("input:checked").parent().attr('id');
    let correctAnswer = STORE[questionIndex].correctAnswer;
    const hasGuessedCorrectly = userSelected === correctAnswer;
    handleAnswer(hasGuessedCorrectly);
  });
}

function handleAnswer(correctAnswer) {
  $('.js-question-page').hide();
  $('.js-answer-page').show();
  if (correctAnswer === true) {
    updateScore();
  }
  $('.js-answer-page').html(
    `<div class="group item-answerpage">
    <h3 class="h3-answer">${correctAnswer === true ? "Correct!" : "Sorry!"}</h3>
    <p class="p-right-25 p-left-25 text-center">${STORE[questionIndex].answerMessage}</p>
    <img class="img-class" src="${STORE[questionIndex].image}" alt="${STORE[questionIndex].imageAlt}">
    <button type="button" class="btn next" id="next">Next</button>
    </div>`);
  handleNextQuestion();
}

function handleNextQuestion() {
  $('#next').on('click', function (event) {
    console.log("Next button pressed");
    handleCreateQuestion();
  })
}

function handleCreateQuestion() {
  if (questionNumber < STORE.length) {
    updateQuestionNumber();
    $('.js-answer-page').hide();
    $('.js-question-page form').replaceWith(render());
  } else {
    $('.js-question-page form').replaceWith(handleResults());
  }
}

function handleResults() {
  $('.js-quiz-scores').hide();
  $('.js-answer-page').hide();
  $('.js-results-page').show();
  if (userScore > 9) {
    $('.js-results-page').html(
    `<h3 class="h3-score">You scored ${userScore}/10!</h3>
    <img class="img" src="images/sad-little-life.jpg" alt="A disgruntled Come Dine With Me contestant">
    <p>"I hope it makes you very happy.<br>
    Dear lord. What a sad little life, Jane."<br>
    - Peter Marsh, 'Come Dine With Me.'</p>
    <button type="button" class="btn restart" id="restart">Try again!</button>`);
  }
   if (userScore <= 9 && userScore >= 7) {
    $('.js-results-page').html(
    `<h3 class="h3-score">You scored ${userScore}/10!</h3>
    <img class="img" src="images/wizard.jpg" alt="A man interviewed for BBC news introduced as a wizard">
    <p>Great job, you TV wizard.</p>
    <button type="button" role="button" class="btn restart" id="restart">Try again!</button>`);
  }
   if (userScore <= 6 && userScore >= 3) {
    $('.js-results-page').html(
    `<h3 class="h3-score">You scored ${userScore}/10!</h3>
    <img class="img" src="images/profit-5p.png" alt="Bargin Hunt contestants celebrate their 5 pence profit">
    <p>You probably have a life outside TV! Good for you.</p>
    <button type="button" role="button" class="btn restart" id="restart">Try again!</button>`);
  }
    if (userScore <= 2) {
    $('.js-results-page').html(
    `<h3 class="h3-score">You scored ${userScore}/10!</h3>
    <img class="img" src="images/a-mess.png" alt="Unappetizing dish from Come Dine With Me contestant titled 'A Mess'">
    <p>You really need to watch more TV.</p>
    <button type="button" role="button" class="btn restart" id="restart">Try again!</button>`);
    }
  handleRestart();
  console.log("handleResults");
};

function handleRestart() {
  $('#restart').on('click', function (event) {
    resetQuestions();
    $('.js-homepage').hide();
    $('.js-answer-page').hide();
    $('.js-results-page').hide();
    $('.js-quiz-scores').show();
    $('.js-question-page').prepend(render());;
    $('section').removeClass("hidden");
  });
}

function resetQuestions() {
    questionIndex = 0;
    questionNumber = 1;
    userScore = 0;
    $('.js-current-score').text(userScore);
    $('.js-question-number').text(questionNumber);
}

function handleQuiz() {
  handleStart();
  render();
  handleSubmit();
  handleRestart();
};

$(handleQuiz);
