import React from 'react';
import Navbar from "../Navbar";

const Content = ( props ) => {
  return(
    <div id="content" className={ props.active ? 'content active' : 'content' }>
      {/* Top Navbar */}
      <Navbar 
        handleSidebarToggleClick={ props.handleSidebarToggleClick } 
        active={ props.active } 
      />
      {/* Main Content */}
      <div className="main-content">
        { props.children }
      </div>
    </div>
  )
};

export default Content;