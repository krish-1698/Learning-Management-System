import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function CourseDetails({ title, img, description, grade, announcements }) {
    return (
        <Container>
            <Box sx={{ alignItems: "center", width: 1 }}>
                <Typography gutterBottom variant="h4" fontWeight={"600"}>
                    {title}
                </Typography>
                <center>
                    <Box
                        component="img"
                        sx={{

                            height: "60vh",
                            width: "100%",
                            align: "center",
                            borderRadius: 1,
                            my: 5
                        }}
                        alt="The house from the offer."
                        src={img}
                    />
                </center>
                <Typography gutterBottom variant="p" mt={2}>
                    {description}
                </Typography>
                <Typography gutterBottom variant="h5" mt={4}>
                    Announcements
                </Typography>
                <Typography gutterBottom variant="p" mt={2}>

                </Typography>

                {announcements.map((item) => (

                    <Box
                        sx={{
                            mt: 2,
                            pt: 2,
                            width: 1,
                            height: 80,
                            borderRadius: 1,
                            backgroundColor: '#E4E3E1',
                            '&:hover': {
                                backgroundColor: '#D3D3D3',
                            },
                        }}
                    >
                        <Typography gutterBottom variant="p" mt={2} px={2} >
                            {item}<br />
                        </Typography>
                    </Box>




                ))}

            </Box>
        </Container>
    )
}

export default CourseDetails