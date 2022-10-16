import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React  from "react";

function CreateAnnouncement({open, setOpen}) {
  // const [announcement, setAnnouncements] = useState([]);

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8080/api/v1/announcement/saveAnnouncement")
  //     .then((res) => {
  //       // setCourses(res.data);
  //       setAnnouncements(res.data);
  //       // console.log(res.data); 
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },[]);

  

  function handleClose() {
    setOpen(false);
  }

  return (
    <Modal open={open}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: "40vw" }}>
          <CardContent>
            <Typography
              pl={1}
              pt={1}
              pb={2}
              variant="h6"
              sx={{ fontWeight: 500 }}
            >
              Add new announcement
            </Typography>

            <Typography pl={1} pt={1}>
              Title
            </Typography>
            <TextField
              sx={{ paddingLeft: "10px", mt: "0.5rem", width: "95%" }}
              placeholder="Title"
              size="small"
            ></TextField>

            <Typography pl={1} pt={1}>
              Description
            </Typography>
            <TextField
              multiline
              maxRows={4}
              sx={{ paddingLeft: "10px", mt: "0.5rem", width: "95%" }}
              placeholder="Name"
              size="small"
            ></TextField>

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                paddingRight: "27px",
                paddingTop: "1rem",
                marginTop: "0.2rem",
              }}
            >
              <Button
                variant="outlined"
                sx={{ color: "grey", marginRight: "0.5rem" }}
                onClick={handleClose} 
              >
                Close
              </Button>
              <Button  variant="contained">Save</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}

export default CreateAnnouncement;
