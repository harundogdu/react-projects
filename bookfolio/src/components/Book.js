import React from "react";
import "./Book.css";
import { ThemeContext } from "../context/ThemeContext";

export default class Book extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isDarkMode, dark, light } = contextTheme;
          const theme = isDarkMode ? dark : light;

          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover" style={{backgroundColor : theme.hover}}>
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid w-100"
                    src={this.props.book.imageURL}
                    alt={this.props.book.title}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    {this.props.book.title}
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    {this.props.book.author}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
