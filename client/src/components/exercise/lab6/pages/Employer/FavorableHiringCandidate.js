/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import LongHorizontalLine from "../../../../../common/HorizontalLine/LongHorizontalLine";
import Recomendation from "../../components/Recomendation";
import Decision from "../../components/Decision";

const FavorableHiringCandidate = (props) => {
  const { actions } = props;
  const [numInput, setNumInput] = useState(0);
  const incrementNumInput = () => {
    setNumInput(numInput + 1);
  };

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleStart = () => {
    navigate("/Lab6/Exercise/HiringCandidate");
  };

  return (
    <>
      <div className="center-shift">
        <h2 className="playthrough__title">Favorable Candidate:</h2>
        <div className="playthrough__sentence">
          Here’s what MegaCorp is looking for in new employees
        </div>

        <h2 className="Prime candidate ex.">
          This is an example of a prime candidate that should be hired!
        </h2>
        <div className="playthrough__sentence">
          Select the &quot;HIRE&quot; or &quot;REJECT&quot; toggle to make a decision and &quot;Continue&quot; the process.
        </div>

        <div className="gridApplicants tw-inline-flex">
          {/* Number determines spacing between two cols*/}
          <div className="tw-mr-4">
            {/* Number determines alignment of long horizontals*/}
            <ul className="gridApplicants-content tw-bg-bgwhite tw-mt-60">
              <li className="tw-p-4">Gender</li>
              <li className="tw-p-4">Experience</li>
              <li className="tw-p-4">Availability</li>
              <li className="tw-p-4">Pay</li>
            </ul>
            <div className="tw-p-4 tw-font-bold">
              {`${numInput} of 1 choices`}
            </div>
          </div>

          {/*Don't change className because styling changes*/}
          <ul>
            <li>
              <Recomendation aiRecommendation />
            </li>
            <ul htmlFor="applicant" className="candidate__col">
              <li className="candidate__image_container">
                <li
                  className="candidate__image"
                  alt="default_img"
                  style={{
                    backgroundImage:
                      "url('https://login.vivaldi.net/profile/avatar/default-avatar.png",
                  }}
                />
              </li>
              <li className="tw-p-4">Unimportant</li>
              <LongHorizontalLine></LongHorizontalLine>
              <li className="tw-p-4">1-3 years</li>
              <LongHorizontalLine></LongHorizontalLine>
              <li className="tw-p-4">Full-Time</li>
              <LongHorizontalLine></LongHorizontalLine>
              <li className="tw-p-4">$25-32/hr</li>
            </ul>
            <li>
                <Decision
                  id={1}
                  primary="HIRE"
                  secondary="REJECT"
                  handleInput={()=>{}}
                  incrementInput={incrementNumInput}
                />
              </li>
          </ul>
        </div>
      </div>
      {numInput>0 && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleStart}
          key="start"
        >
          Continue
        </button>
      )}
      
    </>
  );
};

export default FavorableHiringCandidate;
