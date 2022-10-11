import React from 'react'
import AllCoursesComp from '../../components/AllCoursesComp/AllCoursesComp'
import { allCoursesListItems, enrolledCoursesListItems } from '../../lib/ListItems/ListItems'
import Sidebar from '../../lib/Sidebar/Sidebar'

function Courses() {
  return (
    <div>
        {/* <Sidebar title={"All Courses"} component={allCoursesListItems} /> */}
        {/* <Sidebar title={"All Courses"} component={<AllCoursesComp />} /> */}
        {/* <Sidebar title={"Enrollments"} component={allCoursesListItems} /> */}
    </div>
  )
}

export default Courses