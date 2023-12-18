import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(["a", "b", "c", "d", "e"]);

  return (
    <div id="main">
      <ol>
        {data.map((item, index) => {
          return <li key={"relativeListItem" + index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
