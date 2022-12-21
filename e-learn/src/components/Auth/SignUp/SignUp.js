import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { emailSent, error, success } from '../../../Toasts/Toasts';
import isURL from 'validator/lib/isURL';
import google from '../../../assets/imgs/google.png'
import facebook from '../../../assets/imgs/facebook.png'
import github from '../../../assets/imgs/github.png'
const SignUp = () => {
    const { emPasSignUp, updateUserData, userEmailVerify, logoutUser, signInByGoogle, signInByGithub } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const userSignup = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const isValidEmail = /\S+@\S+\.\S+/;
        if (!isValidEmail.test(email)) {
            return error('Please Provide a Valid Email Address')
        }
        if (!isURL(photo)) {
            return error("Your Photo URL isn't valid!");
        }
        if (password.length < 6) {
            return error("Your password should be at least 6 charachters!");
        }
        if (password !== confirmPassword) {
            return error("password and confirm password doesn't match!");
        }
        emPasSignUp(email, password)
            .then(() => {
                updateUserData(name, photo)
                userEmailVerify()
                emailSent('Email verification link sent please check!');
                success('successfully created an account')
                logoutUser();
                form.reset();
                setLoading(false)
            })
            .catch((error) => {
                const errorMessage = error.message;
                error(errorMessage);
                setLoading(false)
            });
    }
    const githubSignIn = () => {
        signInByGithub()
            .then((result) => {
                const user = result.user;
                success(`Hi,${user.displayName}  You Logged in successfully`);
                navigate('/')
            }).catch((e) => {
                console.error(e);
            });
    }
    const googleSignIn = () => {
        signInByGoogle()
            .then((result) => {
                const user = result.user;
                success(`Hi,${user.displayName}  You Logged in successfully`);
                navigate('/')
            }).catch((e) => {
                console.error(e);
            });
    }
    const handleAccepted = e => {
        setAccepted(e.target.checked);
    }

    return (
        <Container>
            <Row className='my-5'>
                <Col md={4} sm={10} className='mx-auto border p-5 rounded' style={{ boxShadow: "rgb(204 225 255) -7px 13px 4px 1px" }}>
                    <form onSubmit={userSignup}>
                        <h1 className='text-center pb-2'>SignUp</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" name='name' required placeholder='Enter your full name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhoto" className="form-label">Photo URL</label>
                            <input type="text" className="form-control" id="exampleInputPhoto" aria-describedby="photohelp" name='photo' required placeholder='Enter your photo URL' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required placeholder='Enter your email ' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name='password' required placeholder='Enter your password' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" name='confirmPassword' required placeholder='Enter your confir passowrd' />
                        </div>
                        <div className="mb-3 form-check" onClick={handleAccepted}>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Accept Our Terms & Conditions</label>
                        </div>
                        <button disabled={!accepted} type="submit" className="btn btn-danger text-center col-12  rounded">
                            {loading
                                ?
                                <div className="spinner-border text-dark" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                :
                                'SignUp'}
                        </button>
                    </form>
                    <div className="form-text text-center p-1">Have an account in E-Learn? <Link to="/login">Login</Link></div>
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

export default SignUp;