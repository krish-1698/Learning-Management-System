import * as React from 'react';
import { Popover } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>

      <NotificationsIcon onClick={handleClick} role="button" aria-describedby={id} variant="contained" />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <Box sx={{ fontWeight: 'bold' }}>Notifications</Box>
          <Box
            sx={{
              width: 300,
              height: 400,
              fontSize: 14,
              borderRadius: 1.5,
              backgroundColor: '#e3f2fd',  
              // '&:hover': {
              //   backgroundColor: '#90caf9',
              //   opacity: [0.9, 0.8, 0.7],
              // },
            }}
          >
            <Box sx={{ marginTop:2, marginBottom:1, p:1}}>GNCT 32216 - Internship(2019/2020) content change</Box>
            <Box sx={{ marginBottom:1, p:1 }}>GNCT 32216 - Internship(2019/2020) content change</Box>
            <Box sx={{ marginBottom:1, p:1 }}>GNCT 32216 - Internship(2019/2020) content change</Box>
            <Box sx={{ marginBottom:1, p:1 }}>GNCT 32216 - Internship(2019/2020) content change</Box>
            <Box sx={{ marginBottom:1, p:1 }}>GNCT 32216 - Internship(2019/2020) content change</Box>
          </Box>
        </Typography>
      </Popover>
    </div>
  );
}

export default Notification;
