import React from 'react';
import Navbar from './Navbar';

export class Dashboard extends React.Component {
  render() {

    const userName = localStorage.getItem( 'userName' );
    // const userName = this.props.userName; // Also can take it from here

    return (
      <div>
        <Navbar/>
        <h2>Welcome, {userName}!</h2>
      </div>
    )
  }
}

export default Dashboard;
