import React from 'react';
import SidebarMenu from "./../dashboard/sidebar/SidebarMenu";
import Content from "../content/Content";

const DashboardLayout = () => {

  return (
    <React.Fragment>
      <div className="wrapper">
        <SidebarMenu/>
        <Content>
          { this.props.children }
        </Content>
      </div>
    </React.Fragment>
  )
};

export default DashboardLayout
