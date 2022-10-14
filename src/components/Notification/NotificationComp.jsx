import { Box, Typography } from '@mui/material'
import React from 'react'

function NotificationComp({title, description}) {
  return (
    <Box sx={{p:1, alignItems:'center', m:1,  backgroundColor: '#e3f2fd', borderRadius: 1.5}}>
        <Typography variant='body1' my={1} mx={1} fontSize={14}>{title}</Typography>
        <Typography variant='body1' mb={1} mx={1} fontSize={14}>{description}</Typography>
    </Box>
  )
}

export default NotificationComp