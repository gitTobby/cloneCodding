import React, { useState } from "react";
import { Link } from "react-router-dom"

const Menu = () => {
    const menuList = [
        {
            inx: '1',
            name: 'Food',
            text: 'Food I Like',
        },
        {
            inx: '2',
            name: 'Counter',
            text: 'Counter',
        },
        {
            inx: '3',
            name: 'Lifecircle',
            text: 'Lifecircle',
        },
    ];

    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <ul>
            {
                menuList.map(menuAttr => (
                        <li className={`${isActive ? "selected" : ""}`}>
                            <Link to={menuAttr.name} onClick={handleToggle} >{menuAttr.text}</Link>
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default Menu;

