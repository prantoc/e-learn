import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { emailSent, error } from '../../../Toasts/Toasts';

const VerifyEmail = () => {
    const [loading, setLoading] = useState(false);
    const { userEmailVerify, user } = useContext(AuthContext);
    const sendVerifyLink = () => {
        setLoading(true)
        userEmailVerify()
            .then(() => {
                emailSent('Email verification link sent please check!');
                setLoading(false)
            })
            .catch(e => {
                const errorMessage = e.message;
                error(errorMessage);
                setLoading(false)
            })
    }
    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                    {user?.emailVerified ? <h1 className='text-center pb-4'>Your Email has been verified</h1>
                        :
                        <div>
                            <h1 className='text-center pb-4'>Verify Your Email</h1>
                            <div className="mb-4 text-center">
                                <label htmlFor="exampleInputEmail1" className="form-label">Please <b>Verify</b> your Email address</label>
                            </div>
                            <button onClick={sendVerifyLink} type="submit" className="btn btn-primary text-center col-12  rounded">
                                {loading
                                    ?
                                    <div class="spinner-border text-dark" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    :
                                    ' Send Verification Link'}
                            </button>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default VerifyEmail;