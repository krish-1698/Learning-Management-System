import { AddCircle as AddIcon } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateAnnouncement from "../../modal/CreateAnnouncement/CreateAnnouncement";
import AnnouncementTable from "../AnnouncementTable/AnnouncementTable";

function Announcements() {

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2 }}>
            Announcements
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ my: 2 }}>
            <Button onClick={modalOpen} variant="contained" endIcon={<AddIcon />}>
              Add New
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <CreateAnnouncement setOpen={setOpen} open={open}  />
        <AnnouncementTable />
      </Box>
    </Box>
  );
}

export default Announcements;
