import { useState } from "react";
import Header from "../header/Header";

const Demo = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubscribe, setIsSubscibe] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    
    console.log("Form Submitted!");

    const formData = {
      userName,
      userEmail,
      isSubscribe
    }
    console.log(formData);

    // Reset form
    setUserName('');
    setUserEmail('');
    setIsSubscibe(false);
  };

  return (
    <div>
      <Header>Form Submission</Header>

      <h2>Newsletter Subscription</h2>
      <hr />

      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="username">Your Name: </label>
          <input id="username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </p>
        <p>
          <label htmlFor="useremail">Your Email: </label>
          <input id="useremail" type="email" value={userEmail} onChange={e => setUserEmail(e.target.value) } />
        </p>
        <p>
          <input id="issubscribe" type="checkbox" checked={isSubscribe} onChange={e => setIsSubscibe(e.target.checked)} />
          <label htmlFor="issubscribe">Newsletter Subscription</label>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Demo;
