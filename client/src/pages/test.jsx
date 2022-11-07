import React from "react";

import App2 from "./test2.jsx";

export default function App1() {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="App">
      <h2>{selected}</h2>
        <App2 setSelected={setSelected} />
    </div>
  );
}
