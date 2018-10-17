import React from "react";
import ReactDOM from "react-dom";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Character extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3 character-box m-1 mt-4 mb-4 ">
        <div className="character-health">
          Character Health:{this.props.characterDetails.characterHealth}
        </div>
        <div className="character-name">
          Character Name:{this.props.characterDetails.characterName}
        </div>
        <div className="character-skill">
          Character Skill:{this.props.characterDetails.characterSkill}
        </div>
      </div>
    );
  }
}
