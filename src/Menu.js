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
        {
            inx: '4',
            name: 'Lorder',
            text: 'Lorder',
        },
        {
            inx: '5',
            name: 'Movies',
            text: 'Movies',
        },
        {
            inx: '6',
            name: 'Events',
            text: 'React Event',
        },
    ];

    const [isActive, setActive] = useState('1');    // 1은 default

    const handleToggle = (a) => {
        console.log(a);
        setActive(a);
    };

    return (
        <ul>
            {
                menuList.map(
                    menuAttr => (
                        <li className={`${isActive === menuAttr.inx ? "selected" : ""}`}>
                            <Link to={menuAttr.name} onClick={() => handleToggle(menuAttr.inx)} >{menuAttr.text}</Link>
                        </li>
                    )
                    // function a(menuAttr) {
                    //     return (
                    //     <li className={`${isActive ? "selected" : ""}`}>
                    //         <Link to={menuAttr.name} onClick={handleToggle} >{menuAttr.text}</Link>
                    //     </li>)
                    // }
                )
            }
        </ul>
    );
}

export default Menu;

