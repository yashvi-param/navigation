import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here"
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Contact Info */}
      <Row className="mt-5 text-center">
        <Col md={4}>
          <h5>📍 Address</h5>
          <p>Ahmedabad, India</p>
        </Col>

        <Col md={4}>
          <h5>📞 Phone</h5>
          <p>+91 98765 43210</p>
        </Col>

        <Col md={4}>
          <h5>📧 Email</h5>
          <p>support@dressstore.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
