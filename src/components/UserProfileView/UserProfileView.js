import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from "../UserPersonalData/UserPersonalData";
import UserEvents from "../UserEvents/UserEvents";
import { DataContextConsumer } from "../../contexts/DataContext";
import { Grid, Paper } from "@material-ui/core";
import BackButton from "../BackButton/BackButton";

class UserProfileView extends Component {
  render() {
    return (
      <DataContextConsumer>
        {({ getUser }) => {
          const userId = this.props.match.params.userId
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
            <Grid container justify='center' spacing={24}>
              <Grid item xs={12} sm={11} md={11} lg={11} xl={11}>
                <Paper>
                
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <UserPersonalData user={user} />
                  </Grid>

                  <Grid item container justify='center' xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>

                      <BackButton />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    {user &&

                      userEventsIds &&

                      <UserEvents events={user.events} />

                    }
                  </Grid>

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
