import React, {useState} from "react"

function First (){
    const [count,setCount] = useState(0)
    
    const handleClick = () => {
        setCount( () => {
            return(count + 1)
        })
    }

return(
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>click me!</button>
        <br />
    </div>
)
}

export default First