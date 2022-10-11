import { Box } from "@mui/material";
import React, { useState } from "react";
import Announcements from "../../lib/Announcements/Announcements";
import { enrolledCoursesListItems } from "../../lib/ListItems/ListItems";
import Sidebar from "../../lib/Sidebar/Sidebar";
import StudentsEvoluation from "../../lib/StudentsEvoluation/StudentsEvoluation";

function Enrollments() {
  // enrollement page number 1 => View all enrollments for both lecturer and student
  // enrollement page number 2 => Lecturer side course anouncements and student evoluation
  
  const [enrollPageNumber, setEnrollPageNumber] = useState(2);


  return (
    <Box>
      {enrollPageNumber === 1 && (
        <Sidebar title={"Enrollments"} component={enrolledCoursesListItems} />
      )}
      {enrollPageNumber === 2 && (
        <Sidebar title={"Enrollments"} component={<Announcements />} />
      )}
      {enrollPageNumber === 3 && (
        <Sidebar title={"Enrollments"} component={<StudentsEvoluation />} />
      )}
    </Box>
  );
}

export default Enrollments;
