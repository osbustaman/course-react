import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Dropdown, Button } from 'react-bootstrap';
import { Sidebar } from "./Sidebar";
import { FaCog, FaBars } from 'react-icons/fa';  // Icono para el botón de menú


import { useFechLogout } from '../admin/hooks/useFechLogout';



import '../../static/sidebar.css';
import '../../static/panelControl.css';

export const PanelControl = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);


  const handleLogout = () => {

    const { getFechLogout } = useFechLogout();

    getFechLogout();

    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    localStorage.removeItem('last_name');
    localStorage.removeItem('first_name');
    localStorage.removeItem('mail');

    window.location.href = '/login-admin';

  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <> 
      <div className="d-flex">
        <Sidebar isHidden={!isSidebarVisible} />
        <div className={`content flex-grow-1 ${isSidebarVisible ? 'content-expanded' : 'content-collapsed'}`}>
          <Navbar bg="light" className="navbar-top">
            <Button variant="link" onClick={toggleSidebar} className="me-2">
              <FaBars size={20} color="#73869C"/>
            </Button>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  <FaCog size={20} color="#73869C"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/panel-control/settings">Settings</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/panel-control/profile">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Navbar>
          <div className="p-3">
            <Outlet />
          </div>
        </div>
      </div>   
    </>
  );
};
