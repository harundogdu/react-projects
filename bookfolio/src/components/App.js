import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../context/BookContext";
import ThemeContextProvider from "../context/ThemeContext";
export default class App extends React.Component {
  state = {
    books: [],
  };
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}
