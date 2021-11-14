import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
const User = axios.create({ baseURL: "http://localhost:3001/User" })
export default function UserInfo() {
   const [state , setState]=useState({userData:[]})
   useEffect(async() => {
       const res=await User.get();
       setState({...state,userData:res.data})

      
   }, [])
  
    return (
        <>
            <Container style={{backgroundColor:"lightgray"}}>
                <h3 style={{textAlign:"center"}} className="my-3">Below User Want to Enquiry About the Courses</h3>
                <Row>
                <Col sm={1} md={1} lg={1} xs={1}></Col>
                    <Col sm={10} md={10} lg={10} xs={10}>
                        <Table striped bordered hover size="lg" variant="dark" responsive>
                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Course Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                              {state.userData.map((user)=>
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.CourseName}</td>
                                        <td>{user.Name}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.MobileNumber}</td>
                                    </tr>
                              )}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={1} md={1} lg={1} xs={1}></Col>
                </Row>
            </Container>
        </>
    )
}
