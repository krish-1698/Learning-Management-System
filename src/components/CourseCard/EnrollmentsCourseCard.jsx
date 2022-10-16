import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function EnrollmentsCourseCard({data, setEnrollPageNumber, setCourseData}) {
  return (
    <div>
      <Card sx={{ margin: 2, maxWidth: 345 }}
        onClick={() => {
          console.log("click working")
          setCourseData(data)
          setEnrollPageNumber(4)
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="130" image={data.image} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default EnrollmentsCourseCard;
