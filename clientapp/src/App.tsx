import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  Container,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Card,
} from "reactstrap";

import logo605413 from "./assets/wet_phone_605413.jpg";
import logo605537 from "./assets/mobile_on_desk_605537.jpg";
import logo270068 from "./assets/phone_ancient_old_270068.jpg";
import logo596417 from "./assets/black_iphone_on_light_wood_596417.jpg";
import logo604599 from "./assets/phone_on_table_604599.jpg";
import logo183280 from "./assets/phone_183280.jpg";

import "./styles/App.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className="py-3 text-center">
      <Jumbotron>
        <Container className="text-center">
          <h1>Online Store</h1>
          <p>Mission, Vission & Values</p>
        </Container>
      </Jumbotron>

      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Deals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Stores</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Container className="my-2">
        <Row>
          <Col sm={4}>
            <Card>
              <div className="panel panel-primary">
                <div className="panel-heading">BLACK FRIDAY DEAL</div>
                <div className="panel-body">
                  <img src={logo605413} className="img-responsive" style={{ width: "100%" }} alt="somethingCool" />
                </div>
                <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <div className="panel panel-primary">
                <div className="panel-heading">BLACK FRIDAY DEAL</div>
                <div className="panel-body">
                  <img src={logo605537} className="img-responsive" style={{ width: "100%" }} alt="somethingCool" />
                </div>
                <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
              </div>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <div className="panel panel-primary">
                <div className="panel-heading">BLACK FRIDAY DEAL</div>
                <div className="panel-body">
                  <img src={logo270068} className="img-responsive" style={{ width: "100%" }} alt="somethingCool" />
                </div>
                <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={4}>
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body">
                <img src={logo596417} className="img-responsive" style={{ width: "100%" }} alt="somethingCool" />
              </div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body">
                <img src={logo604599} className="img-responsive" style={{ width: "100%" }} alt="somethingCool" />
              </div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="panel panel-primary">
              <div className="panel-heading">BLACK FRIDAY DEAL</div>
              <div className="panel-body">
                <img src={logo183280} className="img-responsive" style={{ width: "100%" }} alt="somethingCool" />
              </div>
              <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center my-3">
        <Row>
          <Col sm="12">
            <footer>
              <p>Online Store Copyright</p>
              <Row className="text-center">
                <Col md={{ size: 12, offset: 3 }}>
                  <Form inline>
                    <FormGroup>
                      Get deals:
                      <Input type="email" className="form-control mx-2" size={50} placeholder="Email Address" />
                      <Button type="button" className="btn btn-success">
                        Sign Up
                      </Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </footer>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
