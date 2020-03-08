import React, { useState } from "react";

function Eight() {
  const sentence =
    "hello there, this is my sentence which will be in your app, yehuuu!";
  let splittedSentenceArray = sentence.split(" ");

  const [word, setWord] = useState(["hello"]);
  const [index, setIndex] = useState(1);
  console.log(word);

  return (
    <div>
      {word.map((i, e) => (
        <p key={e}> {i} </p>
      ))}

      <button
        onClick={() => {
          let newIndex = index-1 < 0 ? 0 : index-1
          setWord(splittedSentenceArray.slice(0, newIndex));
          setIndex(index - 1);
        }}
      >
        {" "}
        Previous{" "}
      </button>

      <button
        onClick={() => {
          let newIndex = index < splittedSentenceArray.length ? index+1 : index
          setWord(splittedSentenceArray.slice(0, newIndex));
          setIndex(index + 1);
        }}
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}

export default Eight;
//<button onClick = { ()=> setWord()} > Previous </button>
