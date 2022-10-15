import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import SwitchButton from "../SwitchButton/SwitchButton";

function CourseCard({ title, img }) {
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

            <CardActions sx={{ marginLeft: 1.5 }}>
              <SwitchButton />
            </CardActions>
          </Card>
      
    </div>
  );
}

export default CourseCard;
