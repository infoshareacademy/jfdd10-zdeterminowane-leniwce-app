import React, { Component } from "react";
import "./UserPersonalData.css";
import { Typography, Grid } from "@material-ui/core";

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
      <Grid container justify='center' spacing={24}>

        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Typography variant='h3' >
            PROFILE
          </Typography>
        </Grid>

        <Grid item xs={11} sm={4} md={4} lg={4} xl={4} >
          <Typography paragraph align='center'>
            <img src={this.props.user.avatar} alt='user avatar' style={{ width: 120, height: 120 }} />
          </Typography>
        </Grid>

        <Grid item xs={11} sm={7} md={7} lg={7} xl={7}>
          <Typography variant='h4' >
            name: {this.props.user.first_name}
          </Typography>
          <Typography variant='h4'>
            surname: {this.props.user.last_name}
          </Typography>
          <Typography paragraph variant='h4'>
            email:  {this.props.user.email}
          </Typography >
        </Grid>

        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Typography align='center' variant='h4'>
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
