import React from "react";
import NavBar from "../Navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { Outlet, Link } from "react-router-dom";

export default function SignUp() {
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
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Confirm Password
                            </label>
                            <input
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
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3c"
                          >
                            I agree all statements in{" "}
                            <Link to="#!">Terms of service</Link>
                          </label>
                        </div>
                        <div className="d-flex justify-content-between col-10 text-center text-lg-start mt-4 pt-2">
                          <button
                            type="button"
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
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary btn-floating mx-1"
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
