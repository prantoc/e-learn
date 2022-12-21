import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';
import Sidebar from '../Sidebar/Sidebar';

const Category = () => {
    const courses = useLoaderData();
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <Container fluid>
            <Row>
                <Col md={9} sm={12}>
                    <Row>
                        {
                            navigation.state === "loading"
                            &&
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
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