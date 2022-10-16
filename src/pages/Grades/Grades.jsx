import React from 'react'
import GradesTable from '../../lib/GradesTable/GradesTable'
import Sidebar from '../../lib/Sidebar/Sidebar'

function Grades({userType}) {
    return (
        <div>
            <Sidebar userType={userType} title={"Grades"} component={<GradesTable/>} />
        </div>
    )
}

export default Grades