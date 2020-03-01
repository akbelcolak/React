        import React, {useState} from 'react'
        
        function Seventh() {

            const [tex, setTex] = useState("")

            return (
                <div>
                    <p>
                        {tex.toUpperCase()}
                    </p>
                    <button onClick={() => {setTex("yellow")}}> yellow </button>
                    <button onClick={() => {setTex("green")}}> green </button>
                    <button onClick={() => {setTex("blue")}}> blue </button>
                </div>
            )
        }
        
        export default Seventh
        