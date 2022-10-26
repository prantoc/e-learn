import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { emailSent, error } from '../../../Toasts/Toasts';

const ResetPassword = () => {
    const { userPassReset } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const resetPassword = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        userPassReset(email)
            .then(() => {
                emailSent('Password reset email sent!')
                setLoading(false)
            })
            .catch((e) => {
                const errorMessage = e.message;
                error(errorMessage)
                setLoading(false)
            });
    }
    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                    <form onSubmit={resetPassword}>
                        <h1 className='text-center pb-4'>Reset Password</h1>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                        </div>
                        <button type="submit" className="btn btn-danger text-center col-12  rounded">
                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                ' Reset Password'}
                        </button>
                    </form>
                </Col>
            </Row>

        </Container>
    );
};

export default ResetPassword;