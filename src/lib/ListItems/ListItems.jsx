import React, { useEffect, useState } from "react";
import {
  Logout,
  Dashboard,
  LocalLibrary,
  BookmarkAdded,
  Grade,
} from "@mui/icons-material";
import NavBarItem from "../../components/NavBarItem/NavBarItem";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import web_app_dev_img from "../../images/CourseCardImg/web-application-development.jpg";
import axios from "axios";
import CourseContent from "../CourseContent/CourseContent";
import EnrollmentsCourseCard from "../../components/CourseCard/EnrollmentsCourseCard";

//////
function AllCoursesDataFetching() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/course/getAllCourses")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

//////

export const allCoursesListItems = (
  <React.Fragment>
    {
      // CoursesDataFetching()
      [
        {
          title: "title 1",
          image: web_app_dev_img,
        },
        {
          title: "title 2",
          image: web_app_dev_img,
        },
        {
          title: "title 3",
          image: web_app_dev_img,
        },
        {
          title: "title 4",
          image: web_app_dev_img,
        },
        {
          title: "title 5",
          image: web_app_dev_img,
        },
        {
          title: "title 6",
          image: web_app_dev_img,
        },
        {
          title: "title 7",
          image: web_app_dev_img,
        },
      ].map((item) => (
        <CourseCard title={item.title} img={item.image} data={item} />
      ))
    }
  </React.Fragment>
);

export const enrolledCoursesListItems = (
  <React.Fragment>
    {[
      {
        title: "title 1",
        image: web_app_dev_img,
        description:
          "Project management (PM) is increasingly important in today’s world. This course covers the fundamental concepts and applied techniques for the cost-effective management of projects. The content deals with planning, scheduling, organizing, and controlling projects. Project management principles and methodology are provided with a special focus on planning, controlling, and managing projects to successful completion.The topics are divided into two categories: the behavioural aspects of a project and the technical components that make up the project.Behavioural issues include management and leadership, cultural differences, organizational structures, and conflict and negotiation.The technical issues include the relation between the performing organization and the project; determining strategy and project selection; developing the project plan; estimating costs, schedules, and the critical path; methods for determining project status; and risks, quality, and procurement.",
        marks: 80,
      },
      {
        title: "title 3",
        image: web_app_dev_img,
      },
      {
        title: "title 5",
        image: web_app_dev_img,
      },
      {
        title: "title 7",
        image: web_app_dev_img,
      },
    ].map((item) => (
      <EnrollmentsCourseCard data={item} />
    ))}
  </React.Fragment>
);

export const studentListItems = (
  <React.Fragment>
    {[
      {
        name: "Dashboard",
        icon: <Dashboard />,
        link: "/",
      },

      {
        name: "Enrollments",
        icon: <BookmarkAdded />,
        link: "/enrollments",
      },
      {
        name: "Grades",
        icon: <Grade />,
        link: "/grades",
      },
    ].map((item) => (
      <Link to={item.link} style={{ textDecoration: "none", color: "black" }}>
        <NavBarItem title={item.name} icon={item.icon} />
      </Link>
    ))}
  </React.Fragment>
);

export const lecturerListItems = (
  <React.Fragment>
    {[
      {
        name: "Dashboard",
        icon: <Dashboard />,
        link: "/",
      },

      {
        name: "Enrollments",
        icon: <BookmarkAdded />,
        link: "/enrollments",
      }
    ].map((item) => (
      <Link to={item.link} style={{ textDecoration: "none", color: "black" }}>
        <NavBarItem title={item.name} icon={item.icon} />
      </Link>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {[
      {
        name: "Log out",
        icon: <Logout />,
      },
    ].map((item) => (
      <NavBarItem title={item.name} icon={item.icon} />
    ))}
  </React.Fragment>
);
