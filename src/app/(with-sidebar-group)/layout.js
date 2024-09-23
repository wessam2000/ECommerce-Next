import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const layout = ({children}) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar bg-light">
            <SideBar />
          </Col>
          <Col md={8} className="content ms-2 mt-3">
            <div className="container">{children}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default layout;
