import React from "react";
import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "Python"
    },
    {
        id: 2,
        name: "C++"
    },
    {
        id: 3,
        name: "Flask"
    }
]

const CheckboxCourses = () => {
    const [checked, setChecked] = useState()
    const handleSubmit = () => {
        console.log({id: checked})
    }
    return (
        <div style = {{padding: 32}}>
            {courses.map(course => (
                <div key = {course.id}>
                <input 
                type = "checkbox" 
                checked = {checked === course.id}
                onChange={() => setChecked(course.id)}
                />
                {course.name}
                </div>
            ))}
             <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CheckboxCourses;