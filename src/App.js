import React from 'react';
import { Badge, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const getaways = [
  {
    name: 'Coastal mornings',
    place: 'Cornwall, England',
    detail: 'Slow days by the sea, with winding paths and a pasty stop along the way.',
    symbol: '🌊',
    color: 'linear-gradient(135deg, #b8e3e8, #5b9eaa)',
    tag: 'BY THE WATER',
  },
  {
    name: 'Cabin in the woods',
    place: 'The Lake District',
    detail: 'A quiet cabin, misty trails, and just enough adventure for the weekend.',
    symbol: '🌲',
    color: 'linear-gradient(135deg, #c8d8b5, #66866d)',
    tag: 'IN THE WILD',
  },
  {
    name: 'A little city break',
    place: 'Bath, England',
    detail: 'Pretty streets, independent bookshops, and a very good afternoon tea.',
    symbol: '☀️',
    color: 'linear-gradient(135deg, #f4d4a6, #d88961)',
    tag: 'CITY DAYS',
  },
];

function App() {
  return (
    <>
      <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f8f7f3' }}>
        <Navbar bg="white" expand="lg" className="border-bottom py-3">
          <Container>
            <Navbar.Brand href="#" className="fw-bold fs-4">
              little<span className="text-success">elsewhere</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto align-items-lg-center gap-lg-3">
                <Nav.Link href="#getaways">Getaways</Nav.Link>
                <Nav.Link href="#about">Our kind of travel</Nav.Link>
                <Button variant="success" className="rounded-pill px-4 mt-2 mt-lg-0">
                  Get inspired
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <Container className="py-5 py-lg-6">
            <section id="about" className="text-center mx-auto py-lg-5" style={{ maxWidth: '720px' }}>
              <Badge bg="light" text="success" className="rounded-pill px-3 py-2 mb-3">
                GOOD PLACES, GENTLE PLANS
              </Badge>
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#263b32' }}>
                Find your next little escape.
              </h1>
              <p className="lead text-secondary mb-0">
                Thoughtful ideas for getting away, slowing down, and making a weekend feel a
                little longer.
              </p>
            </section>

            <section id="getaways" className="pt-5">
              <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4">
                <div>
                  <p className="text-success fw-semibold text-uppercase small mb-2">
                    A few places to start
                  </p>
                  <h2 className="fw-bold mb-0" style={{ color: '#263b32' }}>
                    Pick your pace
                  </h2>
                </div>
                <p className="text-secondary mb-0 mt-2 mt-md-0">Three lovely ideas for your next weekend.</p>
              </div>

              <Row className="g-4">
                {getaways.map((getaway) => (
                  <Col key={getaway.name} md={6} lg={4}>
                    <Card className="h-100 border-0 shadow-sm overflow-hidden">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        role="img"
                        aria-label={`${getaway.name} illustration`}
                        style={{
                          height: '190px',
                          background: getaway.color,
                          fontSize: '4rem',
                        }}
                      >
                        <span aria-hidden="true">{getaway.symbol}</span>
                      </div>
                      <Card.Body className="p-4">
                        <Badge bg="light" text="success" className="mb-3">
                          {getaway.tag}
                        </Badge>
                        <Card.Subtitle className="text-secondary mb-2">{getaway.place}</Card.Subtitle>
                        <Card.Title className="h4 fw-bold" style={{ color: '#263b32' }}>
                          {getaway.name}
                        </Card.Title>
                        <Card.Text className="text-secondary">{getaway.detail}</Card.Text>
                        <Button
                          variant="outline-success"
                          href="#getaways"
                          className="rounded-pill px-3"
                        >
                          Explore the idea
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
