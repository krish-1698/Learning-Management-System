import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function NavBarItem({ icon, title }) {
    return (
        <div>
            <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </div>
    )
}

export default NavBarItem