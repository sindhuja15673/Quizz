// // Quiz.js
// import React, { useState } from 'react';
// import Question from './Question';
// import Result from './Result';
// import './Quiz.css';

// const quizData = [
//   {
//     question: 'What is the capital of France?',
//     options: ['London', 'Paris', 'Berlin', 'Rome'],
//     correctAnswer: 'Paris',
//   },
//   {
//     question: 'What is 2 + 2?',
//     options: ['3', '4', '5', '6'],
//     correctAnswer: '4',
//   },
//   {
//     question: 'Who wrote "To Kill a Mockingbird"?',
//     options: ['Harper Lee', 'Stephen King', 'J.K. Rowling', 'Ernest Hemingway'],
//     correctAnswer: 'Harper Lee',
//   },
// ];

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);

//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

//   const handleAnswer = (selectedOption) => {
//     const currentQuestion = quizData[currentQuestionIndex];
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }
//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < quizData.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowResult(false);
//   };

//   return (
//     <div  className='quiz-container'>
//       {!quizStarted ? (
//         <button className='start-button' onClick={handleStartQuiz}>Start Quiz</button>
//       ): showResult ? (
//         <Result score={score} totalQuestions={quizData.length} restartQuiz={restartQuiz} />
//       ) : (
//         <Question
//           question={quizData[currentQuestionIndex]}
//           handleAnswer={handleAnswer}
//         />
        
//       )}
//     </div>
//   );
// }

// export default Quiz;

















// import React, { useState } from 'react';
// import Question from './Question';
// import Result from './Result';
// import './Quiz.css';

// const quizData = [
//   {
//     question: 'Inside which HTML element do we put the JavaScript?',
//     options: ['<javascript>', '<js>', '<script>', '<scripting>'],
//     correctAnswer: '<script>',
//   },
//   {
//     question: 'How do you write "Hello World" in an alert box?',
//     options: ['alertBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")', 'msgBox("Hello World")'],
//     correctAnswer: 'alert("Hello World")',
//   },
//   {
//     question: '      How to write an IF statement in JavaScript?',
//     options: ['if(i==5)', 'if i=5', 'if i==5 then', 'if i=5 then'],
//     correctAnswer: 'if(i==5)',
//   },
//   {
//     question: 'What is the correct way to write a JavaScript array?',
//     options: ['var colors = (1:"red",2:"green", 3:"blue")', 'var colors = ["red","green","blue"]', 'var colors = "red","green","blue"', 'var colors = 1= ("red"),2=("green"),3=("blue")'],
//     correctAnswer: 'var colors = ["red","green","blue"]',
//   },
//   {
//     question: 'How do you round the number 7.25, to the nearest integer?',
//     options: ['Math.rnd(7.25)', 'round(7.25)', 'rnd(7.25)', 'Math.round(7.25)'],
//     correctAnswer: 'Math.round(7.25)',
//   },
//   {
//     question: 'Which event occurs when the user clicks on an HTML element?',
//     options: ['onchange', 'onmouseclick', 'onclick', 'onmouseover'],
//     correctAnswer: 'onclick',
//   },
// ];

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

  
//   const handleAnswer = (selectedOption) => {
//     console.log('Selected option:', selectedOption);
//     setSelectedOption(selectedOption);
//   };

//   const handleNext = () => {
//     const currentQuestion = quizData[currentQuestionIndex];
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore(score + 1);
//     }
//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < quizData.length) {
//       setCurrentQuestionIndex(nextQuestionIndex);
//     } else {
//       setShowResult(true);
//     }
//     setSelectedOption(null);
//   };

//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//     setSelectedOption(null);
//   };

//   const restartQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowResult(false);
//   };

//   return (
//     <div className='quiz-container'>
//       {!quizStarted ? (
//         <>
//         <h3>Javascript</h3>
//         <button className='start-button' onClick={handleStartQuiz}>Start Quiz</button>
//         </>
//       ) : showResult ? (
//         <Result score={score} totalQuestions={quizData.length} restartQuiz={restartQuiz} />
//       ) : (
        
//         <Question
//           question={quizData[currentQuestionIndex]}
//           handleAnswer={handleAnswer}
//           onNext={handleNext}
//           onPrevious={handlePrevious}
//           selectedOption={selectedOption} // Make sure to pass the selectedOption prop
// />

//       )}
      
//     </div>
//   );
// }

// export default Quiz;










import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './Quiz.css';

const quizData = {
  JavaScript: [{
         question: 'Inside which HTML element do we put the JavaScript?',
         options: ['<javascript>', '<js>', '<script>', '<scripting>'],
         correctAnswer: '<script>',
       },
       {
         question: 'How do you write "Hello World" in an alert box?',
         options: ['alertBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")', 'msgBox("Hello World")'],
         correctAnswer: 'alert("Hello World")',
       },
       {
         question: '      How to write an IF statement in JavaScript?',
         options: ['if(i==5)', 'if i=5', 'if i==5 then', 'if i=5 then'],
         correctAnswer: 'if(i==5)',
       },
       {
         question: 'What is the correct way to write a JavaScript array?',
         options: ['var colors = (1:"red",2:"green", 3:"blue")', 'var colors = ["red","green","blue"]', 'var colors = "red","green","blue"', 'var colors = 1= ("red"),2=("green"),3=("blue")'],
         correctAnswer: 'var colors = ["red","green","blue"]',
       },
       {
         question: 'How do you round the number 7.25, to the nearest integer?',
         options: ['Math.rnd(7.25)', 'round(7.25)', 'rnd(7.25)', 'Math.round(7.25)'],
         correctAnswer: 'Math.round(7.25)',
       },
       {
         question: 'Which event occurs when the user clicks on an HTML element?',
         options: ['onchange', 'onmouseclick', 'onclick', 'onmouseover'],
         correctAnswer: 'onclick',
       },],
  HTML: [
    {
      question: 'Choose the correct HTML element for the largest heading:',
      options: ['<heading>', '<h6>', '<h1>', '<head>'],
      correctAnswer: '<h1>',
    },
    {
      question: 'Choose the correct HTML element to define important text',
      options: ['<b>', '<strong>', '<i>', '<important>'],
      correctAnswer: '<strong>',
    },
    {
      question: 'Which character is used to indicate an end tag?',
      options: ['<', '>', '*', '/'],
      correctAnswer: '/',
    },
    {
      question: 'Which of these elements are all <table> elements?',
      options: ['<table><head><tfoot>', '<table><tr><tt>', '<table><tr><td>', '<table><body><tr>'],
      correctAnswer: '<table><tr><td>',
    },
    {
      question: 'How can you make a numbered list?',
      options: ['<dl>', '<ul>', '<ol>', '<list>'],
      correctAnswer: '<ol>',
    },
    {
      question: 'What is the correct HTML for making a drop-down list?',
      options: ['<list>', '<input type ="list">', '<input type = "dropdown">', '<select>'],
      correctAnswer: '<input type = "dropdown">',
    },
  ],
  CSS: [
    {
      question: 'Which HTML attribute is used to define inline styles?',
      options: ['style', 'class', 'font', 'styles'],
      correctAnswer: 'style',
    },
    {
      question: 'Which is the correct CSS syntax?',
      options: ['body{color:black;}', 'body:color=black;', '{body:color=black;}', '{body;color:black;}'],
      correctAnswer: 'body{color:black;}',
    },
    {
      question: 'How do you insert a comment in a CSS file?',
      options: ['//this is a comment', '//this is a comment//', '/* this is a comment */', '`this is a comment'],
      correctAnswer: '/* this is a comment */',
    },
    {
      question: 'How do you select an element with id demo?',
      options: ['demo', '#demo', '.demo', '*demo'],
      correctAnswer: '#demo',
    },
    {
      question: 'How do you select elements with class name test?',
      options: ['test', '#test', '.test', '*test'],
      correctAnswer: '.test',
    },
    {
      question: 'What is the default value of the position property?',
      options: ['fixed', 'absolute', 'static', 'relative'],
      correctAnswer: 'static',
    },
  ],
};

function Quiz() {
  const [quizCategory, setQuizCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleStartQuiz = (category) => {
    setQuizCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleNext = () => {
    // Check if the option is selected before proceeding
    if (selectedOption !== null) {
      const currentQuestion = quizData[quizCategory][currentQuestionIndex];
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < quizData[quizCategory].length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResult(true);
      }
      setSelectedOption(null);
    } else {
      // Display an error message or handle the case where no option is selected
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setSelectedOption(null);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className='quiz-container'>
      {!quizCategory && (
        <>
          <h1 className='title'>Choose a Quiz Category</h1>
          {Object.keys(quizData).map((category) => (
            <button key={category} className='start-button' onClick={() => handleStartQuiz(category)}>
              {category}
            </button>
          ))}
        </>
      )}
      {quizCategory && (
        <>
          {showResult ? (
            <Result score={score} totalQuestions={quizData[quizCategory].length} restartQuiz={restartQuiz} />
          ) : (
            <Question
              question={quizData[quizCategory][currentQuestionIndex]}
              handleAnswer={handleAnswer}
              onNext={handleNext}
              onPrevious={handlePrevious}
              selectedOption={selectedOption}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
