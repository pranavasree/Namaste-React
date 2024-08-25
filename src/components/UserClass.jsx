import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      //count1: 1,
      userInfo: {
        name: "Dummy",
        location: "Tpt",
      },
    };
    console.log("Child Constructor");
  }
  //componentDidMount used to make API calls in class based components
  async componentDidMount() {
    console.log("Child componentDidMount");

    const data = await fetch("https://api.github.com/users/pranavasree");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("child Component didUpdate");
  }

  componentWillUnmount() {
    console.log("Child ComponentWillUnmount");
  }
  render() {
    const { id, login } = this.state.userInfo;
    const { count, count1 } = this.state;

    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            //Never update state variable's directly
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count1: {count1}</h1>
        <h2>Name : {id}</h2>
        <h3>Loaction : {login}</h3>
        <h4>Contact : pranavareddy27@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
