import { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import TodoApp from "./components/TodoApp/TodoApp";
import Notes from "./components/TodoApp/Notes";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="welcomePage" element={<Home />}></Route>
            <Route path="Register" element={<SignUp />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="/todo" element={<TodoApp />}></Route>
            {/* <Route path="/notes" element={<Notes />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
