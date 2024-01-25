import { useRef } from 'react';

export default function Answers({ answer, selectedAnswer, answerState, onSelect }) {
  const shuffleAnswers = useRef();

  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answer];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <>
      <ul id="answers">
        {shuffleAnswers.current.map((answer) => {
          const isSelected = selectedAnswer === answer;
          let cssClasses = '';

          if (answerState === 'answered' && isSelected) {
            cssClasses = 'selected';
          }

          if ((answerState === 'correct' || answerState === 'incorrect') && isSelected) {
            cssClasses = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button onClick={() => onSelect(answer)} className={cssClasses} disabled={answerState !== ''}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
