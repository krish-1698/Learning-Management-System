import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";

function AllCoursesComp() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/course/getAllCourses")
      .then((res) => {
        setCourses(res.data)
        console.log(courses);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
        {courses.map((item) => (
            <CourseCard title={item.title} />
        ))}
    </>
  );
}

export default AllCoursesComp;
