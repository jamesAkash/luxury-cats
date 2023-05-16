import React from "react";

const Error = () => {
  const setStyle = {
    margin: "0 auto",
    color: "orangered",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={setStyle}>
      <p>Snap! There was an error</p>
      <h1>Page Not Found...</h1>
    </div>
  );
};

export default Error;
