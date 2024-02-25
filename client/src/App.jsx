import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";
import Header from "./components/header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
