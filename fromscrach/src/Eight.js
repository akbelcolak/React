import React, { useState } from "react";

function Eight() {
  const sentence =
    "hello there, this is my sentence which will be in your app, yehuuu!";
  let splittedSentenceArray = sentence.split(" ");

  const [word, setWord] = useState([]);
  const [index, setIndex] = useState(1)

  
  //console.log(splittedSentenceArray)
  //let silicedArray = sentence.split(0,index)
  //console.log(silicedArray)

  const manual = () => {
      splittedSentenceArray.map( (w, i) => {
          if(word[index] === word[i]) {
              word.push(w)
              setIndex(i + 1)
          }
      })
  }
  

  return (
    <div>
      <p> {word} </p>

      <button> Previous </button>

      <button
        onClick={() => {
          setWord(manual);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Eight;
