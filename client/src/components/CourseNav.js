import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const CourseNav = observer(() => {
    const {course} = useContext(Context)

    return (
        <div className="curs__navigation" id="navDiv">
            {course.categories.map(category =>
                <a key={category.id}>
                    {category.name}
                </a>
            )}
        </div>
    );
});

export default CourseNav;