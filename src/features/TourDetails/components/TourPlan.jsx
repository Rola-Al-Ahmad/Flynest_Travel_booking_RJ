import React from "react";

const TourPlan = ({ tour }) => {
  return (
    <section className="mb-4">
      <h5>Tour Plan</h5>
      <div className="accordian" id="tourPlanAccordian">
        {[1, 2, 3, 4].map((day, index) => (
          <div className="accordian-item" key={index}>
            <h2 className="accordian-header" id={`heading${index}`}>
              <button
                className={`accordian-button ${index > 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0}
                aria-controls={`collapse${index}`}
              >
                Day {day} - {tour.location}
              </button>
            </h2>

            <div
              id={`collapse${index}`}
              className={`accordian-collapse collapse${
                index === 0 ? " show" : ""
              }`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#tourPlanAccordian"
            >
              <div className="accordian-body bg-dark p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi atque ab aliquid adipisci quis vitae corrupti
                obcaecati animi est! Aspernatur praesentium accusamus veniam
                laudantium. Sapiente doloremque vel reiciendis beatae corrupti.
                <ul className="list-unstyled">
                  {tour.excludedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                Day {day}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(TourPlan);
