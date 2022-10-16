import React, { useEffect, useState } from 'react'
import CourseDetails from '../../components/CourseDetails/CourseDetails'
import Sidebar from '../Sidebar/Sidebar'
import web_app_dev_img from '../../images/CourseCardImg/web-application-development.jpg';
import axios from 'axios';

const CourseContent = () => {

    const image = web_app_dev_img;
    let grade = "A+";
    let announcements = ["Please complete the topic on Risk Management by the 2nd of October.Good Luck", "Please complete the new section (project estimation and budgeting) by the given dates."]

    const [course, setCourse] = useState([

    ]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/course/getCourse/INTE")
            .then((res) => {
                setCourse(res.data);
                console.log(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <>

            <Sidebar title={"Course"} component={<CourseDetails title={course.title} img={image} description={course.description} announcements={announcements} />} />


        </>


    )
}

export default CourseContent