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
          The content of the Popover.
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: '#64b5f6',
              // '&:hover': {
              //   backgroundColor: '#90caf9',
              //   opacity: [0.9, 0.8, 0.7],
              // },
            }}
          />
        </Typography>
      </Popover>
    </div>
  );
}

export default Notification;
