import React from "react";
import Buttons from "./Buttons";
import "./App.css";
import Counter from "./Counter";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countUp: 0, countDown: 0, pic: 1 };
  }
  // const { data } = await unsplash.get("search/photos", {
  //   params: { query: this.props.topic, per_page: 100 },
  // });
  // this.setState({ images: data.results });

  getImageUrl = (index) => {
    return `https://picsum.photos/500/500?random=${index}`;
  };
  add = (btnCalled) => {
    this.setState((prevState) => {
      let res = btnCalled === "DisLike" ? { countUp: prevState.countUp + 1, pic: prevState.pic + 1 } : { countDown: prevState.countDown + 1, pic: prevState.pic + 1 };
      return res;
    });
  };
  sub = () => {
    this.setState((prevState) => {
      return { countUp: prevState.countUp - 1 };
    });
  };

  render() {
    const arr = new Array(10);
    arr.fill(10);
    console.log("arr", arr);
    return (
      <div className="App">
        <div className="counter">
          <FaRegThumbsDown className="down" />
          <Counter count={this.state.countUp} />
          <FaRegThumbsUp className="up" />
          <Counter count={this.state.countDown} />
        </div>
        <img src={this.getImageUrl(this.state.pic)} alt="" />
        <h2>{`Pictur num ${this.state.pic}`}</h2>
        <div className="btn">
          <Buttons text="DisLike" parentCallBack={this.add} />
          <Buttons text="like" parentCallBack={this.add} />
        </div>
      </div>
    );
  }
}

export default App;
