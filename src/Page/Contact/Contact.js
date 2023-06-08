import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
} from "@mui/material";

const nations = [
  `Điện Biên`,
`Hòa Bình`,
`Lai Châu`,
`Lào Cai`,
`Sơn La`,
`Yên Bái`,
`Bắc Giang`,
`Bắc Kạn`,
`Cao Bằng`,
`Hà Giang`,
`Lạng Sơn`,
`Phú Thọ`,
`Quảng Ninh`,
`Thái Nguyên`,
`Tuyên Quang`,
`Bắc Ninh`,
`Hà Nam`,
`Thành phố Hà Nội`,
`Hải Dương`,
`Thành phố Hải Phòng`,
`Hưng Yên`,
`Nam Định`,
`Ninh Bình`,
`Thái Bình`,
`Vĩnh Phúc`,
`Hà Tĩnh`,
`Nghệ An`,
`Quảng Bình`,
`Quảng Trị`,
`Thanh Hóa`,
`Thừa Thiên Huế`,
`Bình Định`,
`Bình Thuận`,
`Đà Nẵng`,
`Khánh Hòa`,
`Ninh Thuận`,
`Phú Yên`,
`Quảng Nam`,
`Quảng Ngãi`,
`Đắk Lắk`,
`Đắk Nông`,
`Gia Lai`,
`Kon Tum`,
`Lâm Đồng`,
`Bà Rịa Vũng Tàu`,
`Bình Dương`,
`Bình Phước`,
`Đồng Nai`,
`Thành phố Hồ Chí Minh`,
`Tây Ninh`,
`An Giang`,
`Bạc Liêu`,
`Bến Tre`,
`Cà Mau`,
`Cần Thơ`,
`Đồng Tháp`,
`Hậu Giang`,
`Kiên Giang`,
`Long An`,
`Sóc Trăng`,
`Tiền Giang`,
`Trà Vinh`,
`Vĩnh Long`,

];

const WhiteTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#444444",
  },
  "& .MuiInputLabel-root": {
    color: "#444444",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#444444",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#444444",
    },
    "&:hover fieldset": {
      borderColor: "#444444",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#444444",
    },
  },
}));

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteNation, setFavoriteNation] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi thông tin liên hệ
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Favorite Nation:", favoriteNation);
    console.log("Content:", content);
    // Reset form
    setName("");
    setPhone("");
    setEmail("");
    setFavoriteNation("");
    setContent("");
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <WhiteTextField
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <WhiteTextField
                label="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <WhiteTextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select 
                value={favoriteNation}
                onChange={(e) => setFavoriteNation(e.target.value)}
                fullWidth
                required
                displayEmpty
                sx={{
                  "& .MuiSelect-root": {
                    color: "#444444",
                  },
                  "& .MuiSelect-icon": {
                    color: "#444444",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Choose your favourite nation
                </MenuItem>
                {nations.map((nation) => (
                  <MenuItem
                    key={nation}
                    value={nation}
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#444444",
                        color: "#444444",
                      },
                    }}
                  >
                    {nation}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <WhiteTextField
                label="Your Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid sx={{ width: "100%", display: "flex", marginTop: "5%" ,marginBottom: "35%" }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mx: "auto", my: { xs: "5%", sm: "0" } }}
                    size="large"
                >
                Submit
                </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;
