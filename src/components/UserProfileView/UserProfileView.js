import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserEvents from "../UserEvents/UserEvents";
import { DataContextConsumer } from "../../contexts/DataContext";

class UserProfileView extends Component {
  render() {
    return (
      <DataContextConsumer>
        {({ getUser, events }) => {
             const userId = parseInt(this.props.match.params.userId)
             const user = getUser(userId)
 
          return(
<div className="UserProfileView-container">
            <div className="UserPersonalData-container">
              <UserPersonalData user={user}/>
            </div>
            <div className="UserEvents-container">
              <UserEvents events={events} />
            </div>
          </div>

          )
          
        }}
      </DataContextConsumer>
    );
  }
}

export default UserProfileView;
