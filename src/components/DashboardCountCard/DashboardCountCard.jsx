import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from "axios";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function DashboardCountCard({coursesCount}) {

    const [student, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/student/getAllStudentCount")
      .then((res) => {
        // setCourses(res.data);
        setStudents(res.data);
        // console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const [lecturer, setLecturers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/lecturer/getAllLecturerCount")
      .then((res) => {
        // setCourses(res.data);
        setLecturers(res.data);
        // console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <Card sx={{ margin: 2, maxWidth: 246, width:246 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="130"
                        image="https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-online-learning-tutorials-with-number-of-courses-png-image_4685460.png"
                        alt="course-count-icon"
                        sx={{ padding: "0.5em 0.5em 0 0.5em", objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div" align='center'>
                            No. of Courses
                        </Typography>
                        <Typography  variant="h4" component="div" align='center' fontWeight= "bold" >
                            {coursesCount}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ margin: 2, maxWidth: 246, width:246  }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="130"
                        image="https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-online-learning-tutorials-with-number-of-courses-png-image_4685460.png"
                        alt="course-count-icon"
                        sx={{ padding: "0.5em 0.5em 0 0.5em", objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div" align='center'>
                            No. of Students
                        </Typography>   
                        <Typography  variant="h4" component="div" align='center' fontWeight= "bold" >
                            {student}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ margin: 2, maxWidth: 246, width:246  }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="130"
                        image="https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-online-learning-tutorials-with-number-of-courses-png-image_4685460.png"
                        alt="course-count-icon"
                        sx={{ padding: "0.5em 0.5em 0 0.5em", objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div" align='center'>
                            No. of Lecturers
                        </Typography>
                        <Typography  variant="h4" component="div" align='center' fontWeight= "bold" >
                            {lecturer}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default DashboardCountCard;