import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Announcements from "../../lib/Announcements/Announcements";
import StudentsEvoluation from "../../lib/StudentsEvoluation/StudentsEvoluation";

function CourseDetails({ data, userType }) {
  return (
    <Container>
      <Box sx={{ alignItems: "center", width: 1 }}>
        <Typography gutterBottom variant="h4" fontWeight={"600"}>
          {data.title}
        </Typography>
        <center>
          <Box
            component="img"
            sx={{
              height: "60vh",
              width: "100%",
              align: "center",
              borderRadius: 1,
              my: 5,
            }}
            alt="The house from the offer."
            src={data.image}
          />
        </center>
        <Typography gutterBottom variant="p" mt={2}>
          {data.description}
        </Typography>

        <Box style={{ marginTop: 50 }}>
          {userType === "lecturer" && <Announcements />}
        </Box>
        <Box style={{ marginTop: 50 }}>
          {userType === "lecturer" && <StudentsEvoluation />}
        </Box>
      </Box>
    </Container>
  );
}

export default CourseDetails;
