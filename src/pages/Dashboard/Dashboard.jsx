import React from 'react'
import Sidebar from '../../lib/Sidebar/Sidebar'
import { allCoursesListItems } from "../../lib/ListItems/ListItems";
import DashboardCountCard from '../../components/DashboardCountCard/DashboardCountCard';

function Dashboard() {
  return (
    <div>
        <Sidebar title={"Dashboard"} component={allCoursesListItems} />
        {/* <Sidebar title={"Dashboard"} component={<DashboardCountCard />} /> */}
    </div>
  )
}

export default Dashboard