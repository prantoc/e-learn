import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import Sidebar from '../Sidebar/Sidebar';

const Category = () => {
    const courses = useLoaderData();
    return (
        <Container fluid>
            <Row>
                <Col md={9} sm={12}>
                    <Row>
                        {
                            courses.map(c => <CategoryCard key={c._id} course={c}></CategoryCard>)
                        }
                    </Row>
                </Col>
                <Col md={3} sm={12}>
                    <Sidebar courses={courses}></Sidebar>

                </Col>

            </Row>
        </Container>
    );
};

export default Category;