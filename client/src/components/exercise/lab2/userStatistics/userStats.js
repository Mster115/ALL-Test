/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import "./userStats.css";

/*
Component for displaying user statistics on the user statistics page
*/
class UserStats extends Component {
  // Constructor for holding current state information
  constructor(props) {
    super(props);
    this.state = {
      totalUsers: 0,
      totalLogins: 0,
      totalExercisesPlayed: 0,
      scores: null,
      userScores: null,
      retrievedUsers: false,
      retrievedScores: false,
    };
  }

  // Handles a gaining of information for login data and total users
  setFirstData = (data) => {
    this.setState({
      totalUsers: `${data.totalUsers}`,
      totalLogins: `${data.totalLogins}`,
    });
  };

  // Handles a gaining of information for the total exercises played and scores
  setSecondData = (data) => {
    console.log(data);
    this.setState({
      totalExercisesPlayed: `${data.exercisesPlayed}`,
      scores: data.scores,
      userScores: data.usrScores,
    });
  };

  // Renderer for data display
  render() {
    if (this.props.background !== "white") {
      this.props.toWhiteBackground();
    }

    const {
      totalUsers,
      totalLogins,
      totalExercisesPlayed,
      scores,
      userScores,
    } = this.state;

    // Gets the data for the users in the system
    const getDataUsers = () => {
      fetch(process.env.API_URL + "/data_totals", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => this.setFirstData(data))
        .catch((err) => console.log(err));
      this.setState({ retrievedUsers: true });
    };

    // Ges the data for the scores in the system
    const getDataScores = () => {
      fetch(process.env.API_URL + "/data_scores", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          this.setSecondData(data);
        })
        .catch((err) => console.log(err));
      this.setState({ retrievedScores: true });
    };

    if (!this.state.retrievedUsers) {
      getDataUsers();
    }
    if (!this.state.retrievedScores) {
      getDataScores();
    }

    // Object for the pie chart containing a breakdown of users signed in
    // compared to total users in the system
    const usersPie = {
      labels: ["Number of Users Connected", "Number of Logins"],
      datasets: [
        {
          label: "Users connected compared to logged in",
          borderColor: "black",
          backgroundColor: ["red", "blue"],
          data: [totalUsers, totalLogins],
          borderWidth: "2",
        },
      ],
    };

    // Headers for the table
    const headers = [
      "Score",
      "CorrectOnClick",
      "IncorrectOnClick",
      "CorrectonNoClick",
      "IncorrectOnNoClick",
      "background",
      "CorrectCircle",
      "incorrectColorOne",
      "incorrectColorTwo",
      "Mode",
    ];

    // Generates the score breakdown table from previous exercises
    const scoreTable = () => {
      const scoreTable = [];
      scoreTable.push(
        <tr>
          <th colSpan="10" key="-21312312">
            Exercise Scores
          </th>
        </tr>
      );
      for (let i = -1; i < totalExercisesPlayed; i++) {
        const children = [];
        let data = null;
        if (i === -1) {
          data = headers;
        } else {
          data = scores[i];
        }
        for (const key in data) {
          if (key === "exercisestatsid" || key === "userid") {
            continue;
          } else {
            children.push(<td key={key}>{data[key]}</td>);
          }
        }
        scoreTable.push(<tr key={i}>{children}</tr>);
      }
      return scoreTable;
    };

    // Generates the user breakdown take with each user's individual exercises played
    const userTable = () => {
      const userTable = [];
      let userID = -50;
      console.log(userScores);
      userTable.push(
        <tr>
          <th colSpan="10" key="-3213">
            User Scores
          </th>
        </tr>
      );
      for (let i = -1; i < totalExercisesPlayed; i++) {
        const userChildren = [];
        let data = null;
        if (i === -1) {
          data = headers;
        } else {
          data = userScores[i];
          if (data.userid !== userID) {
            userID = data.userid;
            userTable.push(
              <tr>
                <td colSpan="10" key={-5000 - userID}>
                  User: {userID}
                </td>
              </tr>
            );
          }
        }
        for (const key in data) {
          if (key === "exercisestatsid" || key === "userid") {
            continue;
          } else {
            userChildren.push(<td key={key}>{data[key]}</td>);
          }
        }
        userTable.push(<tr key={i}>{userChildren}</tr>);
      }
      return userTable;
    };

    return (
      <div>
        <p className="mainTitle">User Statistics</p>
        <div>
          <p className="fourthTitle center">Number of Users</p>
          <div>
            <div className="sameLine">
              <p className="center">Number of Users Connected: {totalUsers}</p>
              <p className="center">Number of Logins: {totalLogins}</p>
            </div>
            <Pie data={usersPie} height={50} />
          </div>
        </div>
        <div>
          <p className="fourthTitle center">All Scores in System</p>
          <p className="center">
            Number of Exercises Completed: {totalExercisesPlayed}
          </p>
          <div className="center scoreTable">
            <table>
              <tbody>{scoreTable()}</tbody>
            </table>
          </div>
          <div className="center scoreTable">
            <table>
              <tbody>{userTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStats;
