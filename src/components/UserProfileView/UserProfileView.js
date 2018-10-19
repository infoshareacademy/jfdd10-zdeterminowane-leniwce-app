import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserEvents from "../UserEvents/UserEvents";
import { DataContextConsumer } from "../../contexts/DataContext";
import { Grid } from "@material-ui/core";

class UserProfileView extends Component {
  render() {
    return (
      <DataContextConsumer>
        {({ getUser, events }) => {
          const userId = parseInt(this.props.match.params.userId)
          const user = getUser(userId)
          const userEventsIds = user && user.events

          if (user === undefined) {
            return (
              <div>
                Loading...
              </div>
            )
          }

          return (
            <Grid container justify='center'>
              <Grid item sm md={10} lg={8}>
                <div className="UserPersonalData-container">
                  <UserPersonalData user={user} />
                </div>

                <div className="UserEvents-container">
                  {user &&
                    user.events &&
                    userEventsIds &&
                    <UserEvents events={userEventsIds.map(userEventId => events.find(event => event.id === userEventId))} />
                  }
                </div>
              </Grid>
            </Grid>


          )

        }}
      </DataContextConsumer>
    );
  }
}

export default UserProfileView;
