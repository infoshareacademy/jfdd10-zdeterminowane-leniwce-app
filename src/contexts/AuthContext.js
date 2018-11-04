import React, { Component } from "react";
import firebase from "firebase";

const AuthContext = React.createContext();

export const AuthContextConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  state = {
    user: null,
    signOut: () => firebase.auth().signOut()
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export function withAuthContext(Component) {
  return function WrapperComponent(props) {
    return (
      <AuthContext.Consumer>
        {state => <Component {...props} authContext={state} />}
      </AuthContext.Consumer>
    );
  };
}

export default AuthProvider;
