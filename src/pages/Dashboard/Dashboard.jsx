import React from 'react'
import Sidebar from '../../lib/Sidebar/Sidebar'
import DashboardData from '../../components/DashboardCountCard/DashboardData';

function Dashboard() {
  return (
    <div>
        {/* <Sidebar title={"Dashboard"} component={allCoursesListItems} /> */}
        {/* <Sidebar title={"Dashboard"} component={<DashboardCountCard />} /> */}
        <Sidebar title={"Dashboard"} component={<DashboardData />} />
    </div>
  )
}

export default Dashboard