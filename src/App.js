import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// );
//Rendering component syntax root.render(<HeadingComponent/>)
// root.render(<HeadingComponent />);

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
