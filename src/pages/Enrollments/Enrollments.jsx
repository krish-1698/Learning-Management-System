import { Box } from "@mui/material";
import React, { useState } from "react";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Announcements from "../../lib/Announcements/Announcements";
import { enrolledCoursesListItems } from "../../lib/ListItems/ListItems";
import Sidebar from "../../lib/Sidebar/Sidebar";
import StudentsEvoluation from "../../lib/StudentsEvoluation/StudentsEvoluation";
import EnrolledCourseView from "./EnrolledCourseView";

function Enrollments({userType}) {
  // enrollement page number 1 => View all enrollments for both lecturer and student
  // enrollement page number 2 => Lecturer side course anouncements and student evoluation
  const [enrollPageNumber, setEnrollPageNumber] = useState(1);
  const [courseData, setCourseData] = useState();

  return (
    <Box>
      {enrollPageNumber === 1 && (
        <Sidebar userType={userType} title={"Enrollments"} component={<EnrolledCourseView setEnrollPageNumber={setEnrollPageNumber} setCourseData={setCourseData}/>} />
      )}
      {/* {enrollPageNumber === 2 && (
        <Sidebar title={"Enrollments"} component={<Announcements />} />
      )}
      {enrollPageNumber === 3 && (
        <Sidebar title={"Enrollments"} component={<StudentsEvoluation />} />
      )} */}
      {enrollPageNumber === 4 && (
        <Sidebar title={"Enrollments"} userType={userType} component={<CourseDetails data={courseData} userType={userType}/>}/>
      )}
    </Box>
  );
}

export default Enrollments;
