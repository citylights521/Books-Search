//this code creates our 404 error message
//presented on the front-end (UI)

//have to import React (or else it won't work!)
import React from "react";

//imports components/Grid file
import { Col, Row, Container } from "../components/Grid";
//imports components/Jumbotron file
import Jumbotron from "../components/Jumbotron";

//no match function for generating the 404 error message
function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

//exports NoMatch code so that other files can access it
export default NoMatch;
