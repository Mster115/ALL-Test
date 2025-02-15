/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import Form from "../../components/Form";
import { navigate } from "@reach/router";

class FormInaccessible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNext: false,
      componentName: "FormInaccessible",
    };
  }
  showNext = () => {
    this.setState({ showNext: true });
  };
  handleNav() {
    navigate("/Lab5/Exercise/FormGuidance");
  }
  render() {
    // eslint-disable-next-line react/prop-types
    const { actions } = this.props;
    return (
      <div>
        <div className="cognitive_instructions">Complete the form below</div>
        <Form url={"/FormGuidance"} showNext={this.showNext} />
        {this.state.showNext && (
          <div className="flex float-right">
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick={this.handleNav}
              key="next"
            >
              Next
            </button>
          </div>
        )}
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default FormInaccessible;
