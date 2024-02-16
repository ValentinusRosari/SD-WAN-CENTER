import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Navbar";
import Alarm from "./pages/alarm";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";
import Ticket from "./pages/ticket";
import User from "./pages/user";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
