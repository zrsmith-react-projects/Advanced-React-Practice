import React from "react";

const Nav = () => {
    // const [darnkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        // setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1>World Ranking of Men's Soccer Players</h1>
            <div className="dark-mode__toggle">
                <div className="switch-modes">
                    <p>Dark Mode</p>
                </div>
                <button 
                    onClick={toggleMode}
                    // className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
};

export default Nav;