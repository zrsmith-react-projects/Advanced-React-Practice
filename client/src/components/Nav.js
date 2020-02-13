import React from "react";
import {useDarkMode} from "../hooks/useDarkMode.js";

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const lightMoon = <span role="img" aria-label="light mode moon emoji">🌝</span>;
    const darkMoon = <span role="img" aria-label="dark mode moon emoji">🌚</span>

    return (
        <nav className="navbar">
            <h1 className="nav-title">Men's Soccer Players - World Ranking</h1>
            <button onClick={toggleMode} className="btn">{ darkMode ? lightMoon : darkMoon }</button>
        </nav>
    );
};

export default Nav;