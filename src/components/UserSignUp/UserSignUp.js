import React, { Component } from "react";
import {Link} from "react-router-dom";

class UserSignUp extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" name="username"/>
            <input type="password" name="password"/>
            <button type="submit">Sign in</button>
        </form>
        {/* <Link />  */}
      </div>
    );
  }
}

export default UserSignUp;



