import React, {useState} from "react"

function Third (){
    const [count,setCount] = useState(0)
    
  
    let display = count
    if(count % 3 === 0 && count % 5 === 0 ) {
        display = "FizzBuzz"
    } else if (count % 5 === 0){
        display = "Buzz"
    } else if (count % 3 === 0) {
        display = "Fizz"
    }
    

return(
    <div>
        <p>
        {display}
        </p>
        <button onClick={() => setCount(count +1)}>click me!</button>
        <br />
    </div>
)
}

export default Third

// {(count % 3 === 0) ? <p>"Fizz"</p> : <p>count</p>}