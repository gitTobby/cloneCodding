import React from "react";
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <Link to="./Food">
                <button>Food I Like</button>
            </Link>
            <Link to="./Counter">
                <button>Counter</button>
            </Link>
        </div>
    );
}

export default Menu;