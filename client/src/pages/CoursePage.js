import React, {useEffect, useState} from 'react';
import './styles/coursePage.css'
import {SHOP_ROUTE} from "../utils/consts";
import './styles/certificate.css'
import {NavLink} from "react-router-dom";
import {useParams} from "react-router-dom";
import MasterEx from "./example-certificate.jpg"//для кнопки Назад
import '../components/styles/background.css'
import {fetchOneCourse} from "../http/courseAPI";

const CoursePage = () => {

    const [course, setCourse] = useState({skills: []})
    const {id} = useParams()

    useEffect(()=>{
        fetchOneCourse(id).then(data => setCourse(data))
    }, [])
    function FavouriteClick() {
        alert("Ура! Курс не был добавлен в избранное!")
    }
    function SendMessage() {
        alert("Ура! Сообщение не отправлено!")
    }
    return <>
        <div className="circle" style={{top: "-180px", left: "calc(50% - 25em)", position: "absolute"}}></div>
        <div className="radius" style={{top: "0"}}></div>
        <div className="circle" style={{top: "170%", left: "-10em", position: "absolute", width: "70em", height: "70em"}}></div>

        <div className="c_title"><NavLink to={SHOP_ROUTE} className="back">Назад</NavLink>{course.name}</div>
        <button className="bt_fav" onClick={FavouriteClick}>добавить в избранное</button>
        <div className="c_title2">{course.description}</div>

        <div className="crs_content_div_price">
            <label className="c_title">Стоимость курса</label>
            <div className="crs_price">
                <label className="crs_content_price" style={{color: "#36005b"}}>"цена в месяц"</label>
                <label className="crs_content_price" style={{color: "#de000d"}}>{course.price}</label>
            </div>
            <button className="bt_send">Записаться</button>
        </div>

        <div className="crs_content_div">
            <h1 style={{color: "rgb(58, 11, 84)"}}>Содержание курса</h1>
            <label className="crs_content_text">Видеоуроки: <label className="count">5</label></label>
            <label className="crs_content_text">Чек-листы*: <label className="count">10</label></label>
            <label className="crs_content_text">Мастер-классы: <label className="count">нет</label></label>
            <h1 style={{color: "rgb(58, 11, 84)"}}>Чему вы научитесь</h1>
            <ol role="list">
                {course.skills?.map(skills =>
                    <li key={skills.id}>{skills.description}</li>
                )}
            </ol>
        </div>
        <div className="crs_master_div">
            <h1 style={{color: "white"}}>Мастер:</h1>
            <img src={MasterEx} className="crs_img"/><label className="crs_content_text" style={{color: "white", marginLeft: "10px"}}>"Имя Фамилия мастера"</label>
            <h1 style={{color: "white"}}>Квалификация:</h1>
            <label className="crs_content_text" style={{color: "white", fontWeight: "bold"}}>"Квалификация мастера"</label>
            <h1 style={{color: "white"}}>Связаться со специалистом и получить бесплатную консультацию:</h1>
            <input className="the_input" type="text" placeholder="Имя"/> <br/>
            <input className="the_input" type="text" placeholder="Ваша Эл. почта"/> <br/>
            <textarea className="the_input" placeholder="Задайте вопрос" rows="5" cols="80" style={{width: "90%"}}>
            </textarea> <br/>
            <button className="bt_send" onClick={SendMessage}>Отправить</button>
        </div>

    </>
};

export default CoursePage;