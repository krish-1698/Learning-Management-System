import * as React from 'react';
import { Popover } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationComp from './NotificationComp';

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
              height: '25%',
              fontSize: 14,
              borderRadius: 1.5,
              // backgroundColor: '#e3f2fd',  
            }}
          >

          {
            [
              {
                title:"GNCT 32216 - Internship(2019/2020)",
                description: "content change"
              },
              {
                title:"GNCT 32216 - Internship(2019/2020)",
                description: "content change"
              },
              {
                title:"GNCT 32216 - Internship(2019/2020)",
                description: "content change"
              },
            ].map((item) => (
              <NotificationComp title={item.title} description={item.description}/>
            ))
          }
  
          </Box>
        </Typography>
      </Popover>
    </div>
  );
}

export default Notification;
