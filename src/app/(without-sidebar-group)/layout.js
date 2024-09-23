import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const layout = ({children}) => {
  return (
    <>
      <Container fluid>
        <Row>
            <div className="container">{children}</div>
        </Row>
      </Container>
    </>
  );
};

export default layout;
