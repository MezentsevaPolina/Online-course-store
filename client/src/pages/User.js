import React, {useContext} from 'react';
import Avatar from "./avatartest.bmp"
import './styles/user.css'
import '../components/styles/background.css'
import {NavLink} from "react-router-dom";
import {CERTIFICATE_ROUTE, FAVOURITES_ROUTE, MASTER_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";

const User = () => {
    const {user} = useContext(Context)
    function saveData() {
        alert("Поздравляем! Данные не сохранены!");
    }
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return <>
        <div className="title__div">
            <a className="user__title">Личный кабинет</a>
        </div>
        <div className="fio__div">
            <img className="avatar" src={Avatar}/><a>Имя Фамилия</a>
        </div>
        <div className="radius" style={{position: "fixed"}}></div>
        <div className="describe__data">
            <label>Фамилия</label><br/>
            <input className="the_input" type="text"/><br/>
            <label>Имя</label><br/>
            <input className="the_input" type="text"/><br/>
            <label>Дата рождения</label><br/>
            <input className="the_input" type="text"/><br/>
            <label>Телефон</label><br/>
            <input className="the_input" type="text"/><br/>
            <label>Город</label><br/>
            <input className="the_input" type="text"/><br/>
            <div>
                <input type="radio" name="rb" id="rb1" checked/> <label htmlFor="rb1">Женский</label>
            </div>

            <div>
                <input type="radio" name="rb" id="rb2"/> <label htmlFor="rb2">Мужской</label>
            </div>

            <button onClick={saveData} className="button__log">сохранить</button>
        </div>
        <div className="describe">
            <a className="contact_title">О себе</a><br/>
            <a className="contact_title2">Данные в Вашем профиле видны только Вам и мастеру.<br/>Вносите корректные данные, они будут отображаться в сертификате.</a>
        </div>
        <div className="menu">
            <p className="menu__btn"><NavLink to="/" >Текущие курсы</NavLink></p><br/>
            <p className="menu__btn"><NavLink to={FAVOURITES_ROUTE} >Избранные курсы</NavLink></p><br/>
            <p className="menu__btn"><NavLink to={CERTIFICATE_ROUTE} >Сертификаты</NavLink></p><br/>
            <p className="menu__btn"><NavLink to="/" >Все вебинары</NavLink></p><br/>
            <p className="menu__btn"><NavLink to="/" >Чек-листы</NavLink></p><br/>
            <p className="menu__btn"><NavLink to={MASTER_ROUTE}>Создать свой курс</NavLink></p><br/>
            <p className="menu__btn"><NavLink to={SHOP_ROUTE} onClick={() => logOut()}>Выйти</NavLink></p><br/>
        </div>
    </>
};

export default User;