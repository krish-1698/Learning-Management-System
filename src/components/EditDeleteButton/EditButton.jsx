import { Button } from "@mui/material";
import React from "react";
import {
    Edit as EditIcon,
  } from "@mui/icons-material";

function EditButton() {
  return (
    <Button variant="contained" endIcon={<EditIcon />}>
      Edit
    </Button>
  );
}

export default EditButton;
