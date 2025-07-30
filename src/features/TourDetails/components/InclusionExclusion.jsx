import { memo } from "react";

const InclusionExclusion = ({ includedItems, excludedItems }) => {
  return (
    <div className="row border rounded p-2">
      <div className="col-md-6">
        <h5 className="mb-2">Included</h5>
        <ul className="list-unstyled-detail">
          {includedItems.map((item, index) => (
            <li key={`included-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h5 className="mb-2">Excluded</h5>
        <ul className="list-unstyled-detail">
          {excludedItems.map((item, index) => (
            <li key={`excluded-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(InclusionExclusion);
