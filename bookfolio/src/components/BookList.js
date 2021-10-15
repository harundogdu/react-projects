import React from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

export default class BookList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const { books } = contextBook;
              const {
                changeTheme,
                isDarkMode,
                dark,
                light
              } = contextTheme;
              const theme = isDarkMode ? dark : light;
              return (
                <section
                  className="page-section"
                  style={{ backgroundColor: theme.bg, color: theme.color }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-right">
                      <button className="btn btn-danger" onClick={changeTheme}>Change Theme</button>
                    </div>
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BookFolio
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                    </div>
                    <div className="row">
                      {books.map((book, index) => {
                        return <Book book={book} key={index} />;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
