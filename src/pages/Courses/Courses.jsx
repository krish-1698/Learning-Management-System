import React from 'react'
import { allCoursesListItems } from '../../lib/ListItems/ListItems'
import Sidebar from '../../lib/Sidebar/Sidebar'

function Courses() {
  return (
    <div>
        <Sidebar title={"All Courses"} component={allCoursesListItems} />
    </div>
  )
}

export default Courses