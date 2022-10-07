import React from "react";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

function EditDeleteButton() {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<EditIcon />}>
        Edit
      </Button>
    </Stack>
  );
}

export default EditDeleteButton;
