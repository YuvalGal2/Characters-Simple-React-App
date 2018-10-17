import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Character from "./character/character.jsx";

export default class Characters extends React.Component {
  updateState() {
    this.setState({});
  }
  render() {
    // console.log(this.props.characterArray);
    return (
      <div className="row justify-content-center">
        {this.props.characterArray.map((character, index) => (
          <Character key={index} characterDetails={character} />
        ))}
      </div>
    );
  }
}
