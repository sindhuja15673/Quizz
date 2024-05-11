
// import React from 'react';
// import './Question.css';
// function Question({ question, handleAnswer, onPrevious,onNext }) {
//   return (
//     <div>
//       <h3>{question.question}</h3>
//       <ul>
//         {question.options.map((option) => (
//           <div  key={option} onClick={() => handleAnswer(option)}>
//             <div className='option'>{option}</div> 
//           </div>
        
//         ))}
//       </ul>
//       <div>
//       <button onClick={onPrevious}>Previous</button>
//         <button onClick={onNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Question;





import React from 'react';
import './Question.css';

function Question({ question, handleAnswer, onPrevious, onNext, selectedOption }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option) => (
          // <div key={option} onClick={() => handleAnswer(option)}>
          //   <div className={`option ${selectedOption === option ? 'selected' : ''}`}>{option}</div>
          // </div>
          <div key={option} onClick={() => handleAnswer(option)}>
          <div className={`option ${selectedOption === option ? 'selected' : ''}`}>{option}</div>
        </div>
        
      ))}
      </ul>
      <div>
        <button className='button1' onClick={onPrevious}>Previous</button>
        <button className='button' onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Question;
