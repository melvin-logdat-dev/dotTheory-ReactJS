import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

function Results() {
  return (
    <div>
      <Container className="pb-4 pt-4">
        <h2>Results List</h2>
        <ListGroup>
          <ListGroupItem action href="#" active>
            Link 1
          </ListGroupItem>
          <ListGroupItem action href="#">
            Link 2
          </ListGroupItem>
          <ListGroupItem action href="#" disabled>
            Link 3
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
}

export default Results;
