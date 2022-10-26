import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={12}>
                    <Card className='shadow-lg mb-5 rounded text-secondary'>
                        <Card.Body>
                            <h2>Learning With E-Learn: FAQ</h2>

                            <hr />
                            <span>E-Learn's mission is to create new possibilities for people and organizations everywhere. Our global marketplace features an extensive, multi-language library, which includes thousands of courses taught by real-world experts. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music and much more!

                                Below are answers to some of the frequently asked questions we receive about E-Learn and E-Learn courses.</span>
                            <Card.Title className='my-3'>
                                What do E-Learn courses include?
                            </Card.Title>
                            <Card.Text>
                                Each E-Learn course is created, owned and managed by the instructor(s). The foundation of each E-Learn course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students.
                            </Card.Text>

                            <Card.Title className='my-3'>
                                How do I take a E-Learn course?
                            </Card.Title>
                            <Card.Text>
                                E-Learn courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.

                                After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your E-Learn account). You can also begin the course by logging in and navigating to your My learning page.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;