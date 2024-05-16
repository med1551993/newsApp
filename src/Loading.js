import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center" style={{height: "100vh" }}>
      <div
        className="spinner-border text-danger"
        style={{ width: "3rem", height: "3rem", marginTop:"100px" }}
        role="status"
      >
      </div>
    </div>
  );
};

export default Loading;
