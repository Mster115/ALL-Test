import React, {useEffect} from "react";
import UserLabService from "../../services/UserLabService";

const About = (props) => {
  const {user,labID} = props;
  console.log(user);
  useEffect(() => {
      return () => {
          if(user?.firstname !== null && user!==null){
            UserLabService.user_complete_about(user.userid,labID);
          }
          UserLabService.complete_about(labID);
      }
  }, [user,labID]);

  return (
      <div className="study">
        <p>
            In this lab, you will learn why it is important to create software
            that is accessible to users with hearing impairments.
            You will learn how organizations like the National Association of the Deaf (NAD)
            fought for easier access for hearing impaired individuals,
            increase your understanding through an interactive module about hearing impairments,
            view related media to reinforce the topic, and take a quiz to test your knowledge. Click "Next" to start!
        </p>
      </div>
  );
};

export default About;
