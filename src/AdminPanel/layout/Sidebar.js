import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaUserFriends, FaMoneyBillWave, FaHandHoldingUsd, FaLayerGroup, FaMoneyBill, FaDonate, FaImages, FaChartBar, FaIdCard, FaWhatsapp, FaHistory, FaSms, FaCog } from 'react-icons/fa';
import './style/Sidebar.css';
import logo from './assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    toggleSidebar();  // Close sidebar after navigation
  };

  useEffect(() => {
    // Close sidebar on page load if it's open
    if (isOpen) {
      toggleSidebar();
    }
  }, [location, isOpen, toggleSidebar]);

  return (
    <>      
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="sidebar-logo" />
          </div>
          
          <Nav className="flex-column">
            <NavItem to="/admin/dashboard" icon={FaHome} label="Dashboard" active={location.pathname === '/admin/dashboard'} onClick={handleLinkClick} />
            <NavItem to="/admin/kamati" icon={FaUsers} label="Kamati" active={location.pathname === '/admin/kamati'} onClick={handleLinkClick} />
            <NavItem to="/admin/wageni" icon={FaUserFriends} label="Wageni" active={location.pathname === '/admin/wageni'} onClick={handleLinkClick} />
            <NavItem to="/admin/payments" icon={FaMoneyBillWave} label="Payments" active={location.pathname === '/admin/payments'} onClick={handleLinkClick} />
            <NavItem to="/admin/waalikwa" icon={FaHandHoldingUsd} label="Waalikwa" active={location.pathname === '/admin/waalikwa'} onClick={handleLinkClick} />
            <NavItem to="/admin/groups" icon={FaLayerGroup} label="Groups" active={location.pathname === '/admin/groups'} onClick={handleLinkClick} />
            <NavItem to="/admin/bajeti" icon={FaMoneyBill} label="Bajeti" active={location.pathname === '/admin/bajeti'} onClick={handleLinkClick} />
            <NavItem to="/admin/michango" icon={FaDonate} label="Michango" active={location.pathname === '/admin/michango'} onClick={handleLinkClick} />
            <NavItem to="/admin/picha" icon={FaImages} label="Picha" active={location.pathname === '/admin/picha'} onClick={handleLinkClick} />
            <NavItem to="/admin/takwimu" icon={FaChartBar} label="Takwimu" active={location.pathname === '/admin/takwimu'} onClick={handleLinkClick} />
            <NavItem to="/admin/ecards" icon={FaIdCard} label="Generated Ecards" active={location.pathname === '/admin/ecards'} onClick={handleLinkClick} />
            <NavItem to="/admin/whatsapp-card" icon={FaWhatsapp} label="WhatsApp Card" active={location.pathname === '/admin/whatsapp-card'} onClick={handleLinkClick} />
            <NavItem to="/admin/payment-history" icon={FaHistory} label="Historia ya Malipo" active={location.pathname === '/admin/payment-history'} onClick={handleLinkClick} />
            <NavItem to="/admin/sms-history" icon={FaSms} label="Historia Ya SMS" active={location.pathname === '/admin/sms-history'} onClick={handleLinkClick} />
            <NavItem to="/admin/settings" icon={FaCog} label="Mipangilio" active={location.pathname === '/admin/settings'} onClick={handleLinkClick} />
          </Nav>
        </div>
        {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
      </div>
    </>
  );
};

const NavItem = ({ to, icon: Icon, label, active, onClick }) => (
  <Nav.Link
    as={Link}
    to={to}
    className={`nav-link-custom ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    <Icon className="d-block mx-auto mb-1" size={24} />
    {label}
  </Nav.Link>
);

export default Sidebar;
