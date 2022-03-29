import React from "react";
import Iframe from "react-iframe";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">Our Contacts</h1>
        <hr className="hrClass mb-5 " />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="shadow rounded p-4 mb-5 text-center">
                  <div>
                    <span>
                      <i class="fas fa-map-marker-alt iconDesing"></i>
                    </span>
                  </div>
                  <h5>Our Location</h5>
                  <p>121 King St, Melbourne VIC 3000, Australia</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shadow rounded p-4 mb-5 text-center">
                  <div>
                    <span>
                      <i class="fas fa-phone iconDesing"></i>
                    </span>
                  </div>
                  <h5>Call Us to Join  Ed-Tech</h5>
                  <p>+1 (888) 123-4567</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shadow rounded p-4 mb-5 text-center">
                  <div>
                    <span>
                      <i class="fas fa-envelope iconDesing"></i>
                    </span>
                  </div>
                  <h5>Email Us To Get Information</h5>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11243789.565427108!2d94.84078764836146!3d46.52659952076424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627050669aa6d4b%3A0xe0dd213937e6e096!2sMongolia!5e0!3m2!1sen!2sbd!4v1633445181007!5m2!1sen!2sbd"
                width="600px"
                height="500px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </div>
            <div className="col-lg-6">
              <div className="p-5 my-5 shadow rounded">
                <div className="d-flex mb-3">
                  <div class="form-floating w-45 me-5">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div class="form-floating w-45">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Phone Number</label>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Subject</label>
                </div>
                <div class="form-floating mt-4">
                  <textarea
                    class="form-control h100"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label for="floatingTextarea2">Massage</label>
                </div>
                <div className="text-center mt-4">
                  <button className="btn d-btn">
                    Send Message <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
