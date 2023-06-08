import React from "react";
import { Typography, Container, Box } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box bgcolor="#212121" py={4} textAlign="center">
        <Container>
          <Typography variant="body2" color="white">
            &copy; 2023 PhimHayGhe
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}


