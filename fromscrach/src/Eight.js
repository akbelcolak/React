import React, { useState } from "react";

function Eight() {
  const sentence =
    "hello there, this is my sentence which will be in your app, yehuuu!";
  let splittedSentenceArray = sentence.split(" ");

  const [word, setWord] = useState([]);

  

  return (
    <div>
      <p> </p>

      <button> Previous </button>

      <button> Next </button>
    </div>
  );
}

export default Eight;
