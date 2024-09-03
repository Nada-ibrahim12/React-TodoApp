import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SignUp from "./components/SignUp/index";
import Login from "./components/Login/index";
import Home from "./components/index";
import TodoApp from "./components/TodoApp/index";
// import Notes from "./components/TodoApp/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
