import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col col={12}>
                        <Card className='shadow-lg mb-5 rounded text-secondary'>
                            <Card.Body>
                                <Card.Title >
                                    What is cors?
                                </Card.Title>
                                <Card.Text>
                                    Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                                </Card.Text>
                                <Card.Title >
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </Card.Title>
                                <Card.Text>
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                </Card.Text>
                                <Card.Title >
                                    How does the private route work?
                                </Card.Title>
                                <Card.Text>
                                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                                </Card.Text>
                                <Card.Title >
                                    What is Node? How does Node work?
                                </Card.Title>
                                <Card.Text>
                                    Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;