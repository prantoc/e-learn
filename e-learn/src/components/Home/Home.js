import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sliderGif from '../../assets/imgs/online-learning.gif'
import 'animate.css';
const Home = () => {
    return (
        <Container className='pt-lg-3'>
            <Row>
                <Col className='slider-text mt-lg-5 pt-lg-5' lg={6} md={6} sm={12}>
                    <h1 className='text-secondary p-4 lh-base animate__animated animate__backInLeft'>Learning that gets you <br />Skills for your present (and your future). Get started with us.</h1>
                    <p className='text-secondary p-2 animate__animated animate__backInLeft'>Develop your skill in multiple areas as a superhero.we offered (Web Design, Web Development, Graphic Design, Mobile App Development, Tester, Digital Marketing)</p>
                    <button className='btn btn-danger animate__animated animate__tada'> Get Started With Free</button>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <img className='img-fluid' src={sliderGif} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;