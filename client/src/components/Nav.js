import React from "react";
import {useDarkMode} from "../hooks/useDarkMode.js";

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1 className="nav-title">World Ranking of Men's Soccer Players</h1>
            <button onClick={toggleMode} className="btn"><span role="img" aria-label="dark mode / light mode moon emojis">🌝 🌚</span></button>
        </nav>
    );
};

export default Nav;