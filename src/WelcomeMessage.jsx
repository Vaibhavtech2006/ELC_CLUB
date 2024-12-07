import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const greetings = [
    { language: 'Hindi', message: 'स्वागत है' },
    { language: 'English', message: 'Welcome' },
    { language: 'Urdu', message: 'خوش آمدید' },
    { language: 'Spanish', message: 'Bienvenido' },
    { language: 'French', message: 'Bienvenue' },
  ];

  const [greeting, setGreeting] = useState(greetings[0].message); // Start with the first greeting

  useEffect(() => {
    const interval = setInterval(() => {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].message;
      setGreeting(randomGreeting);
    }, 1000); // Change greeting every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <h1>
      <span className="hindi">{greeting}</span> <br />
      ELC ABESIT,
    </h1>
  );
};

export default WelcomeMessage;
