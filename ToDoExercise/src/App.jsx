import { Container } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Metrics from "./pages/Metrics/Metrics";

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="xl" sx={{ paddingTop: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
