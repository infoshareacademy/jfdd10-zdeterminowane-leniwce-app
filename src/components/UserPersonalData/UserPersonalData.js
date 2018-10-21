import React, { Component } from "react";
import "./UserPersonalData.css";
import { Paper, Avatar, Typography } from "@material-ui/core";

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
      <div>
        <div className="UserPersonalData-main-profil">
          <Avatar src={this.props.user.avatar} style={{ width: 120, height: 120 }}></Avatar>

          <div className="UserPersonalData-personal-data">
            <Paper className="UserPersonalData-name">
              <Typography variant='display1'>
                name: {this.props.user.first_name}
              </Typography>
            </Paper>
            <Paper className="UserPersonalData-surname">
              <Typography variant='display1'>
                surname: {this.props.user.last_name}
              </Typography>
            </Paper>
            <Paper className="UserPersonalData-surname">
              <Typography variant='display1'>
                email:  {this.props.user.email}
              </Typography >
            </Paper>
          </div>
        </div>
        <div className="UserPersonalData-description">
          <Typography align='center' variant='display1'>
            About me:
          </Typography>

          <Typography variant='h5'>
          {this.props.user.description}
          </Typography>

        </div>
      </div>
    );
  }
}

export default UserPersonalData;
