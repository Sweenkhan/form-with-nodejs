import axios from 'axios'
import React from 'react'

function Quiz() {

//  const [questions, setQuestions] = useState([]) 
//  const currentQuestion = 0;

//  let right = 0;
//  let wrong = 0;

                     //   DATA FROM SERVER
  function handleClick() {
    axios.get("http://localhost:8080/quiz")
    .then((result) => {
      console.log(result)
          // setQuestions(result.data)
    })
  }
     
  

  return (
    <div className='quiz'>
    <div>
    <h2>Welcome to quiz app:</h2>
    <button onClick={handleClick}>START</button>

    </div>
    <h2> </h2>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
     </div>
  )
}

export default Quiz