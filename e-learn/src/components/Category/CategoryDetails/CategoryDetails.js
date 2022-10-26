import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaCartPlus, FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CategoryDetails = () => {
    const cDetails = useLoaderData(); //cDetails = category details
    const { _id, price, course_name, course_duration, description, topics, picture, course_start } = cDetails;
    return (
        <Container>
            <Row>
                <Col md={12} className="my-5">
                    <Card className='shadow bg-body rounded border-0 text-secondary '>
                        <Card.Header className='border-0 bg-light' as="h3">{course_name}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={9}>
                                    <Card.Img variant="top" src={picture} className="img-fluid mb-4 animate__animated animate__swing" />
                                    <Card.Text className='lh-base animate__animated'>
                                        {description}
                                    </Card.Text>
                                    <Card.Title>
                                        What you'll learn
                                    </Card.Title>
                                    <Card>
                                        <ul>
                                            {
                                                topics.map((t, i) => <li className='animate__animated animate__headShake text-dark fw-bold' key={i}>{t}</li>)
                                            }
                                        </ul>
                                    </Card>

                                </Col>
                                <Col md={3} className="border-start  text-center">
                                    <h2 className='text-danger fw-bold'>${price}</h2>
                                    <p className='fw-bold my-3'>Course Duration: <span className='text-dark'>{course_duration} months</span></p>
                                    <p className='fw-bold my-3'>Course Will Start: <span className='text-dark'> {course_start}</span></p>
                                    <Button variant='outline-danger' className='animate__animated animate__bounceInDown my-2'>Download Course details <FaCloudDownloadAlt /> </Button>
                                    <Button className='animate__animated animate__bounceInDown' variant="outline-primary"><Link to={`/checkout/${_id}`} className='nav-link'>Get Premium <FaCartPlus /> </Link></Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryDetails;