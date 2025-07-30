import React from "react";

const Policy = () => {
  return (
    <section className="mb-4">
      <h5 className="mb-2">Policy</h5>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        tempora voluptates exercitationem culpa sint esse illo ad, libero
        perspiciatis reprehenderit, aperiam voluptate debitis unde sunt
        temporibus. Cum pariatur voluptatem officiis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <ol className="list-numbered">
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </li>
      </ol>
    </section>
  );
};

export default React.memo(Policy);
