import React from 'react';
import SidebarMenu from "./../dashboard/sidebar/SidebarMenu";
import Content from "../content/Content";

export class DashboardLayout extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      active: false
    }
  }

  handleSidebarToggleClick = () => {
    this.setState( { active: ! this.state.active } )
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <SidebarMenu
            active={ this.state.active }
          />
          <Content
            handleSidebarToggleClick={ this.handleSidebarToggleClick } 
            active={ this.state.active }
          >
            { this.props.children }
          </Content>
        </div>
      </React.Fragment>
    )
  }
}

export default DashboardLayout
