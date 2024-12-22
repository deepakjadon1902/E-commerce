// import './NewsLetter.css';

// const NewsLetter = () => {
//   return (
//     <div className="newsletter">
//       <h1>Get Exclusive Offers On Your Email</h1>
//       <p>Subscribe to our newsletter and stay updated</p>
//       <div>
//         <input type="email" placeholder="Enter Your Email" />
//         <button>Subscribe</button>
//       </div>
//     </div>
//   );
// };

// export default NewsLetter;
import { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate an API call or action
    setMessage(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p className="newsletter-message">{message}</p>}
    </div>
  );
};

export default NewsLetter;
