'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { RootState } from '../../store';
import { setEmployees } from '../../store/slices/employeeSlice';
import { API } from '../../helpers/axios';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employee.employees);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await API.get('/users');
      dispatch(setEmployees(data.users));
    };
    fetchEmployees();
  }, [dispatch]);


  return (
    <Container className="mt-5">
      <h2>Employee List</h2>
      <Row>
        {employees.map((item: any) => (
          <Col key={item.id} md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{`${item.firstName} ${item.lastName}`}</Card.Title>
                <Card.Text>Email: {item.email}</Card.Text>
                <Card.Text>Phone: {item.phone}</Card.Text>
                <Card.Text>Role: {item.role}</Card.Text>
                <Button variant="primary">Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EmployeeList;