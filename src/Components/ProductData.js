import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function ProductData() {
    const [state, setState] = useState({ userData: [] })
    useEffect(() => {
        const URL = "http://localhost:3001/product";
        axios.get(URL)
            .then(res => {
                setState({ ...state, userData: res.data })
            })
    }, [])
    return (

        <Container fluid style={{backgroundColor:"lightgray"}} >
            <Container className="bg-secondary">
                <Row className="  py-2 bg-primary" style={{textAlign:"center"}}><h4>Book Your Dream Bike!!</h4></Row>
                <Row className="my-4 ">

                    {console.log(state.userData)}
                    {state.userData.map((pro) =>

                        <Col md={4} sm={4} lg={4} sx={4} style={{ marginBottom: "40px" }}>
                            <Card style={{ width: '20rem', textAlign: "center"}} >
                                <Card.Img variant="top" src={`Image/${pro.image}`} style={{ height: "180px"}} />
                                <Card.Body className="bg-light">
                                    <Card.Title>{pro.pname}</Card.Title>
                                    <Card.Text>
                                        <h6>  Quantity:{pro.quantity}</h6>
                                        <h6>  Price:{pro.price}</h6>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">View Details</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    )}

                </Row>
            </Container>
        </Container>

    )
}
