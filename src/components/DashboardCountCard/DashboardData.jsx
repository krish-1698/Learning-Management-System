import React from 'react'
import { allCoursesListItems } from "../../lib/ListItems/ListItems";
import DashboardCountCard from './DashboardCountCard';
import {Typography} from '@mui/material';

function DashboardData(){
    return (
        <div>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", ml:2 }}>
                Summary
            </Typography>

            <div>
                <DashboardCountCard />
            </div>

            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2, ml:2 }}>
              All Cources
            </Typography>

            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            {allCoursesListItems}
            </div>            
        </div>
    );
}

export default DashboardData;