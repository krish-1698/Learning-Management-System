import React from 'react'
import AllCoursesComp from '../../components/AllCoursesComp/AllCoursesComp'
import { allCoursesListItems } from '../../lib/ListItems/ListItems'
import Sidebar from '../../lib/Sidebar/Sidebar'

function Courses() {
  return (
    <div>
        {/* <Sidebar title={"All Courses"} component={allCoursesListItems} /> */}
        <Sidebar title={"All Courses"} component={<AllCoursesComp />} />
    </div>
  )
}

export default Courses