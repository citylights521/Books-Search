//this code creates the users saved books page
//this information is presented on the front-end (UI)

//have to import React (or else it won't work!)
import React, { Component } from "react";

//imports components/Jumbotron file
import Jumbotron from "../components/Jumbotron";
//imports components/Card file
import Card from "../components/Card";
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

//Saved class extends Component (aka uses the foundation of the component)
class Saved extends Component {
  state = {
    books: []
  };

  //function override for when the component is mounted to update saved books
  componentDidMount() {
    this.getSavedBooks();
  }

  //gets saved book information from the back-end
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //catches errors if there is one
      .catch(err => console.log(err));
  };

  //deletes the saved book based off the book id on the back-end and refreshes saved books
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  //presents saved book HTML/JSX in the UI including the Jumbotron, saved books list, delete button, and footer
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {/* Jumbotron */}
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and save your favorite books!</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* Card for showing saved books */}
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    // Book information to be displayed
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        // Delete book from saved list button
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

//exports Saved code so that other files can reference 
export default Saved;
