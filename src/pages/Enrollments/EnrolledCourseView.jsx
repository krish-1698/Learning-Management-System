import { Box } from "@mui/material";
import React from "react";
import EnrollmentsCourseCard from "../../components/CourseCard/EnrollmentsCourseCard";
import web_app_dev_img from '../../images/CourseCardImg/web-application-development.jpg';


function EnrolledCourseView({setEnrollPageNumber, setCourseData}) {
  return (
    <>
      {[
        {
          title: "title 1",
          image: web_app_dev_img,
          description:
            "Project management (PM) is increasingly important in today’s world. This course covers the fundamental concepts and applied techniques for the cost-effective management of projects. The content deals with planning, scheduling, organizing, and controlling projects. Project management principles and methodology are provided with a special focus on planning, controlling, and managing projects to successful completion.The topics are divided into two categories: the behavioural aspects of a project and the technical components that make up the project.Behavioural issues include management and leadership, cultural differences, organizational structures, and conflict and negotiation.The technical issues include the relation between the performing organization and the project; determining strategy and project selection; developing the project plan; estimating costs, schedules, and the critical path; methods for determining project status; and risks, quality, and procurement.",
          marks: 80,
        },
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
        <EnrollmentsCourseCard data={item} setEnrollPageNumber={setEnrollPageNumber} setCourseData={setCourseData}/>
      ))}
    </>
  );
}

export default EnrolledCourseView;
