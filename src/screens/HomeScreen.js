import React, { useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import Logo from "../images/logo-B.png";

function HomeScreen() {
  useEffect(() => {
    document.body.style.backgroundColor = "#01062c";
  });
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8} className="p-0">
            <Image src={Logo} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
