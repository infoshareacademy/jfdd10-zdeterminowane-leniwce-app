import React, { Component } from "react";
import "./UserPersonalData.css";
import { Paper, Avatar, Typography, Grid } from "@material-ui/core";

class UserPersonalData extends Component {

  static defaultProps = {
    user: {
      avat: '',
      name: 'Jacek',
      surname: 'Noga',
      email: 'k@wp.pl',
      description: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy'
    }
  }

  render() {
    return (
      <Grid container justify='center'>

        <Grid item lg={4} md={4} sm={4} xs={12} >
          <Avatar src={this.props.user.avatar} style={{ width: 120, height: 120 }}></Avatar>


        </Grid>

        <Grid item lg={8} md={8} sm={8}>
          <Paper >
            <Typography variant='display1'>
              name: {this.props.user.first_name}
            </Typography>
          </Paper>
          <Paper >
            <Typography variant='display1'>
              surname: {this.props.user.last_name}
            </Typography>
          </Paper>
          <Paper >
            <Typography paragraph variant='display1'>
              email:  {this.props.user.email}
            </Typography >
          </Paper>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography align='center' variant='display1'>
            About me:
          </Typography>

          <Typography variant='h5'>
            {this.props.user.description}
          </Typography>

        </Grid>
      </Grid>
    );
  }
}

export default UserPersonalData;
