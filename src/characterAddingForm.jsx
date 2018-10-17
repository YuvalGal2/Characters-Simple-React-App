import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

class CharacterAddingForm extends React.Component {
  componentWillMount() {
    this.setState({
      characterHealth: 0,
      characterName: "",
      characterSkill: ""
    });
  }

  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center">
          <form
            onSubmit={event => {
              event.preventDefault();
              this.props.updateList(this.state);
            }}
          >
            <div className="form-group mt-2">
              <label>Character Name: </label>
              <input
                type="text"
                value={this.setState.characterName}
                className="form-control"
                onChange={elementRef =>
                  this.setState({ characterName: elementRef.target.value })
                }
              />
            </div>
            <div className="form-group mt-2">
              <label>Character Health: {this.state.characterHealth} </label>
              <input
                type="range"
                onChange={elementRef =>
                  this.setState({ characterHealth: elementRef.target.value })
                }
                class="custom-range"
                id="customRange1"
              />
            </div>
            <div className="form-group mt-2">
              <label>Character Skill: </label>
              <input
                type="text"
                className="form-control"
                onChange={elementRef =>
                  this.setState({ characterSkill: elementRef.target.value })
                }
              />
            </div>
            <button className="btn btn-md pl-4 pr-4 btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CharacterAddingForm;
