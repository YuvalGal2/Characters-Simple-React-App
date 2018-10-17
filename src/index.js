import React from "react";
import ReactDOM from "react-dom";
import CharacterAddingForm from "./characterAddingForm.jsx";
import Characters from "./characters/characters.jsx";
import "./styles.css";

class App extends React.Component {
  componentWillMount() {
    this.setState({
      characterArray: []
    });
  }
  updateList(charactersArray) {
    // in react there is no beutiful way to push to array in the setState method.
    // the problem, i need to pass the updates to the array inside the object statement

    // the soultion i found for that problem is to create a temp array outside of the
    // fucntion and then pushing to it, afterwards just the the setState property to
    // the new value inside the temp array.
    let tempArray = this.state.characterArray;
    tempArray.push(charactersArray);
    this.setState({
      characterArray: tempArray
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <CharacterAddingForm updateList={this.updateList.bind(this)} />
          <Characters characterArray={this.state.characterArray} />
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
