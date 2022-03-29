import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-black">
      <div className="container text-light">
        <div className="row ">
          <div className="col-lg-3 mt-5  pt-5">
            <h1 className="text-gray mb-4">
              <span className="fw-bolder text-gray">Ed-Tech </span>
              company
            </h1>
            <p className="text-gray">
              Fusce tempor, tortor et vehicula posuere, mi est iaculis quam
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary bg-light_blue text-light"
                type="button"
                id="button-addon2"
              >
                <span>
                  <i className="fas fa-paper-plane"></i>
                </span>
              </button>
            </div>
            <div className="d-flex justify-content-evenly align-items-center">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-3  my-5 py-5 hover-text_blue">
            <h3>Quick Links</h3>
            <p className="text-gray">Become a Instructor</p>
            <p className="text-gray">Instructor/Student Profile</p>
            <p className="text-gray">Courses</p>
            <p className="text-gray">LP Checkout</p>
            <p className="text-gray">Terms & Conditions</p>
          </div>
          <div className="col-lg-3  my-5 py-5 hover-text_blue">
            <h3>Campus Life</h3>
            <p className="text-gray">Food Services</p>
            <p className="text-gray">Housing</p>
            <p className="text-gray">Information Technologies</p>
            <p className="text-gray">Campus Safety</p>
            <p className="text-gray">Offer Running</p>
          </div>
          <div className="col-lg-3  my-5 py-5 hover-text_blue">
            <h3>Acadmics</h3>
            <p className="text-gray">Library</p>
            <p className="text-gray">Time Schedule</p>
            <p className="text-gray">Apply For Admission</p>
            <p className="text-gray">Canvas</p>
            <p className="text-gray">Housing</p>
          </div>
          <p className="text-center pb-5 text-gray">
            Copyright @ 2021 <span className="text-blue">Ed-Tech company </span>, All
            Rights Reserved
          </p>
          <script src="https://kit.fontawesome.com/ef79d6a125.js" crossorigin="anonymous"></script>
        </div>
      </div>
    </div>
  );
};

export default Footer;
