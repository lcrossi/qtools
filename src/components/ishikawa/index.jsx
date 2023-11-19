import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { Button, Form, Row, Card, Col } from 'react-bootstrap'
import Fishbone from '@hophiphip/react-fishbone';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ishikawa.css'

export default function Ishikawa() {
    const [ishItems, setIshItems] = useState(0)
    const [ishPrincipal, setIshPrincipal] = useState('Prob principal')
    var itens = {}
    
    useEffect(() => {
        setIshItems ({
            "name": ishPrincipal,
            "children": [
                {
                    "name": "Maquina",
                    "children": [
                        {"name": "Speed"},
                        {"name": "Bits"},
                        {"name": "Sockets"}
                    ]
                },
                {
                    "name": "Personel",
                    "children": [
                        {"name": "Shifts"},
                        {"name": "Training"},
                        {"name": "Operators"}
                    ]
                },
                {
                    "name": "Methods",
                    "children": [
                        {"name": "Brake"},
                        {"name": "Angle"},
                    ]
                },
                {
                    "name": "Material",
                    "children": [
                        {
                            "name": "Quality",
                            "children": [
                                {"name": "Delivery"},
                            ]
                        },
                    ]
                }
            ]
        })

        /* itens = {
            "name": "Problema Itens",
            "children": [
                {
                    "name": "Maquina",
                    "children": [
                        {"name": "Speed"},
                        {"name": "Bits"},
                        {"name": "Sockets"}
                    ]
                },
                {
                    "name": "Personel",
                    "children": [
                        {"name": "Shifts"},
                        {"name": "Training"},
                        {"name": "Operators"}
                    ]
                },
                {
                    "name": "Methods",
                    "children": [
                        {"name": "Brake"},
                        {"name": "Angle"},
                    ]
                },
                {
                    "name": "Material",
                    "children": [
                        {
                            "name": "Quality",
                            "children": [
                                {"name": "Delivery"},
                            ]
                        },
                    ]
                }
            ]
        } */
    }, [])

    function handleInputChange(type, value) {
        if (type == 'problemaPrincipal') {
            setIshPrincipal(value)
            console.log(ishPrincipal)
        }
    }

    function loadIshikawa() {
        setIshItems ({
            "name": "Problema Loaded",
            "children": [
                {
                    "name": "Maquina",
                    "children": [
                        {"name": "Speed"},
                        {"name": "Bits"},
                        {"name": "Sockets"}
                    ]
                },
                {
                    "name": "Personel",
                    "children": [
                        {"name": "Shifts"},
                        {"name": "Training"},
                        {"name": "Operators"}
                    ]
                },
                {
                    "name": "Methods",
                    "children": [
                        {"name": "Brake"},
                        {"name": "Angle"},
                    ]
                },
                {
                    "name": "Material",
                    "children": [
                        {
                            "name": "Quality",
                            "children": [
                                {"name": "Delivery"},
                            ]
                        },
                    ]
                }
            ]
        })
        /* itens = {
            "name": "Resolvido atualizou Itens",
            "children": [
                {
                    "name": "Maquina",
                    "children": [
                        {"name": "Speed"},
                        {"name": "Bits"},
                        {"name": "Sockets"}
                    ]
                },
                {
                    "name": "Personel",
                    "children": [
                        {"name": "Shifts"},
                        {"name": "Training"},
                        {"name": "Operators"}
                    ]
                },
                {
                    "name": "Methods",
                    "children": [
                        {"name": "Brake"},
                        {"name": "Angle"},
                    ]
                },
                {
                    "name": "Material",
                    "children": [
                        {
                            "name": "Quality",
                            "children": [
                                {"name": "Delivery"},
                            ]
                        },
                    ]
                }
            ]
        } */
        console.log('loaded...', ishItems)
    }

    function fishboneChart() {
        return (
            <Fishbone
                items={ishItems}
                wrapperStyle={{ 
                    width: '100%', 
                    height: 500,
                }}
            />
        )
    }

    return (
            <Card id="ishiForm" className="p-3 mb-4">
                <div className='ishFormHeader'>
                    <h2 className='mb-4'>Preencha os dados para a ishikawa:</h2>
                </div>
                <Form>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema inicial</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Escreva o problema" 
                            onChange={(e) => handleInputChange('problemaPrincipal', e.target.value)}
                        />
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
                            <Button onClick={() => loadIshikawa()} variant='success' size={'lg'} className='fluid ms-auto'> Salvar </Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Form>
                <div>Desenho</div>
                {fishboneChart()}
            </Card>
    )
}