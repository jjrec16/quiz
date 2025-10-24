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
  const [usedQuestions, setUsedQuestions] = useState([]);

  const questionNumber = 3;

  if(qIndex == -1){
    nextQuestion();
  }

  function addPoint() {
    setPoints(points + 1);
  }

  function nextQuestion() {
    console.log(qIndex, questions.length)
    console.log(usedQuestions) 
    if(usedQuestions.length === questionNumber){
      setGameEnded(true);
      return;
    }
    let rand;
    do{
      rand = randomNumber(0, questions.length - 1)
    } // TU DOKONCZYC !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    setQuestionIndex(rand);
    setUsedQuestions((prev) => [...prev, rand])
  }

  // czy ona jest dobrze???
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
            qIndex>=0 ? (
              <>
                <QuestionPanel 
                question={questions[qIndex].question} 
                answers={questions[qIndex].answers} 
                correctIndex={questions[qIndex].correctIndex} 
                addPoint={addPoint}
                onNextQuestion={nextQuestion}
                />
                <InfoPanel points={points}/>
              </>
            ) : (
              <h1>Ładowanie ...</h1>
            )
        )}
    </>
  )
}

export default App
