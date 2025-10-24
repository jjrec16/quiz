import { useState } from 'react'
import './App.css'
import QuestionPanel from './components/QuestionPanel';
import questions from './components/Questions';
import InfoPanel from './components/InfoPanel';
import EndScreen from './components/EndScreen';


function App() {

  const [points, setPoints] = useState(0)
  const [qIndex, setQuestionIndex] = useState(-1);
  const [gameEnded, setGameEnded] = useState(false);

  const questionNumber = 3;
  let usedQuestions = [];
  usedQuestions.push()

  if(qIndex == -1){
    nextQuestion();
  }

  function addPoint() {
    setPoints(points + 1);
  }

  function nextQuestion() {
    console.log(qIndex, questions.length)
    if(usedQuestions.length + 1 === questionNumber){
      setGameEnded(true);
      return;
    }
    let rand = randomNumber(0, questions.length - 1)
    setQuestionIndex((index) => (rand));
  }

  function randomNumber(min, max){
    return Math.floor(Math.random() * max + min)
  }

  // function test() {
  //   let tab2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //   for(let i=0; i<100; i++){
  //       tab2[Math.floor(Math.random() * 10 + 1)]++
  //   }
  //}

  return (
    <>
      {gameEnded ? (
        <EndScreen points={points} />
        ) : (
          <>
            <QuestionPanel 
              question={questions[qIndex].question} 
              answers={questions[qIndex].answers} 
              correctIndex={questions[qIndex].correctIndex} 
              addPoint={addPoint}
              onNextQuestion={nextQuestion}
            />
            <InfoPanel points={points} />
          </>
        )}
    </>
  )
}

export default App
