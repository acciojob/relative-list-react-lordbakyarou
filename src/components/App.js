import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(["a", "b", "c", "d", "e"]);

  return (
    <div id="main">
      <ol id="relativeList">
        {data.map((item, index) => {
          return (
            <li
              id={"relativeListItem" + (index + 1)}
              key={"relativeListItem" + (index + 1)}
            >
              {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default App;
