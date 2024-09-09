import React from 'react';
import './Header.css';
import {useState} from "react";

function Header() {
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return (
        <header>
            <h1>React App | <span>Time: {now.toLocaleTimeString()}</span></h1>
        </header>
    );
}

export default Header;