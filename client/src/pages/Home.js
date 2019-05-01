//user landing page. This code presents the Book search and search results 
//used on the front-end (UI)

//have to import react (or else it won't work!) and other files
import React, { Component } from "react";
//imports components/Jumbotron file
import Jumbotron from "../components/Jumbotron";
//imports components/Card file
import Card from "../components/Card";
//imports components/Form file
import Form from "../components/Form";
//imports components/Book file
import Book from "../components/Book";
//imports components/Footer file
import Footer from "../components/Footer";
//imports utils/API file
import API from "../utils/API";
//imports components/Grid file
import { Col, Row, Container } from "../components/Grid";
//imports components/List file
import { List } from "../components/List";

//builds the Home component
class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

// event for updating the state when user inputs a book name
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//inline function to call google books API with query   
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
//.catch captures errors if there are any and updates the state accordingly
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

// event for updating the state when user clicks submit on the form
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

//this code saves the book id and book information from the API 
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

//this code shows the Jumbotron, book search field, input form, book results field, and footer on the UI
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and save your favorite books!</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

//exports Home code so that other files can access
export default Home;
