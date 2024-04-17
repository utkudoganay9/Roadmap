import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { IoExit } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import "./css/Header.css"

const Header = () => {
    const [isBellDropdownOpen, setBellDropdownOpen] = useState(false);
    const [isExitDropdownOpen, setExitDropdownOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleBellClick = () => {
      setBellDropdownOpen(!isBellDropdownOpen);
    };
  
    const handleExitClick = () => {
      setExitDropdownOpen(!isExitDropdownOpen);
    };
  
    const handleBellMouseEnter = () => {
      setBellDropdownOpen(true);
    };
  
    const handleBellMouseLeave = () => {
      setBellDropdownOpen(false);
    };
  
    const handleExitMouseEnter = () => {
      setExitDropdownOpen(true);
    };
  
    const handleExitMouseLeave = () => {
      setExitDropdownOpen(false);
    };
  
    return (
      <div className="fixed top-0 right-0 p-4 flex gap-4">
        <div
          onClick={handleBellClick}
          onMouseEnter={handleBellMouseEnter}
          onMouseLeave={handleBellMouseLeave}
          className="header-icon bell-icon"
        >
          <FaBell />
        </div>
        <div
          onClick={handleExitClick}
          onMouseEnter={handleExitMouseEnter}
          onMouseLeave={handleExitMouseLeave}
          className="header-icon exit-icon"
        >
          <IoExit />
          {isExitDropdownOpen && (
            <span className="exit-text">Çıkış</span>
          )}
        </div>
  
        {isBellDropdownOpen && (
          <div className="absolute top-14 right-0 bg-white border rounded shadow p-4">
            
            <p>Bildiriminiz bulunmamaktadır.</p>
           
          </div>
        )}
  
      </div>
    );
  };
  
  export default Header;
