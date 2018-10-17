import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from '../UserPersonalData/UserPersonalData'
import UserEvents from '../UserEvents/UserEvents'
import { DataContextConsumer } from '../../contexts/DataContext';


class UserProfileView extends Component {

  

  render() {
    return (
      <div className="UserProfileView-container">
      <div className="UserPersonalData-container">
        <UserPersonalData/>
      </div>
      <div className="UserEvents-container">


      <DataContextConsumer>
          {
            ({ events }) => (
              <UserEvents events={events} />
            )
          }
        </DataContextConsumer>
        </div>
      </div>
    );
  }
}

export default UserProfileView;