import React from "react";
import serialize from "form-serialize";

export default class AddMovie extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = serialize(event.target, { hash: true });
    this.props.onAddMovie(newMovie);
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
                value="Fill in the blank fields."
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
                      placeholder="Batman Begins"
                      name="name"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Rating</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="8,2"
                      name="rating"
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
                      placeholder="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q7OK13aqXAwppQAF6yT6wZeKtc6.jpg"
                      name="imageURL"
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
                      placeholder="Ailesinin ??ld??r??lmesinin ard??ndan muazzam bir servetin sahibi olsa da, b??y??k hayal k??r??kl?????? ya??ayan Bruce Wayne (Christian Bale), adaletsizlikle sava??man??n yollar??n?? bulmak, ve g????s??zleri korkuya bo??anlara g??zda???? vermek amac??yla d??nyay?? dola????r. Wayne bir s??re sonra Gotham'a d??nerek, di??er kimli??ini ortaya ????kar??r: G??c??n??, akl??n?? ve y??ksek teknoloji ??r??n?? ara??lar??n??, ??ehri tehdit eden k??t?? g????lere kar???? kullanan maskeli Batman???i."
                      name="overview"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-danger btn-block font-weight-bold"
              >
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
