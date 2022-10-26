import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'
import paypal from '../../assets/imgs/paypal.png'
import payoneer from '../../assets/imgs/symbols.png'
import visa from '../../assets/imgs/visa.png'
import paymentGif from '../../assets/imgs/payment-complete.gif'
import { success } from '../../Toasts/Toasts';
const CheckOut = () => {
    const cBuy = useLoaderData(); //cBuy = course buy
    const { price, course_name, topics, picture, description } = cBuy;
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [coursePayment, setCoursePayment] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const payment = () => {
        setLoading(true)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if (loading === true) {
                setCoursePayment(true)
                success('Payment Completed!')
            }
            setLoading(false);
            setShow(false)

        }, 5000);
        return () => clearTimeout(timer);
    }, [loading]);
    return (
        <Container>
            <Row>
                <Col md={12} className="my-5">
                    <Card className="shadow-lg p-3 mb-5 bg-body rounded border-0">
                        <Card.Body>
                            {
                                coursePayment === false ?
                                    <Row>
                                        <Col md={8}>
                                            <div className='d-flex'>
                                                <Card.Img variant="top" src={picture} className="img-fluid img shadow-lg rounded" />
                                                <div>
                                                    <Card.Title className='p-2 text-secondary'>
                                                        {course_name}
                                                    </Card.Title>
                                                    {topics.map((t, i) => <Badge key={i} className="mx-2" bg="dark" text="light"> {t} </Badge>)}
                                                    <Card.Text className='text-secondary ms-2 mt-2'>
                                                        {
                                                            description.length > 100
                                                                ?
                                                                description.slice(0, 100)
                                                                :
                                                                description
                                                        }
                                                    </Card.Text>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4} className="text-end">
                                            <Card.Title className='p-2 text-danger fw-bold' as="h1">
                                                ${price}
                                            </Card.Title>
                                            <Button onClick={handleShow}>Proceed To Checkout</Button>
                                        </Col>
                                    </Row>
                                    :

                                    <Card.Title className='text-center' as="h1">
                                        <h1 className='text-success'>Your Payemnt Successfully Completed !</h1>
                                        <img className='img-fluid' src={paymentGif} alt="" />
                                    </Card.Title>

                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Payment Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='d-flex justify-content-between'>
                        {
                            loading === false
                                ?
                                <>
                                    <Col md={3} role="button" onClick={payment}>
                                        <Card.Img variant="top" src={paypal} className="img-fluid" />
                                    </Col>
                                    <Col md={3} role="button" onClick={payment}>
                                        <Card.Img variant="top" src={payoneer} className="img-fluid" />
                                    </Col>
                                    <Col md={3} role="button" onClick={payment}>
                                        <Card.Img variant="top" src={visa} className="img-fluid" />
                                    </Col>
                                </>
                                :
                                <Spinner className='mx-auto' animation="grow" />
                        }

                    </Row>

                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default CheckOut;