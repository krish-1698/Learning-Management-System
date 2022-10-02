import * as React from 'react';
import { Logout, Dashboard, LocalLibrary, BookmarkAdded, Grade } from "@mui/icons-material";
import NavBarItem from '../../components/NavBarItem/NavBarItem';
import { Link } from 'react-router-dom';
import CourseCard from '../../components/CourseCard/CourseCard';
import web_app_dev_img from '../../images/CourseCardImg/web-application-development.jpg';

export const allCoursesListItems = (
  <React.Fragment>
    {
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
        <CourseCard title={item.title} img={item.image} />
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
        <CourseCard title={item.title} img={item.image} />
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
        <Link to={item.link} style={{textDecoration: 'none', color: 'black'}}>
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
