import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Row, Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ishikawa.css'

export default function Ishikawa() {

    return (
            <Card id="ishiForm" className="p-3 mb-4">
                <div className='ishFormHeader'>
                    <h2 className='mb-4'>Preencha os dados para a ishikawa:</h2>
                </div>
                <Form>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema inicial</Form.Label>
                        <Form.Control type="text" placeholder="Escreva o problema" />
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Método</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Mão de Obra</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Material</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Máquina</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Meio ambiente</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Meio de Medição</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                    <Row style={{textAlign: 'center'}}>
                        <Col></Col>
                        <Col>
                            <Button variant='success' size={'lg'} className='fluid ms-auto'> Salvar </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>
                <div>Desenho</div>
            </Card>
    )
}