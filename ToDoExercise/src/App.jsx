import { Container } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Metrics from "./pages/Metris";

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="xl" sx={{ paddingTop: 5 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
