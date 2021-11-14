import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { useRef } from 'react';
const Courses = axios.create({ baseURL: "http://localhost:3001/Course" })
const User = axios.create({ baseURL: "http://localhost:3001/User" })
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName = /^[a-zA-Z ]{2,100}$/;
const regFormobile = RegExp(/^[6-9][0-9]{9}$/);
export default function Course() {
    const [state, setState] = useState({ courseData: [] })
    const [form1, setForm] = useState(false)
    const [smShow, setSmShow] = useState(false);
    const [course, setCourse] = useState();
    const uname = useRef(null)
    const email = useRef(null)
    const mobile = useRef(null)
    const [name_error, setName_error] = useState('')
    const [email_error, setEmail_error] = useState('')
    const [mobile_error, setMobile_error] = useState('')


    // const dispatch=useDispatch();

    useEffect(async () => {

        const res = await Courses.get();
        setState({ courseData: res.data })
    }, [])

    const enquiry = (id) => {
        console.log(id)
        setForm(true)
        setCourse(id)
    }

    const handler = (event) => {
        const name = event.target.name;
        switch (name) {
            case 'uname':
                let nerror = regForName.test(uname.current.value) ? '' : 'Name should be greater than 3 char. long';
                setName_error(nerror);
                break;
            case 'email':
                let eerror = regForEmail.test(email.current.value) ? '' : 'Name should be greater than 3 char. long';
                setEmail_error(eerror);
                break;

            case 'mobile':
                let merror = regFormobile.test(mobile.current.value) ? '' : 'Mobile number should be 10digit long';
                setMobile_error(merror);
                break;
            default:
                break;

        }
    }

    const submitData = () => {
        alert("sub")
        Courses.get(`?id=${course}`)
            .then(res => {
                console.log(res.data[0].cname)
                let SelectedCourseName = res.data[0].cname;
                if (uname.current.value != '' && email.current.value != '' && mobile.current.value != '' && name_error == '' && email_error == '' && mobile_error == '') {
                    const formData = { id: Math.random, Name: uname.current.value, Email: email.current.value, MobileNumber: mobile.current.value, CourseId: course, CourseName: SelectedCourseName }
                    User.post("/", formData)
                    setForm(false)
                }
            })
    }
    return (
        <>
            <Container fluid style={{backgroundColor:"lightgray"}} >
                <Container>
                    <Row className=" my-2 py-2 bg-primary" style={{ textAlign: "center" }}><h4>All Courses are in one websites!!</h4></Row>
                    <Row>
                        {console.log(state.courseData)}
                        {state.courseData.map((pro) =>
                            <Col md={4} sm={4} lg={4} sx={4} style={{ marginBottom: "40px" }}>
                                <Card style={{ width: '18rem', textAlign: "center" }}>
                                    <Card.Body className="bg-light">
                                        <Card.Title>{pro.cname}</Card.Title>
                                        <Card.Text>
                                            <h6>  Quantity:{pro.Duration}</h6>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => enquiry(pro.id)}>Enquiry Now!!</Button>
                                    </Card.Body>
                                </Card>

                            </Col>

                        )}


                    </Row>
                    {form1 ? <Modal
                        size="lg"
                        show={form1}
                        onHide={() => setForm(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Enquiry Form
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form style={{ border: "1px solid black", padding: "20px", borderRadius: "10px 10px 10px 10px " }}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" placeholader="Enter the Name" ref={uname} name="uname" onChange={(e) => { handler(e) }} />
                                    <span>{name_error}</span>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text" placeholader="Enter the Email" ref={email} name="email" onChange={(e) => { handler(e) }} />
                                    <span>{email_error}</span>
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label>Modile:</Form.Label>
                                    <Form.Control type="number" placeholader="Enter the mobile" ref={mobile} name="mobile" onChange={(e) => { handler(e) }} />
                                    <span>{mobile_error}</span>
                                </Form.Group>



                                <Row>
                                    <Col xs={5} md={5} sm={5} lg={5} ></Col>
                                    <Col xs={5} md={5} sm={5} lg={5} >
                                        <Button variant="primary" type="button" onClick={() => submitData()}  >Submit</Button>

                                    </Col>
                                    <Col xs={2} md={2} sm={2} lg={2} ></Col>
                                </Row>

                            </Form>

                        </Modal.Body>
                    </Modal> : ""}
                    {/* {form1 ?

                        <Row>
                            <Col sm={3} md={3} lg={3} xs={3}>col1</Col>
                            <Col sm={6} md={6} lg={6} xs={6}>
                                <Form style={{ border: "1px solid black", padding: "20px", borderRadius: "10px 10px 10px 10px " }}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name:</Form.Label>
                                        <Form.Control type="text" placeholader="Enter the Name" ref={uname} name="uname" onChange={(e) => { handler(e) }} />
                                        <span>{name_error}</span>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="text" placeholader="Enter the Email" ref={email} name="email" onChange={(e) => { handler(e) }} />
                                         <span>{email_error}</span>
                                    </Form.Group>


                                    <Form.Group className="mb-3">
                                        <Form.Label>Modile:</Form.Label>
                                        <Form.Control type="number" placeholader="Enter the mobile" ref={mobile} name="mobile" onChange={(e) => { handler(e) }} />
                                         <span>{mobile_error}</span> 
                                    </Form.Group>



                                    <Row>
                                        <Col xs={5} md={5} sm={5} lg={5} ></Col>
                                        <Col xs={5} md={5} sm={5} lg={5} >
                                            <Button variant="primary" type="button" onClick={() => submitData()}  >Submit</Button>

                                        </Col>
                                        <Col xs={2} md={2} sm={2} lg={2} ></Col>
                                    </Row>

                                </Form>
                            </Col>
                            <Col sm={3} md={3} lg={3} xs={3}>col2</Col>
                        </Row>

                        : null} */}

                </Container>
            </Container>
        </>
    )
}
