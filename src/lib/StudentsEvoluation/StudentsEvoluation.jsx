import { Box, Typography } from '@mui/material';
import React from 'react'
import StudentsEvoluationTable from '../StudentsEvoluationTable/StudentsEvoluationTable';

function StudentsEvoluation() {
  
    return (
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2 }}>
              Students Evoluation
            </Typography>
          </Box>
        </Box>
        <Box>
          <StudentsEvoluationTable />
        </Box>
      </Box>
    );
  }

export default StudentsEvoluation