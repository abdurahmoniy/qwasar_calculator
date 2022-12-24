import React from "react";
import Display from "../DIsplay/Display";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import calculate from "../../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  btnClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app"
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.btnClick} />
      </div>
    );
  }
}
