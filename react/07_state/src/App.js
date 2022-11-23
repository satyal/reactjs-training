import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const textChangeHandler = (event) => {
    const value = event.target.value;

    setText(value);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={textChangeHandler} />
        {/* HTML way:  <input type="text" onchange="textChangeHandler()"/> */}
      </form>

      <h1>{text}</h1>
    </div>
  );
}

export default App;
