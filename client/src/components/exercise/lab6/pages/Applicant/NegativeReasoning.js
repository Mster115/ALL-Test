import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";

const NegativeReasoning = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Why you were not chosen:</h2>
            <div className="guidance margin-bottom-2">
            The reason you were not selected was because there were an overwhelming amount of applicant and an AI was used to help pare down the number of applications. 
            Under normal circumstances a human would have made the decisions.
            </div>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Continue
            </button>
      </div>
    );
}

export default NegativeReasoning;
