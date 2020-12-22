import React, { Component } from "react";
import {logIn, logOut} from './actions'
import {connect} from 'react-redux'

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <p>
        Profile.
        <button onClick={this.unauthenticate}>Log out</button>
      </p>
    );
  }
}

export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);
