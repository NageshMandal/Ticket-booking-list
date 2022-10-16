import React,{useState} from "react";
import {Button,Form,From} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employes from "./Employes";
import {v4 as uuid} from "uuid";
import { Link,useNavigate} from 'react-router-dom'

function Add(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit =(e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employes.push({id: uniqueId, Name: a, Age : b});

        history("/");

    }

    return<div>
        <h1 style={{margin:"5rem"}}>Ticket Booking</h1>
        <Form className="d-grid gap-2" style={{margin:"10rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter Ticket No" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e)=> handleSubmit(e)} type="submit">Submit</Button>
        </Form>

    </div>
}

export default Add;