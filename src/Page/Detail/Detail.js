import React from 'react'
import { listOfFilms } from '../../shared/ListOfFilms'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
const Detail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const film = listOfFilms.find((film) => film.id === Number(id))
    console.log(film)
    return (
        <Container maxWidth='false' sx={{ display: "flex", justifyContent: "center", marginTop: "2rem", flexWrap: 'wrap-reverse' }}>
           
            <Box sx={{ width: { sm: "60%", xs: "100%" } }}>
                <Button startIcon={<ReplyAllIcon />} variant="outlined" color="warning" onClick={() => { navigate('/') }}>Back</Button>
                <Typography variant="h4" component="h1">
                    {film.title}
                </Typography>
                <Typography variant="body2">
                    NATION: {film.nation}
                </Typography>
                <Typography variant="body2">
                    DURATION: {film.duration}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
                    YEAR: {film.year}
                </Typography>
                <Typography variant="body1">
                    INFORMATION: {film.info}
                </Typography>
                <iframe width="1000" height="500" src={film.watch} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
        </Container>
    )
}

export default Detail