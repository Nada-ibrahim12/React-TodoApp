import React, { useState } from "react";
import NavBar from "../Navbar/index";
import Login from "../Login/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Joi from "joi";

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function getData(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }
  function submitHandler(e) {
    e.preventDefault();
    let statusError = validation();
    if (statusError?.error) {
      setErrors(statusError?.error.details);
      // } else {
      //   axios
      //     .post("", formData)
      //     .then((res) => {
      //       navigate("/Login");
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       setError(err.response.data.message);
      //     });
    }
  }
  function validation() {
    let schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    return schema.validate(formData, { abortEarly: true });
  }
  return (
    <div>
      <NavBar />
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="text-black">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">
                        Sign up
                      </p>
                      {error.length ? (
                        <h6 className="alert alert-danger">{error}</h6>
                      ) : (
                        <></>
                      )}
                      {errors.length > 0 ? (
                        errors.map((err, i) => (
                          <h6 key={i} className=" alert alert-danger">
                            {err.message}
                          </h6>
                        ))
                      ) : (
                        <></>
                      )}
                      <form onSubmit={submitHandler} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="">
                              Your Name
                            </label>
                            <input
                              onChange={getData}
                              name="name"
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="">
                              Your Email
                            </label>
                            <input
                              onChange={getData}
                              name="email"
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="">
                              Password
                            </label>
                            <input
                              onChange={getData}
                              name="password"
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="">
                            I agree all statements in{" "}
                            <Link to="#!">Terms of service</Link>
                          </label>
                        </div>
                        <div className="d-flex justify-content-between col-10 text-center text-lg-start mt-4 pt-2">
                          <button
                            type="submit"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-dark btn-lg pe-4 ps-4"
                          >
                            Register
                          </button>
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Have an account?{" "}
                            <Link to="#!" className="link-primary">
                              Login
                            </Link>
                          </p>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mt-3">
                          <p className="lead fw-normal mb-0 me-5">
                            Sign up with
                          </p>
                          <button
                            type="button"
                            className="btn btn-dark btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-dark btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-dark btn-floating mx-1"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
