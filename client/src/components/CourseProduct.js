import React, {useContext} from 'react';
import Image from "react-bootstrap/Image";
import {NavLink, useNavigate} from "react-router-dom";
import "./styles/cours-list.css"
import "./styles/product-card.css"
import {COURSE_ROUTE} from "../utils/consts";
import Star from "../accets/Star1.png";
import {observer} from "mobx-react-lite";

const CourseProduct = observer(({course}) => {
    const navigate = useNavigate()
    return (
        <div className="card">
            <div className="card__top">
                <a href="client/src/components#" className="card__image">
                    <Image src={process.env.REACT_APP_API_URL + course.img}
                    />
                </a>
                <div className="card__favor">
                    {course.rating}
                    <img className="star_img" src={Star}/>
                </div>

                <label onClick={() => navigate(COURSE_ROUTE + "/" + course.id)} className="card__label">{course.name}</label>
            </div>
            <div className="card__bottom">
                <div className="card__prices">
                    <label className="card__price--common">Длительность: </label><br/>
                    <label className="card__price--discount">{course.duration1}</label><br/>
                    <label className="card__price--common">Категория:</label><br/>
                    <label className="card__price--discount">{course.categoryId}</label>
                </div>
                <button className="card__add">В избранное</button>
            </div>
        </div>
    );
});

export default CourseProduct;