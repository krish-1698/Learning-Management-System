import React, { useEffect, useState } from "react";
import { allCoursesListItems } from "../../lib/ListItems/ListItems";
import DashboardCountCard from "./DashboardCountCard";
import { Typography } from "@mui/material";
import axios from "axios";
import CourseCard from "../CourseCard/CourseCard";

function DashboardData() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/course/getAllCourses")
      .then((res) => {
        // setCourses(res.data);
        setCourses(res.data);
        // console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", ml: 2 }}>
        Summary
      </Typography>

      <div>
        <DashboardCountCard coursesCount={courses.length} />
        {/* {console.log("course length is "+courses.length)} */}
      </div>

      <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2, ml: 2 }}>
        All Courses
      </Typography>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

        {courses.map((item) => (
          <CourseCard data={item} />
        ))}

        {/* {allCoursesListItems} */}
      </div>
    </div>
  );
}

export default DashboardData;
