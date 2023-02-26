import e from "cors";
import { useState } from "react";

function Counter() {
    console.log('render counter')
    const [number, setNumber] = useState(0);
    //number is state and setNumber is the setter of number
    //to update number, call setNumber

    function handleClick(e) {
        e.stopPropagation();
        // setNumber(number+1);  updater style function to enable multiple increments fast
        setNumber(number => number + 1);
        console.log(number)
    }
    return (
        <>
            <h1 style={{ color: 'white' }}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter;