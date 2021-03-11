import React from "react";


function ResultsCard({props, children}) {
  return (
    <div className="card my-2 bg-light w-100">
      <div className="card-body">
        <h5 className="text-left">Results</h5>
        {children}
      </div>
    </div>
  );
}

export default ResultsCard;
