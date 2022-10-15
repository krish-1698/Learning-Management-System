import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function EnrollmentsCourseCard({title, img}) {
  return (
    <div>
      <Card sx={{ margin: 2, maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="130" image={img} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default EnrollmentsCourseCard;
