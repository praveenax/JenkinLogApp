import React from "react";
import Navigationbar from "../../Layout/Navbar";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import classes from "./Upload.module.css";

const Upload = () => {
  return (
    <>
      <Navigationbar />
      <div className={classes.buttonContainer}>
      <Container style={{ width: '500px', marginTop:"20px" }}> 
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Build Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      </Container>
        <div className={classes.uploadButton}>
          <Button variant="dark" size="lg">
            Upload
          </Button>
        </div>
      </div>
      <div className={classes.nextbutton}>
        <Button href="/summary" variant="dark" size="md" className={classes.next}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Upload;
