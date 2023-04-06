const parent = React.createElement(
    "div",
    {},
    [React.createElement(
      "h1",
      { id: "welcome", style: { color: "pink" } },
      "Hello World 1"
    ),
    React.createElement(
      "h1",
      { id: "welcome", style: { color: "pink" } },
      "Hello World 2"
    )]
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  