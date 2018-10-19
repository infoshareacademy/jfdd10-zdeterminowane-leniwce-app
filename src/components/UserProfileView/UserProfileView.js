import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserEvents from "../UserEvents/UserEvents";
import { DataContextConsumer } from "../../contexts/DataContext";
import { Grid, Paper } from "@material-ui/core";

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
                <Paper>

                  <Paper>

                    <UserPersonalData user={user} />
                  </Paper>

                  {user &&
                    user.events &&
                    userEventsIds &&
                    <UserEvents events={userEventsIds.map(userEventId => events.find(event => event.id === userEventId))} />
                  }
                </Paper>
              </Grid>
            </Grid>


          )

        }}
      </DataContextConsumer>
    );
  }
}

export default UserProfileView;
