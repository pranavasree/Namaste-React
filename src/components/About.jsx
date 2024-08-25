// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namaste React Web series</h2>
//       <User name={"pranava"} />
//       <UserClass name={"pranava"} />
//     </div>
//   );
// };

import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Cons");
  }

  async componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Par ren");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Web series</h2>
        <UserClass name={"Pranava"} />
      </div>
    );
  }
}

export default About;
