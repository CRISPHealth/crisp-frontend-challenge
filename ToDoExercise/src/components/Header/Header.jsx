import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography
              variant="h4"
              sx={{
                flex: 1,
                marginRight: 3,
                display: { xs: "none", sm: "block" },
                fontWeight: "bold"
              }}
            >
              TO DO TASKS
            </Typography>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button variant="text" sx={{ color: 'white' }}>
                Home
              </Button>
            </NavLink>
            <NavLink to="/metrics" style={{ textDecoration: "none" }}>
              <Button variant="text" sx={{ color: 'white' }}>
                Metrics
              </Button>
            </NavLink>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
