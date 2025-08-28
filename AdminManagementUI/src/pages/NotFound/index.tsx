import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[100],
  textAlign: "center",
  width: "100%"
}));

export default function NotFound() {
  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Typography variant="h1" component="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Oops! The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: "20px", mt: 3 }}
        >
          Go Home
        </Button>
      </Container>
    </Wrapper>
  );
}
