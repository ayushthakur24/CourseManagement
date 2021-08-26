import React, { useEffect, useState } from "react"
import Course from "./Course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
    useEffect (() => {
        document.title = "All Course || Learn Code with Ayush";
    },[]);

    //function to call server:
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                console.log(response);
                toast.warning("courses have been loaded",{
                    position: "bottom-left",
                });
                setCourses(response.data);
            },
            (error) => {
                //error message
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const [courses,setCourses] = useState([]);
    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };




    //const[courses, setCourses] = useState([]);
    return (
        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows :-</p>
            {
                courses.length>0 ? courses.map((item) =>(<Course key = {item.id} course = {item} update = {updateCourses} />)) : "No courses"
            }
        </div>
    );
};

export default Allcourse;