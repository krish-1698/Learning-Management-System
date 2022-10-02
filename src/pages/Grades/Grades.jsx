import React from 'react'
import GradesTable from '../../lib/GradesTable/GradesTable'
import Sidebar from '../../lib/Sidebar/Sidebar'

function Grades() {
    return (
        <div>
            <Sidebar title={"Grades"} gradesTable={<GradesTable/>} />
        </div>
    )
}

export default Grades