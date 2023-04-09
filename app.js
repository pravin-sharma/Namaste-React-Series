import React from "react";
import ReactDOM from "react-dom/client";

const ReactComponent = () => {
  return (
    <div className="">
      <h1>This is react functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);
