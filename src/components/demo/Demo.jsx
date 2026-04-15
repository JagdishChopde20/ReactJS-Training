import Header from "../header/Header";

const Demo = () => {
    const greetUser = (greetMsg, userName) => `${greetMsg}, ${userName}!`;

    const changeHandler = (event) => {
        console.log(event.target.value);
    }

    const clickHandler = (userName) => {
        alert('My name is ' + userName);
    }

    return (
        <div>
            <Header>Event Handling</Header>

            <h1> { greetUser('Hey', 'Jagdish') } </h1>

            <button onClick={() => { console.log('Button Clicked!'); }}>Click Me</button>

            <hr />

            <input type="text" onChange={changeHandler} />

            <hr />

            <button onClick={() => clickHandler('Sandeep')}>Who Am I</button>
        </div>
    );
}

export default Demo;