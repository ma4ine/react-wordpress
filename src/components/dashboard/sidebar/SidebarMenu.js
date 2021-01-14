// import React, { useState } from 'react';
import React from 'react';
// import { getUserName } from "../../functions";
import NavLink from "../../NavLink";

const SidebarMenu = ( props ) => {

  // const [ subMenuActive, setSubMenuActive ] = useState( false );
  // const userName = ( getUserName() ) ? getUserName() : '';

  return (
    <nav id="sidebar" className={ props.active ? 'sidebar active' : 'sidebar' }>
      <ul className="list-unstyled components">
        {/* <li className="active"> */}
          {/* <NavLink
            to="/#" 
            data-toggle="collapse" 
            aria-expanded={ subMenuActive } 
            className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` } 
            onClick={ () => setSubMenuActive( ! subMenuActive ) }
          >
            Posts
          </NavLink> */}
          {/* <ul className={ `collapse list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu"> */}
            <li>
              <NavLink to="/">All Posts</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/create-post">Add New</NavLink>
            </li>
            <li><a className="nav-link sidebar-link" href="/#">Pages</a></li>
            <li><a className="nav-link sidebar-link" href="/#">Media</a></li>
            <li><a className="nav-link sidebar-link" href="/#">Users</a></li>
          {/* </ul> */}
        {/* </li> */}
      </ul>
    </nav>
  )
}

export default SidebarMenu
