import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { default as Quiz } from "../../../../quiz/App";
import PageServiceTimer from "../../../shared/PageServiceTimer";

class AlterationQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "AlterationQuiz" };
    }

    handleSubmit() {
        navigate("/Lab7/Exercise/AlterationQuizResults");
    }

    render() {
        const { state, actions } = this.props;
        return (
            <div className="center-div">

                <p className="playthrough__sentence">
                    Alteration Quiz
                </p>

                <p className="playthrough__sentence">
                    Original Utility Equation: File Sensitivity Level / Threat Level
                </p>
                
                <p className="playthrough__sentence">
                    How does the following utility equation impact the autonomous system compared to the original utility equation?
                </p>

                <Quiz path={`/AlterationQuiz`} user={state.main.user} />

            </div>
        )
    }
}

export default AlterationQuiz;