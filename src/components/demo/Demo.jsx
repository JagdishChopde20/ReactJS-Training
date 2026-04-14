import Header from "../header/Header";

const Demo = () => {

    // function greetUser() {
    //     return 'Hello, Jagdish!';
    // }

    const greetUser = (greetMsg, userName) => `${greetMsg}, ${userName}!`;

    return (
        <div>
            <Header>Arrow Functions</Header>

            <h1> { greetUser('Hey', 'Jagdish') } </h1>
        </div>
    );
}

export default Demo;