import Header from "@/components/Header";
// import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const layout = ({children}) => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
            <div className="container">{children}</div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default layout;
