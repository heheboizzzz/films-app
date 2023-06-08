import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import useTheme from "@mui/material/styles/useTheme";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

export default function FilmPresentation({ films }) {
    const theme = useTheme()
    const navigate = useNavigate()
    return (
        <Grid bgcolor={theme.palette.mode === "dark" ? "#121212" : "white"} container spacing={3} sx={{ marginTop: "0", marginBottom: "5rem", padding: "2rem", justifyContent: 'center' }} >
            {
                films.map((film) => (
                    <Grid xs={12} sm={8} lg={4} item key={film.id}>
                        <Card>
                            <CardMedia
                                sx={{ height: 700 }}
                                image={film.image}
                                title={film.title}
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">
                                    {film.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Nation: {film.nation}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Year: {film.year}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="outlined" color="warning" startIcon={<BubbleChartIcon />} onClick={() => { navigate(`/detail/${film.id}`) }}>Detail</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </ Grid>
    )
}
