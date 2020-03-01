    import React, {useState} from 'react'
    
    function Eight({sentence="hello world heyoo"}) {
        const [items, setItems] = useState([hello])
        const [index,setIndex] = useState(0)
        const renderedItems = items.map((item, index) => <li key={index} > {item} </li> )
        console.log(items)
        
    


        return (
            <div>
                <p> {renderedItems} </p>
                <button onClick={ () => {
        if (index< sentence.length){
            items.push(sentence[index])
            setIndex(index+1)
            setItems(items)
        }} } > Previous </button>
                <button> Next </button>
            </div>
        )
    }
    
    export default Eight
    