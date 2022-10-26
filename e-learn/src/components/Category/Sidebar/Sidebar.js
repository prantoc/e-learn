import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({ courses }) => {
    return (
        <>
            <Card className='mt-5 p-3 sticky-top border-0 shadow bg-body rounded' style={{ width: '18rem' }}>
                <Card.Header>Course Categories</Card.Header>

                {
                    courses.map(c =>
                        <Link key={c._id} to={`/course/${c._id}`} className="nav-link">
                            <ListGroup variant="flush">
                                <ListGroup.Item>{c.course_name}</ListGroup.Item>
                            </ListGroup>
                        </Link>
                    )
                }
            </Card>
        </>
    );
};

export default Sidebar;