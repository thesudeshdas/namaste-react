const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "head",
  },
  "Hello world from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
