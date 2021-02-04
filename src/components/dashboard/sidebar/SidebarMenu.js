import React, { useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
// import { getUserName } from "../../functions";
import NavLink from "../../NavLink";

const SidebarMenu = ( props ) => {

  const [ store, setStore ] = useContext( AppContext );
  console.warn( 'store', store );

  const [ subMenuActive, setSubMenuActive ] = useState( false );
  // const userName = ( getUserName() ) ? getUserName() : '';

  return (
    <nav id="sidebar" className={ props.active ? 'sidebar active' : 'sidebar' }>
      <ul className="list-unstyled components">
        <li className="active">
          {/* <NavLink
            to="/#" 
            data-toggle="collapse" 
            aria-expanded={ subMenuActive } 
            className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` } 
            onClick={ () => setSubMenuActive( ! subMenuActive ) }
          >
            Posts
          </NavLink> */}
          <a
            href="/#" 
            data-toggle="collapse" 
            aria-expanded={ subMenuActive } 
            className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` } 
            onClick={ () => setSubMenuActive( ! subMenuActive ) }
          >Posts</a>
          {/* <ul className={ `collapse list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu"> */}
          <ul className={ `list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu">
            <li>
              <NavLink to="/">All Posts</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/create-post">Add New</NavLink>
            </li>
            <li><a className="nav-link sidebar-link" href="/#">Pages</a></li>
            <li><a className="nav-link sidebar-link" href="/#">Media</a></li>
            <li><a className="nav-link sidebar-link" href="/#">Users</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarMenu
