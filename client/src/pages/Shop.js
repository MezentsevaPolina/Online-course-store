import React, {useContext, useEffect} from 'react';
import MainCaptions from "../components/MainCaptions";
import CourseList from "../components/CourseList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCourses} from "../http/courseAPI";
import {fetchCategories} from "../http/categoryAPI";

const Shop = observer(() => { //основная страница
    const {course} = useContext(Context)

    useEffect(() =>{
        fetchCategories().then(data => course.setCategories(data))
        fetchCourses().then(data => course.setCourses(data.rows))
    }, [])

    return (
        <div>
            <MainCaptions/>
            <CourseList/>
        </div>
    );
});

export default Shop;