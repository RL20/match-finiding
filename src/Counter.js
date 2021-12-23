import React from "react";

class Coutter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>{count}</h1>
      </div>
    );
  }
}

export default Coutter;
