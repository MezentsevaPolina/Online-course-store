import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {MASTER_ROUTE} from "../utils/consts";
import Img1 from "../pages/example-certificate.jpg";
import Img2 from "../pages/avatartest.bmp";
import Img3 from "../pages/example-certificate.jpg";

const CreatingCourse = () => {
    const [materials, setMaterials] = useState([])
    const [skills, setSkills] = useState([])
    const addMaterials = () =>{
        setMaterials([...materials, {filename: '', title: '', description: '', number: Date.now()}])
    }
    const removeMaterial = (number) =>{
        setMaterials(materials.filter(i => i.number !== number))
    }
    const addSkills = () =>{
        setSkills([...skills, {description: '', number: Date.now()}])
    }
    const removeSkill = (number) =>{
        setSkills(skills.filter(i => i.number !== number))
    }
    return <>
        <NavLink to={MASTER_ROUTE} className="back">Назад</NavLink>
            <h1>Создайте свой курс!</h1>
        <div className="creating-panel">
            <label>Название:</label><input type="text"/> <br/>
            <label>Описание:</label><input type="text"/> <br/>
            <label>Выберите категорию (выпадающий список)</label><br/>
            <label>Опишите навыки, которые смогут приобрести ученики после прохождения курса:</label><br/>
            <button onClick={addSkills}>Добавить навык</button><br/>
            {skills.map(i =>
                <div key={i.number}>
                    <input type="text" placeholder="Введите текст"/><br/>
                    <button onClick={() => removeSkill(i.number)}>удалить</button>
                </div>)
            }
            <label>Добавьте фото, видео-материалы, файлы (БУДУТ СКРЫТЫ ДЛЯ ВСЕХ):</label><br/>
            <button onClick={addMaterials}>Добавить новый материал</button><br/>
            {materials.map(i =>
                <div key={i.number}>
                    <input type="text" placeholder="Введите название"/><br/>
                    <input type="text" placeholder="Введите описание"/><br/>
                    <input type="file"/>
                    <button onClick={() => removeMaterial(i.number)}>удалить</button>
                </div>)
            }
            <label>Длительность:</label><input type="text"/><br/>
            <label>Стоимость:</label><input type="text"/><br/>
            <label>Выберите изображение на фон карточки курса</label><br/>
            <img src={Img1} alt=""/><img src={Img2} alt=""/><img src={Img3} alt=""/> <br/>
            <button>Создать</button>
        </div>

    </>
};

export default CreatingCourse;