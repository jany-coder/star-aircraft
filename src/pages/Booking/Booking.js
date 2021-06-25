import React from 'react';
import Ticket from '../../components/Ticket/Ticket';
import airData from '../../data';
import { Col, Row, Container } from 'react-bootstrap';

const Booking = () => {
    return (
        <section className="mb-5">
            <div>
                <h2 className="text-center">Welcome</h2>
            </div>

            <Container>
                <Row>
                        {
                            airData.map(data => <Col className="mt-3" md={4}><Ticket data={data} ></Ticket></Col>)
                        }
                </Row>
            </Container>
        </section>
    );
};

export default Booking;