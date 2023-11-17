import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Ishikawa() {

    return (
        <>
        <Container className="p-3">
            <div>Form</div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Problema inicial</Form.Label>
                    <Form.Control type="text" placeholder="Escreva o problema" />
                </Form.Group>
                <Button>Btn do boots</Button>
            </Form>
            <div>Desenho</div>
        </Container>
    </>
    )
}