import React from "react";
import { Link } from "react-router-dom";

export default class SearchBar extends React.Component {
  formSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="mt-3 mb-2">
        <div className="row">
          <div className="col-10">
            <form action="/" method="get" onSubmit={this.formSubmit}>
              <input
                className="form-control"
                type="search"
                id="searchBar"
                placeholder="search a movie.."
                onChange={this.props.searchMovieProp}
              ></input>
            </form>
          </div>
          <div className="col-2">
            <div className="form-group clearfix">
              <Link to="/add">
                <button
                  className="btn btn-block btn-dark"
                  style={{ float: "right" }}
                >
                  Add Movie
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
