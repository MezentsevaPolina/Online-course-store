import React, {useContext} from 'react';
import ProductImage from "../components/styles/example.jpg";
import {NavLink} from "react-router-dom";
import "../components/styles/cours-list.css"
import "../components/styles/product-card.css"
import {COURSE_ROUTE} from "../utils/consts";
import Star from "../accets/Star1.png";
import {useNavigate} from 'react-router-dom'

const CourseProduct = ({course}) => {
    const navigate = useNavigate()
    return (
        <div className="card">
            <div className="card__top">
                <a href="#" className="card__image">
                    <img
                        src={ProductImage}
                    />
                </a>
                <div className="card__favor">
                    {course.rating}
                    <img className="star_img" src={Star}/>
                </div>

                <NavLink to={COURSE_ROUTE + "/" + course.id} className="card__label">{course.name}</NavLink>
            </div>
            <div className="card__bottom">
                <div className="card__prices">
                    <label className="card__price--common">Длительность: </label><br/>
                    <label className="card__price--discount">{course.time}</label><br/>
                    <label className="card__price--common">Категория:</label><br/>
                    <label className="card__price--discount">{course.category}</label>
                </div>
                <button className="card__add">В избранное</button>
            </div>
        </div>
    );
};

export default CourseProduct;