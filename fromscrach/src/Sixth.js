    import React, {useState} from 'react'
    
    export default function Sixth() {

        const [count , setCount] = useState(0)
    

        return (
            <div>
                <h1> {count }</h1>
                <button onMouseEnter={() => setCount(count+1)} > Hover over me </button>
                <br />
            </div>
        )
    }
    