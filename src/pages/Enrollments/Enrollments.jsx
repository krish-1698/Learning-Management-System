import React from 'react'
import { enrolledCoursesListItems } from '../../lib/ListItems/ListItems'
import Sidebar from '../../lib/Sidebar/Sidebar'

function Enrollments() {
  return (
    <div>
        <Sidebar title={"Enrollments"} coursesList={enrolledCoursesListItems} />
    </div>
  )
}

export default Enrollments