import React from 'react'
import Sidebar from '../../lib/Sidebar/Sidebar'
import { enrolledCoursesListItems } from "../../lib/ListItems/ListItems";

function Dashboard() {
  return (
    <div>
        {/* <Sidebar title={"Dashboard"}/> */}
        {/* <Sidebar title={"Dashboard"} component={<AllCoursesComp />} /> */}
        <Sidebar title={"Dashboard"} component={enrolledCoursesListItems} />
    </div>
  )
}

export default Dashboard