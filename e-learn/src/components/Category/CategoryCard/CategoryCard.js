import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CategoryCard.css"
import 'animate.css';
const CategoryCard = ({ course }) => {
    const { _id, course_name, picture, price, description } = course;
    return (
        <>
            <Col md={4} className="animate__animated animate__pulse">
                <Link to={`/category/${_id}`} className='nav-link p-3'>
                    <Card className='shadow bg-body rounded border-0 categories-card'>
                        <Card.Img variant="top" src={picture} className="img-fluid img" />
                        <Card.Body>
                            <Card.Title className='text-secondary'>{course_name}</Card.Title>
                            <Card.Text className='text-secondary'>
                                {
                                    description.length > 100
                                        ?
                                        description.slice(0, 100)
                                        :
                                        description
                                }
                            </Card.Text>
                            <Card.Text className='text-danger fw-bold' >
                                ${price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    );
};

export default CategoryCard;