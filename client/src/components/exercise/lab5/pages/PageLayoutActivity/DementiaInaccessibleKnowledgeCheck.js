/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { Component } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import { DementiaInaccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";
class DementiaInaccessibleKnowledgeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      componentName: "DementiaInaccessibleKnowledgeCheck",
    };
  }

  render() {
    const { actions } = this.props;
    return (
      <div>
        <KnowledgeTest
          handler={this.handler}
          question={KnowledgeCheck}
          link={"/Lab5/Exercise/PageLayoutGuidance"}
        />
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default DementiaInaccessibleKnowledgeCheck;
