import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: "250px",
        width: "250px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">loading...</span>
    </Spinner>
  );
}

export default Loader;
