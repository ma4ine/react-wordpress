import React, { Component } from 'react';

export class NavLink extends Component {
  
  render() {
    return (
      <a className="sidebar-link nav-link" href={ this.props.to }>{ this.props.children }</a>
    )
  }
}

export default NavLink
