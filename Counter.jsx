import {useState} from 'react';

// REACT WITH JSX ".jsx "
 export default function CounterJs(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1> Count : {count} </h1>
            <button>
                onClick = {() => setCount(count + 1)}
                Increment
            </button>      
        </div>
    );
 }

 // TYPESCRIPT WITH TSX ".tsx "