import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MASTER_ROUTE} from "../utils/consts";
import Img1 from "../accets/example1.jpg";
import Img2 from "../accets/example2.jpg";
import Img3 from "../accets/example3.jpg";
import {Context} from "../index";
import {createCourse, fetchCourses} from "../http/courseAPI";
import {observer} from "mobx-react-lite";
import {fetchCategories} from "../http/categoryAPI";

const CreatingCourse = observer(() => {

    const {course} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [duration, setDuration] = useState(0)
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState(null)
    const [materials, setMaterials] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() =>{
        fetchCategories().then(data => course.setCategories(data))

    }, [])

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
    const selectFile = e =>{
        setFile(e.target.files[0])
    }
    const changeMaterials = (key, value, number) =>{
        setMaterials(materials.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const changeSkills = (key, value, number) =>{
        setSkills(skills.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addCourse = ()=>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('duration1', `${duration}`)
        formData.append('img', file)
        formData.append('categoryId', course.selectedCategory.id)
        formData.append('materials', JSON.stringify(materials))
        formData.append('skills', JSON.stringify(skills))
        createCourse(formData).then(data => alert("Создано!"))
    }

    return <>
        <NavLink to={MASTER_ROUTE} className="back">Назад</NavLink>
            <h1 className="m_panel_title">Создайте свой курс!</h1>
        <div className="creating-panel">
            <label>Название:</label>
            <input type="text"
                value={name}
                   onChange={e => setName(e.target.value)}
            /> <br/>
            <label>Описание:</label>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
            /> <br/>
            <label>{"Выберите категорию:"}</label><br/>
            <div>
                {course.categories.map(category =>
                    <div style={{marginLeft: "50px"}}>
                        <input type="radio" name="rb" id={category.id}/>
                        <label
                            htmlFor={category.id}
                            onClick={() => course.setSelectedCategory(category)}
                            key={category.id}
                        >
                            {category.name}
                        </label>
                    </div>
                )}
            </div>
            <div className="line-div">
                <label>Опишите навыки, которые смогут приобрести ученики после прохождения курса:</label><br/>
                <button onClick={addSkills}>Добавить навык</button><br/>
                {skills.map(i =>
                    <div key={i.number}>
                        <input
                            value={i.description}
                            onChange={(e) => changeSkills('description', e.target.value, i.number)}
                            type="text" placeholder="Введите описание навыка"
                        />
                        <button onClick={() => removeSkill(i.number)}>удалить</button>
                    </div>)
                }
            </div>

            <label>Длительность:</label>
            <input
                value={duration}
                onChange={e => setDuration(Number(e.target.value))}
                type="text"/><br/>
            <label>Стоимость:</label>
            <input type="text"
                value={price}
                   onChange={e => setPrice(Number(e.target.value))}
        /><br/>
            <input
                onChange={selectFile}
                type="file"
            /> <br/>
            <label>Выберите изображение на фон карточки курса</label><br/>
            <div style={{marginLeft: "50px"}} className="images">
                <input type="radio" name="rb" id={Img1} /><label htmlFor={Img1}><img src={Img1} alt=""/></label>
                <input type="radio" name="rb" id={Img2}/><label htmlFor={Img2}><img src={Img2} alt=""/></label>
                <input type="radio" name="rb" id={Img3}/><label htmlFor={Img3}><img src={Img3} alt=""/></label> <br/>
            </div>
            <div className="line-div">
                <label>Добавьте фото, видео-материалы, файлы. Эти материалы будут доступны пользователям только после оплаты.</label><br/>
                <button onClick={addMaterials}>Добавить новый материал</button><br/>
                {materials.map(i =>
                    <div key={i.number}>
                        <input
                            value={i.title}
                            onChange={(e) => changeMaterials('title', e.target.value, i.number)}
                            type="text" placeholder="Введите название"
                        /><br/>
                        <input
                            value={i.description}
                            onChange={(e) => changeMaterials('description', e.target.value, i.number)}
                            type="text" placeholder="Введите описание"
                        /><br/>
                        <input
                            value={i.filename}
                            onChange={(e) => changeMaterials('filename', e.target.value, i.number)}
                            type="file"
                        /><br/>
                        <button onClick={() => removeMaterial(i.number)}>удалить</button>
                    </div>)
                }
            </div>

            <button style={{margin: "0 auto", display: "block"}} onClick={addCourse}>Создать</button>
        </div>

    </>
});
export default CreatingCourse;