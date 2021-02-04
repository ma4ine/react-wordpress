import React from 'react';

const PageMenu = () => {
  return (
    <li className="active">
      <NavLink
        to="/#" 
        data-toggle="collapse" 
        aria-expanded={ subMenuActive } 
        className={ `dropdown-toggle ${ ! subMenuActive ? 'collapsed' : '' }` } 
        onClick={ () => setSubMenuActive( ! subMenuActive ) }
        >
        Posts
      </NavLink>
      <ul className={ `collapse list-unstyled ${ subMenuActive ? 'show' : '' }` } id="homeSubmenu">
        <li>
          <a href="/#">All Posts</a>
        </li>
        <li>
          <NavLink to="/dashboard/create-post">Add New</NavLink>
        </li>
      </ul>
    </li>
  )
}
  
export default PageMenu;