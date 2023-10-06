import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h4"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TODO LIST
            </Typography>
            <Link to="/" style={{ color: "inherit" }}>
              <Button color="inherit" type="button">
                Main
              </Button>
            </Link>
            <Link to="/metrics" style={{ color: "inherit" }}>
              <Button color="inherit" type="button">
                {" "}
                Metrics{" "}
              </Button>
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
