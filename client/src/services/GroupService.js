import API from './API';

export default {
    getGroupAssignedLabs: (groupID) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/labs`)
            .then((response) => response.json())
            .then((json) => json);
    },

    getGroupEnrolledStudents: (groupID) => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/group/${groupID}/enrolled`)
            .then((response) => response.json())
            .then((json) => json);
    },
    unenrollUserFromGroup: (userID, groupID) => {
        console.log("2");
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + `/group/unenroll`, {
            userID,
            groupID,
        });
    },
}