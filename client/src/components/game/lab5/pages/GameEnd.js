import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import {LAB_ID} from "../../../../constants/lab5";

class GameEnd extends Component {
  handleHome() {
    navigate("/Lab5/Game/GameStart");
  }

  componentDidMount(){
    UserLabService.complete_game(LAB_ID);
  }
  render() {
    // const { user, state, plays } = this.props;
    return (
      
      <Fragment>
        <div className="center-div">
          <div className="playthrough">
            <h4>
              Congratulations! You've finished the Cognitive Learning Module
            </h4>
            <div className="guidance">

            <div className="lowercontent">Here are some key takeaways</div>
            <ul>
              <li>
                Use proper headings/subheadings to reduce cognitive load
              </li>
              <li>
                Allow users to have enough time to read
              </li>
              <li>
                Provide clear descriptive feedback on forms
              </li>
            </ul>
          </div>
          </div>
          <button
              className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
              onClick = {this.handleHome}
              key="start"
          >
            Home
          </button>
        </div>
      </Fragment>
    );
  }
}

export default GameEnd;
