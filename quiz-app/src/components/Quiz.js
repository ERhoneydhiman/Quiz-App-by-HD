import React, { useState } from 'react'
import { QuizData } from "../data/QuizData";

function Quiz() {

  const [result, setResult] = useState(false)
  const [clickedOption, setClickedOption] = useState(0)
  const [crntQue, setCrntQue]= useState(0)
  const [score, setScore] = useState(0)



  const next = () => {
    if (crntQue < QuizData.length-1) {
      resultScore()
      setCrntQue(crntQue+1)
    } else {
      setResult(true)
    }
  }

  const resultScore = ()=>{
    if (clickedOption === QuizData[crntQue].answer) {
      setScore(score+1)
    }
  }

  const tryAgain = () => {
    setResult(false)
    setCrntQue(0)
    setClickedOption(0)
    setScore(0)
  }


  return (
    <div className="main">

      {result ? (<>
        <div className="result">
          <p>YOUR SCORE:{score}</p>
          <p>TOTAL SCORE: {QuizData.length}</p>
        </div>
        <button onClick={tryAgain}>TRY AGAIN</button>

      </>

      ) : (
        <>
          <div className="que">
            <span>{crntQue+1}.  </span>
            <span>{QuizData[crntQue].question}</span>
            
          </div>
          <div className="ans">
            {
              QuizData[crntQue].options.map((option, i) => {
                return (
                  <button className={`option-btn ${clickedOption == i + 1 ? "checked" : null}`}
                    key={i}
                    onClick={() => setClickedOption(i+1)}
                  >
                    {option}
                  </button>
                )
              })
            }
          </div>
          <button onClick={next}>NEXT</button>

        </>
      )
      }

    </div>
  )
}

export default Quiz