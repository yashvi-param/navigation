import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About Our Dresses</h1>

      <p className="text-center mb-5">
        We offer a wide range of fashionable dresses designed to suit every
        occasion. Our collection blends comfort, quality, and modern style.
      </p>

      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Casual Dresses</Card.Title>
              <Card.Text>
                Perfect for daily wear. Soft fabrics, relaxed fits, and trendy
                designs for all-day comfort.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Party Wear</Card.Title>
              <Card.Text>
                Elegant and stylish dresses made for parties, celebrations, and
                special occasions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Traditional Dresses</Card.Title>
              <Card.Text>
                Beautiful ethnic designs inspired by cultural heritage with
                modern tailoring.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
