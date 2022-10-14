import React, { useEffect, useState } from 'react';
import { Logout, Dashboard, LocalLibrary, BookmarkAdded, Grade } from "@mui/icons-material";
import NavBarItem from '../../components/NavBarItem/NavBarItem';
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';
import web_app_dev_img from '../../images/CourseCardImg/web-application-development.jpg';
import axios from 'axios';
import CourseContent from '../CourseContent/CourseContent';
import EnrollmentsCourseCard from '../../components/CourseCard/EnrollmentsCourseCard';

//////
function AllCoursesDataFetching() {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/course/getAllCourses')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
}

//////


export const allCoursesListItems = (

  <React.Fragment>
    {
      // CoursesDataFetching()
      [
        {
          "title": "title 1",
          "image": web_app_dev_img
        },
        {
          "title": "title 2",
          "image": web_app_dev_img
        },
        {
          "title": "title 3",
          "image": web_app_dev_img
        },
        {
          "title": "title 4",
          "image": web_app_dev_img
        },
        {
          "title": "title 5",
          "image": web_app_dev_img
        },
        {
          "title": "title 6",
          "image": web_app_dev_img
        },
        {
          "title": "title 7",
          "image": web_app_dev_img
        }
      ].map((item) => (
        <Link to={"/CourseContent"}>
          <CourseCard title={item.title} img={item.image} />
        </Link>
      ))
    }
  </React.Fragment>
);


export const enrolledCoursesListItems = (
  <React.Fragment>
    {
      [
        {
          "title": "title 1",
          "image": web_app_dev_img
        },
        {
          "title": "title 3",
          "image": web_app_dev_img
        },
        {
          "title": "title 5",
          "image": web_app_dev_img
        },
        {
          "title": "title 7",
          "image": web_app_dev_img
        }
      ].map((item) => (
        <EnrollmentsCourseCard title={item.title} img={item.image} />
      ))

    }
  </React.Fragment>
);

export const studentListItems = (
  <React.Fragment>
    {
      [
        {
          "name": "Dashboard",
          "icon": <Dashboard />,
          "link": "/"
        },
        {
          "name": "All Courses",
          "icon": <LocalLibrary />,
          "link": "/courses"
        },
        {
          "name": "Enrollments",
          "icon": <BookmarkAdded />,
          "link": "/enrollments"
        },
        {
          "name": "Grades",
          "icon": <Grade />,
          "link": "/grades"
        }
      ].map((item) => (
        <Link to={item.link} style={{ textDecoration: 'none', color: 'black' }}>
          <NavBarItem title={item.name} icon={item.icon} />
        </Link>
      ))

    }
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {
      [
        {
          "name": "Log out",
          "icon": <Logout />
        }
      ].map((item) => (
        <NavBarItem title={item.name} icon={item.icon} />
      ))

    }
  </React.Fragment>
);
