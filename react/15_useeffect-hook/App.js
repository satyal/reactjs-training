import React, { useEffect } from "react";

const App = () => {
  const [text, setText] = React.useState("");

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Updating (NO deps)");
    // Always Updating event code goes here
  });

  useEffect(() => {
    // Mounting event code goes here
    // used for initialization
    console.log("Mounting (EMPTY ARRAY dep)");

    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      // Unmounting event code goes here
      // Used for cleanup

      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    console.log("Updating (dep on 'text')");
    // Updating event that runs when `text` changes

    document.title = text;
  }, [text]);

  useEffect(() => {
    console.log("Updating (dep on 'time')");
    // Updating event that runs when `time` changes
  }, [time]);

  useEffect(() => {
    console.log("Updating (dep on 'time & text')");
    // Updating event that runs when `time & text` changes
  }, [time, text]);

  const textChanged = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={textChanged} value={text} />

      <h2>{time}</h2>
    </div>
  );
};

export default App;

// Mounted
// Updated --> Can be multiple times
// Unmounted
