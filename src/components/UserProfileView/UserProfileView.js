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
        {({ getUser }) => {
          const userId = this.props.match.params.userId
          const user = getUser(userId)
          const userEventsIds = user && user.events
          console.log(user)
         

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
                    
                    userEventsIds &&

                    <UserEvents events={user.events} />

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
