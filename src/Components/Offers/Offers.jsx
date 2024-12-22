// // import './Offers.css';
// // import exclusive_image from '../../Assets/exclusive_image.png';

// // const Offers = () => {
// //   return (
// //     <div className="offers">
// //       <div className="offers-left">
// //         <h1>Exclusive</h1>
// //         <h1>Offers For You</h1>
// //         <p>ONLY ON BEST SELLERS PRODUCTS</p>
// //         <button>Check Now</button>
// //       </div>
// //       <div className="offers-right">
// //         <img src={exclusive_image} alt="" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Offers;


// import React, { useState, useEffect } from 'react';
// import './Offers.css';
// import exclusive_image from '../../Assets/exclusive_image.png';

// const Offers = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     // Set the date we're counting down to (7 days from now)
//     const countDownDate = new Date();
//     countDownDate.setDate(countDownDate.getDate() + 7);

//     // Update the countdown every 1 second
//     const timer = setInterval(() => {
//       // Get current date and time
//       const now = new Date().getTime();
      
//       // Find the distance between now and the countdown date
//       const distance = countDownDate.getTime() - now;
      
//       // Calculate days, hours, minutes, seconds
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//       // Update state
//       setTimeLeft({ days, hours, minutes, seconds });
      
//       // If countdown is finished, clear interval
//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="offers">
//       <div className="offers-left">
//         <h1>Exclusive</h1>
//         <h1>Offers For You</h1>
//         <p>ONLY ON BEST SELLERS PRODUCTS</p>
        
//         {/* Countdown Timer */}
//         <div className="offers-countdown">
//           <div className="countdown-item">
//             <span>{timeLeft.days}</span>
//             <p>Days</p>
//           </div>
//           <div className="countdown-item">
//             <span>{timeLeft.hours}</span>
//             <p>Hours</p>
//           </div>
//           <div className="countdown-item">
//             <span>{timeLeft.minutes}</span>
//             <p>Minutes</p>
//           </div>
//           <div className="countdown-item">
//             <span>{timeLeft.seconds}</span>
//             <p>Seconds</p>
//           </div>
//         </div>
        
//         {/* Button with hover effect */}
//         <button className="offers-button">
//           Check Now
//         </button>
//       </div>
//       <div className="offers-right">
//         <img src={exclusive_image} alt="Exclusive Offer" />
//       </div>
//     </div>
//   );
// };

// export default Offers;

import React, { useState, useEffect } from 'react';
import './Offers.css';
import exclusive_image from '../../Assets/exclusive_image.png';

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = () => {
    window.location.href = '/exclusive-offers'; // Redirect to offers page
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        
        <div className="offers-countdown">
          <div className="countdown-item">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
        
        <button className="offers-button" onClick={handleButtonClick}>
          Check Now
        </button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
