import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const truncateOverview = (string, maxLength) => {
    if (string.length === 0) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}... `;
  };

  return (
    <div className="row">
      {/* items */}

      {props.movies.map((movie, index) => (
        <div className="col-lg-4 mb-4" key={index}>
          <div className="card shadow-sm" style={{ minHeight: "600px" }}>
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="Sample Card Title"
              style={{ height: "450px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">
                {truncateOverview(movie.overview, 100)}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="input-group">
                  <button
                    className="btn btn-md btn-outline-danger"
                    onClick={() => props.deleteMovieProp(movie)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit/${movie.id}`}
                    className="btn btn-md btn-outline-success ml-1"
                  >
                    Edit
                  </Link>
                </div>
                <h3>
                  <span className="badge badge-info">{movie.rating}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* items end */}
    </div>
  );
};

export default MovieList;
