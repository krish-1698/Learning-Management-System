import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

function DashboardCountCard() {
    return (
        <div>
            <Card sx={{ margin: 2, maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-online-learning-tutorials-with-number-of-courses-png-image_4685460.png"
                        alt="course-count-icon"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div" align='center'>
                            No. Of Cources
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" align='center'>
                            12
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    )
}

export default DashboardCountCard;