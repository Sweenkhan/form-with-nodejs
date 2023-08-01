import axios from "axios";
import React, { useState } from "react";
import "./Quiz.css"

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [check, setCheck] = useState(false)
  
  const  [index, setIndex] = useState(0);
  let crntQues = questions[index]

  //  let right = 0;
  //  let wrong = 0;

  //   DATA FROM SERVER
  function handleClick(e) {
    e.preventDefault();
    axios.get("http://localhost:8080/quiz").then((result) => {
      setQuestions(result.data);
      setCheck(true)
      //  console.log(result.data)
    }); 
  } 



  function nextQuestion(e){
             e.preventDefault();  
  }

  const [timer, setTimer] = useState(20)
  let time = 1000; 


  function countTimer(time){
    setInterval((timer) => {
      setTimer(Number(timer - 1))
  
      if(timer === 0){
        setIndex(index + 1)
        setTimer(20)
      }
  
     }, time); 
  }
 
    
 

   

  return (
    <div className="quiz">
      <div className="welcomeCnt" style={{display: (check) ? "none" : "block"}}>
        <h2>Welcome to quiz app:</h2>
        <button onClick={handleClick}>START</button>
      </div>

        {crntQues && <div className="quesCnt">
        <h2>{crntQues.question}</h2>
         <p>{timer}</p>
        <div className="optionsDiv">   
        <div className="option"> 
        <input type="radio" name="opt" value={crntQues.options[0]} id="first"/>
        <label for="first">{crntQues.options[0]}</label>
        </div>

        <div className="option"> 
        <input type="radio" name="opt" value={crntQues.options[1]}  id="second"/>
        <label for="second">{crntQues.options[1]}</label>
        </div>

        <div className="option"> 
        <input type="radio" name="opt" value={crntQues.options[2]}  id="three" />
        <label for="three">{crntQues.options[2]}</label>
        </div>

        <div className="option"> 
        <input type="radio" name="opt" value={crntQues.options[3]}  />
        <label for="three">{crntQues.options[3]}</label>
        </div>
         

    </div>
    <button onClick={nextQuestion}>Next</button>
      </div>
    }

    </div>
  );
}

export default Quiz;
