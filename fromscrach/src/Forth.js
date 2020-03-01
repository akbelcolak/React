import React, {useState} from "react"

function Forth (){
    
    const [date,setDate] = useState( )
    let today = new Date();
    const handleClick = () => {
        
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
        setDate( () => {
            return(time)
        })
    }

return(
    <div>
        <h1>{date}</h1>
        <button onClick={handleClick}>Refresh</button>
        <br />
    </div>
)
}

export default Forth