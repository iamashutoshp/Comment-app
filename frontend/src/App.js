import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./Components/LogIn/SignIn";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Components/CommentPage/LandingPage";
import AppProvider from "./Components/Context/AppContext";
import { AppContext } from "./Components/Context/AppContext";
import { Login } from "@mui/icons-material";

export default class App extends Component {
  static contextType = AppContext;

  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                  <SignIn/>
              }
            />
            <Route
              path="comment"
              element={this.context.isAuthenticated ?
                  <LandingPage/>:<Navigate to="/" />
              }
            />
          </Routes>
        </BrowserRouter>
    );
  }
}
