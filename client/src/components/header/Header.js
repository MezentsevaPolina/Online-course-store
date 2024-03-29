import React, {useContext} from 'react';
import {Context} from "../../index";
import "./header.css"
import {NavLink} from "react-router-dom";
import {CONTACT_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, USER_ROUTE} from "../../utils/consts"
import Mainlogo from "./logo.bmp";
import {observer} from "mobx-react-lite";


const Header = observer(() => {
    const {user} = useContext(Context)
    console.log(user.id)
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            let myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }
    return (
        <div className="header">
                <div className="header__preview">
                    <img className="header__logo" src={Mainlogo}/>
                    <NavLink to={SHOP_ROUTE} className="header__title">Lilac</NavLink>
                </div>
                <div className="header__navigation">
                    <div className="dropdown">
                        <button onClick={myFunction} className="dropbtn">Курсы</button>
                        <div className="dropdown-content" id="myDropdown">
                                <NavLink to={SHOP_ROUTE}>Все курсы</NavLink>
                                <NavLink to={SHOP_ROUTE}>Статьи (бета)</NavLink>
                        </div>
                    </div>
                    <NavLink to={CONTACT_ROUTE} className="butheader">Контакты</NavLink>
                    {user.isAuth ?
                        <NavLink to={USER_ROUTE + "/" + user.id} className="butheader">Личный кабинет</NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE} className="butheader">Войти</NavLink>
                    }
                </div>

        </div>
    );
});
export default Header;