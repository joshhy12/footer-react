import React from 'react';
import image1 from './images/1.jpg'; // Assuming you have an image named 1.jpg

import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="my-5">
      {/* Carousel Section */}
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <div className="text-center">
                <h1 className="display-4 mb-4">First slide label</h1>
                <p className="lead mb-5">Some representative placeholder content for the first slide of the carousel.</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <h1 className="display-4 mb-4">Second slide label</h1>
                <p className="lead mb-5">Some representative placeholder content for the second slide of the carousel.</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="text-center">
                <h1 className="display-4 mb-4">Third slide label</h1>
                <p className="lead mb-5">Some representative placeholder content for the third slide of the carousel.</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Features Section */}
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Feature 1</Card.Title>
              <Card.Text>
                Description of your first main feature or service.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Feature 2</Card.Title>
              <Card.Text>
                Description of your second main feature or service.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Feature 3</Card.Title>
              <Card.Text>
                Description of your third main feature or service.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Events Section */}
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Events Za Leo</h2>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {/* Repeat the card structure */}
                {[...Array(4)].map((_, idx) => (
                  <div className="col" key={idx}>
                    <div className="card shadow-sm">
                      <a href="#">
                        <img src={image1} alt="Album content" className="bd-placeholder-img card-img-top" width="100%" height="225" />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">Image Title</h5>
                        <p className="card-text">This is a detailed description of the image.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          </div>
                          <small className="text-muted">2024</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Watoa Huduma Section */}
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Watoa Huduma</h2>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {/* Repeat the card structure */}
                {[...Array(4)].map((_, idx) => (
                  <div className="col" key={idx}>
                    <div className="card shadow-sm">
                      <img src={image1} alt="Album content" className="bd-placeholder-img card-img-top" width="100%" height="225" />
                      <div className="card-body">
                        <h5 className="card-title">Image Title</h5>
                        <p className="card-text">This is a detailed description of the image.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
