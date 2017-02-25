import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends Component {
  renderButton() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    if (user) {
      return <div>Logout</div>
    } else {
      return (
        <div>You are not sign in</div>
      );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderButton()}
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);
