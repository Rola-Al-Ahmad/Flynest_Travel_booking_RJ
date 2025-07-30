import React from "react";
import Container from "../../shared/components/atoms/Container";

import "./Contact.css";

const Contact = () => {
  const formInput = [
    {
      type: "text",
      name: "contactName",
      id: "contactName",
      placeholder: "Enter Your Name",
    },
    {
      type: "email",
      name: "contactEmail",
      id: "contactEmail",
      placeholder: "Enter Your Email",
    },
    {
      type: "text",
      name: "contactPhone",
      id: "contactPhone",
      placeholder: "Enter Your Phone",
    },
    {
      type: "text",
      name: "contactSubject",
      id: "contactSubject",
      placeholder: "Enter Your Subject",
    },
  ];
  return (
    <Container
      sectionName="contact"
      className="main-wrapper"
      rowName="align-items-center"
    >
      <div className="col-xl-7 col-lg-9">
        <div className="contact-card">
          <h4 className="text-capitalize contact-heading">
            Feel free to write us anytime
          </h4>
          <form action="" method="post" className="contact-form">
            <div className="row g-4">
              {formInput.map((input) => (
                <div className="col-sm-6" key={input.id}>
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    className="form-control custom-input"
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="col-sm-12">
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="Enter Your Message..."
                  className="form-control custom-textarea"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn send-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="map-container col-xl-5 col-lg-3">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26498.34247169003!2d35.50814939999999!3d33.882112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1753885230018!5m2!1sen!2slb"
          allowfullscreen=""
          loading="lazy"
          className="map-frame"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contact;
