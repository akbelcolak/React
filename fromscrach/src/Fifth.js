import React, {useState} from "react"

function Fifth (){
    const [over, setOver ] = useState(false)
    
    
   let display 
   if (over === true){
       display = "in"
   } if (over === false){
       display = "out"
   }

return(
    <div>
        <h1>{display}</h1>
        <button onMouseEnter={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
        > Hover over me </button>
        <br />
    </div>
)
}

export default Fifth