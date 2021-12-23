import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onTriger = () => {
    this.props.parentCallBack(this.props.text);
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        <button onClick={this.onTriger}>{text}</button>
      </div>
    );
  }
}

export default Buttons;
