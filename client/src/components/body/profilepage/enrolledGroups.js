import React, { useEffect, useState }from "react";
import UserService from "../../../services/UserService";

const InstructorName = (props) => {
    const {instructorID} = props;
    const [ instructorName, setInstructorName] = useState();
    useEffect(() => {
        if (instructorID){
            async function fetchUser() {
                return UserService.getUser(instructorID);
            }
            fetchUser().then((data) => {
                setInstructorName(data.firstname+" "+data.lastinitial);
            });
        }
    });

    return instructorName===undefined ? "Retrieving Instructor Name...": instructorName;

}

const EnrolledGroups = (props) => {
    const {user} = props;
    const [ enrolledGroups, setEnrolledGroups] = useState([]);



    useEffect(() => {
        if (user) {
            async function fetchGroups() {
                return UserService.getUserEnrolledGroups(user.userid);
            }
            fetchGroups().then((data) => {
                setEnrolledGroups(data);
            });
        }
    }, [user]);

    console.log(enrolledGroups);
    return (
        <div className="enrolled-classes">
            {
                enrolledGroups.length === 0 ?
                    <p> You are currently not enrolled in any groups</p> :
                    <>
                        {enrolledGroups.map((group, index) => (
                            <ul>
                                {index > 0 ? <hr class="groups__horiz"/> : <></> }
                                <ul class="groups" key={index}>
                                    <ul class="groups__group">
                                    <li class="groups__instructorName">
                                        <InstructorName instructorID={group.instructorUserID}/>
                                    </li>
                                    <li class="groups__groupName">{group.groupName}</li>
                                    </ul>
                                    <ul class="groups__group">
                                        <li class="groups__date">Enrolled on {(group.enrolledDate).split("T")[0]}</li>
                                        <li><button class="groups__button button Button btn btn-second">Unenroll</button></li>
                                    </ul>
                                </ul>
                            </ul>
                        ))}
                    </>
            }
        </div>
    )
};

export default EnrolledGroups;