import React from "react";
import axios from "axios";

export default class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    imageURL: "",
    overview: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const id = this.props.match.params.id;
    const { name, rating, imageURL, overview } = this.state;
    const updatedMovie = {
      name,
      rating,
      imageURL,
      overview,
    };

    this.props.onEditMovie(id, updatedMovie);
    this.props.history.push("/");
  };

  async componentDidMount() {
    const movie = await axios.get(
      `http://localhost:3002/movies/${this.props.match.params.id}`
    );

    this.setState({
      name: movie.data.name,
      rating: movie.data.rating,
      imageURL: movie.data.imageURL,
      overview: movie.data.overview,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto mt-3">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
              <input
                className="form-control "
                type="text"
                value="Fill in the blank fields for Update."
                disabled
                readOnly
              ></input>
              <div className="form-row my-2">
                <div className="col-md-10">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Rating</label>
                    <input
                      className="form-control"
                      type="text"
                      name="rating"
                      value={this.state.rating}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-row my-2">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      className="form-control"
                      type="text"
                      name="imageURL"
                      value={this.state.imageURL}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Overview</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      required
                      name="overview"
                      value={this.state.overview}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-info btn-block font-weight-bold"
              >
                Update Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
