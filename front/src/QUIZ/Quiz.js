import axios from "axios";
import React, { useState } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  
  const  [index, setIndex] = useState(0);
  let crntQues = questions[index]

  //  let right = 0;
  //  let wrong = 0;

  //   DATA FROM SERVER
  function handleClick(e) {
    e.preventDefault();
    axios.get("http://localhost:8080/quiz").then((result) => {
      setQuestions(result.data);
      //  console.log(result.data)
    }); 
  } 



  function nextQuestion(e){
             e.preventDefault();  


             setIndex(index + 1)
  }
 

   

  return (
    <div className="quiz">
      <div className="welcomeCnt">
        <h2>Welcome to quiz app:</h2>
        <button onClick={handleClick}>START</button>
      </div>

     {crntQues && <div className="quesCnt">
        <h2>{crntQues.question}</h2>

        <input type="radio" name="opt" value={crntQues.options[0]} id="first"/>
        <label for="first">{crntQues.options[0]}</label>

        <input type="radio" name="opt" value={crntQues.options[1]}  id="second"/>
        <label for="second">{crntQues.options[1]}</label>

        <input type="radio" name="opt" value={crntQues.options[2]}  id="three" />
        <label for="three">{crntQues.options[2]}</label>


        <input type="radio" name="opt" value={crntQues.options[3]}  />
        <label for="three">{crntQues.options[3]}</label>

    <button onClick={nextQuestion}>Next</button>
      </div>
    }

    </div>
  );
}

export default Quiz;
