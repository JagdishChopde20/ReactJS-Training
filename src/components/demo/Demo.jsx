import { useState } from "react";
import Header from "../header/Header";

const Demo = () => {
    // let userName = 'Jagdish';
    const [userName, setUserName] = useState('Jagdish');
    const [counter, setCounter] = useState(5);
    
    const clickHandler = () => {
        setUserName('Sandeep');
        console.log(userName);
    }
    
    return (
        <div>
            <Header>useState Hook</Header>

            <h1>Hi, { userName } </h1>
            <button onClick={clickHandler}>Change User Name</button>

            <hr />
            <h1>Counter: { counter } </h1>
            <button onClick={() => setCounter(preState => preState + 1 )}>Increment Counter</button>
        </div>
    );
}

export default Demo;