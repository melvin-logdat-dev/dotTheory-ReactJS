import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

function SearchForm() {
  return (
    <div>
      <Form className="d-inline-flex">
        <FormGroup controlId="formInlineEmail">
          <FormControl type="search" placeholder="enter something..." />
        </FormGroup>{" "}
        <Button type="submit" className="ms-2">
          search
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
