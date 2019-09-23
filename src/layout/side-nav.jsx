import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SideNav extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar py-3">
        <ul className="sidebar-menu list-unstyled">
          <li className="sidebar-list-item"><a href="#" className="sidebar-link text-muted"><i className="fas fa-home mr-3 text-gray"></i><span>Dashboard</span></a></li>

          <li className="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page1" aria-expanded="false" aria-controls="page1" className="sidebar-link text-muted"><i className="fas fa-th-large mr-3 text-gray"></i><span>Defect</span></a>
            <div id="page1" className="collapse">
              <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li className="sidebar-list-item">
                    {/* <span className="sidebar-link text-muted pl-lg-5">dashboard</span> */}
                    <Link to="/defectStatus" className="sidebar-link text-muted pl-lg-5">Defect Status</Link>
                    <Link to="/test" className="sidebar-link text-muted pl-lg-5">Test</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default SideNav;