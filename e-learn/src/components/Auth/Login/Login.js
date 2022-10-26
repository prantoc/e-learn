import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { error, success } from '../../../Toasts/Toasts';
import google from '../../../assets/imgs/google.png'
import facebook from '../../../assets/imgs/facebook.png'
import github from '../../../assets/imgs/github.png'
const Login = () => {
    const { userSignIn, signInByGoogle, signInByGithub } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const userLogin = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                success(`Hi,${user.displayName}  You Logged in successfully`);
                setLoading(false)
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    navigate('/verify-email')
                }
            })
            .catch((e) => {
                const errorMessage = e.message;
                error(errorMessage);
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const githubSignIn = () => {
        signInByGithub()
            .then((result) => {
                const user = result.user;
                success(`Hi,${user.displayName}  You Logged in successfully`);
                navigate('/')
            }).catch((e) => {
                error(e);
            });
    }
    const googleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                const user = result.user;
                success(`Hi,${user.displayName}  You Logged in successfully`);
                navigate('/')
            }).catch((e) => {
                error(e);
            });
    }


    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                    <form onSubmit={userLogin}>
                        <h1 className='text-center pb-4'>Login</h1>
                        <div className="mb-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" required />
                            <label className="form-check-label" htmlFor="exampleCheck1"><Link to="/reset-password">Forgot Password?</Link></label>
                        </div>
                        <button type="submit" className="btn btn-danger text-center col-12  rounded">

                            {loading
                                ?
                                <div class="spinner-border text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                :
                                'Login'}
                        </button>
                    </form>
                    <div className="form-text text-center p-1">New to E-Learn? <Link to="/signup">Create new Acoount</Link></div>
                    <hr />
                    <div className='d-flex justify-content-center mt-3'>
                        <img className='m-4' role="button" onClick={googleSignIn} src={google} alt='Logo' width={30} />
                        <img className='m-4' role="button" onClick={githubSignIn} src={github} alt='Logo' width={30} />
                        <img className='m-4' role="button" onClick={googleSignIn} src={facebook} alt='Logo' width={30} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;