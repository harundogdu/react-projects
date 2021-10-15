import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="container">
      <h1 className="display-4">no such page found</h1>
      <Link to="/"> Go homepage </Link>
    </div>
  );
}

export default Error404;
