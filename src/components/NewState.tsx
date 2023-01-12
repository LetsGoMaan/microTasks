import {useState} from "react";


export function NewState () {

    let[a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }

    const Reset = () => {
        setA(0);
        console.log(a);
    }


    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Counter</button>
            <button onClick={Reset}>0</button>
        </>

    )
}