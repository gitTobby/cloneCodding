import React from "react";
// import { Fragment } from "react";


const Events = () => {
    const handleClick = e => {
        // document.querySelector('root').addEventListener('click', function() {
        //     alert('root')
        // });
        // document.querySelector('parent').addEventListener('click', function() {
        //     alert('parent')
        // });
        // document.querySelector('child').addEventListener('click', function() {
        //     alert('child')
        // });
        alert('123141');
    }

    return (
        <div className="evt">
            <div className="sec_box">
                <h2 className="title">Capturing</h2>
                <div className="con_box">
                    {/* 최상단 */}
                    <div className="ev-root">
                        <div className="ev-parent">
                            <div className="ev-child">
                                <button type="button" className="btn_target" onClick={() => handleClick()}>Target</button>
                                {/* Target */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec_box">
                <h2 className="title">Bubbling</h2>
                <div className="con_box">
                    {/* 최상단 */}
                    <div className="ev-root">
                        <div className="ev-parent">
                            <div className="ev-child">
                                {/* <button type="button" className="btn_target" onclick="">Target</button> */}
                                {/* Target */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;