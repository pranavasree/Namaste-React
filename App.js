import React from "react";
import ReactDOM from "react-dom/client";
//React Element ==> Object ==> after renderimg then HTML Element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX convention where we merge JS and HTML
//JSX is HTML-like or XML-like Syntax
//JSX (transpiled before it reaches the JS) - PARCEL - Babel.
// const jsxHeading = <h1 className="head">Namaste React Using JSX</h1>;
// root.render(jsxHeading);
//React Component - Class based components -- Old way
//and Functional Based components -- New Way
//Functional Component is a java script function which returns a piece of JSX
const title = <h1 className="head">Namste React</h1>;
//Component composition - Nested components (component inside component)
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);
//Rendering component syntax root.render(<HeadingComponent/>)
root.render(<HeadingComponent />);
