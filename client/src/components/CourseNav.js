import React from 'react';
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const CourseNav = () => {
    return (
        <div className="curs__navigation" id="navDiv">
            <NavLink to={SHOP_ROUTE} id="allCurs" >все курсы</NavLink>
            <NavLink to="/" id="popCurs" >лучшие</NavLink>
            <NavLink to="/" id="freeCurs" >бесплатно</NavLink>
        </div>
    );
};

export default CourseNav;