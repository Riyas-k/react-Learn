import React from "react";

export default class StateClass extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Add</button>
      </>
    );
  }
}
