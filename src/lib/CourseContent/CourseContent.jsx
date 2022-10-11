import React from 'react'
import CourseDetails from '../../components/CourseDetails/CourseDetails'
import Sidebar from '../Sidebar/Sidebar'
import web_app_dev_img from '../../images/CourseCardImg/web-application-development.jpg';

const CourseContent = () => {

    const title = "INTE 31262 - Advanced Web Application Development";
    const image = web_app_dev_img;
    const description = "Project management (PM) is increasingly important in today’s world. This course covers the fundamental concepts and applied techniques for the cost-effective management of projects. The content deals with planning, scheduling, organizing, and controlling projects. Project management principles and methodology are provided with a special focus on planning, controlling, and managing projects to successful completion.The topics are divided into two categories: the behavioural aspects of a project and the technical components that make up the project.Behavioural issues include management and leadership, cultural differences, organizational structures, and conflict and negotiation.The technical issues include the relation between the performing organization and the project; determining strategy and project selection; developing the project plan; estimating costs, schedules, and the critical path; methods for determining project status; and risks, quality, and procurement.";
    const grade = "A+";
    const announcements = ["Please complete the topic on Risk Management by the 2nd of October.Good Luck", "Please complete the new section (project estimation and budgeting) by the given dates."]

    return (
        <div>
            {
                // CoursesDataFetching()

                <Sidebar title={"Course"} component={<CourseDetails title={title} img={image} description={description} announcements={announcements} />} />
            }

        </div>
    )
}

export default CourseContent