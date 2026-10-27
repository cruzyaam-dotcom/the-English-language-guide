import React from 'react';

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo-marca">
                <img src="logo.png" alt="Logo The English Language Guide" />
                <span>The English Language Guide</span>
            </div>
            <button className="menu-icon">☰</button>
        </header>
    );
}

export default Navbar;