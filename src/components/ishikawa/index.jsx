import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Row, Card, Col, Container, Dropdown } from 'react-bootstrap'
import Fishbone from '@hophiphip/react-fishbone';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ishikawa.css'

export default function Ishikawa() {
    const [showOrHide, setShowOrHide] = useState('show')
    const [renderIshChart, setRenderIshChart] = useState(false)
    const [btnLabel, setBtnLabel] = useState('Salvar')
    const [ishItems, setIshItems] = useState(0)
    const [ishPrincipal, setIshPrincipal] = useState('Prob principal')
    const [ishMetodo, setIshMetodo] = useState([])
    const [fishboneChartMinWidth, setFishboneChartMinWidth] = useState(900)
    
    /* useEffect(() => {
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
    }, []) */

    function handleInputChange(type, value) {
        if (type == 'problemaPrincipal') {
            setIshPrincipal(value)
        }

        if (type == 'metodo') {
            setIshMetodo(ishMetodo.push({"name": value}))
            console.log("metodo changed", ishMetodo)
        }
    }

    function loadIshikawa() {
        if (btnLabel == 'Salvar') {
            setShowOrHide('hide')
            setBtnLabel('Editar')
            setIshItems ({
                "name": ishPrincipal,
                "children": [
                    {
                        "name": "Método",
                        "children": ishMetodo,
                    },
                    {
                        "name": "Mão de Obra",
                        "children": [

                            {"name": "Shifts"},
                            {"name": "Training"},
                            {"name": "Operators"}
                        ]
                    },
                    {
                        "name": "Material",
                        "children": [
                            {"name": "Brake"},
                            {"name": "Angle Angle Angle AngleAngle AngleAngle Angle AngleAngle"},
                        ]
                    },
                    {
                        "name": "Máquina",
                        "children": [
                            {
                                "name": "Quality",
                                "children": [
                                    {"name": "Delivery"},
                                ]
                            },
                        ]
                    },
                    {
                        "name": "Meio Ambiente",
                        "children": [
                            {
                                "name": "Quality",
                                "children": [
                                    {"name": "Delivery"},
                                ]
                            },
                        ]
                    },
                    {
                        "name": "Meio de Medição",
                        "children": [
                            {
                                "name": "Quality",
                                "children": [
                                    {"name": "Delivery"},
                                ]
                            },
                        ]
                    },
                ]
            })
            console.log(ishItems)
            setRenderIshChart(true)
        } else {
            setShowOrHide('show')
            setBtnLabel('Salvar')
            setRenderIshChart(false)
        }
    }

    function fishboneChart() {
        if (renderIshChart == true) {
            return (
                <Fishbone
                    items={ishItems}
                    wrapperStyle={{ 
                        minWidth: `${fishboneChartMinWidth}px`,
                        width: '100%',
                        height: '90vh',
                        backgroundColor: 'rgb(225, 225, 225)',
                    }}
                    linesConfig={[
                        { color: "#000", strokeWidthPx: 2 }, /* Linha principal */
                        { color: "#333", strokeWidthPx: 1 }, /* Linhas secundárias dos M's */
                        { color: "#666", strokeWidthPx: 0.8 }, /* Setinhas probs */
                    ]}
                    nodesConfig={[
                        { color: "#000", fontSizeEm: 1.5 }, /* Txt prob principal */
                        { color: "#111", fontSizeEm: 1.1 }, /* Txt M's */
                        { color: "#444", fontSizeEm: 0.8 }, /* Txt Problemas */
                        { color: "#888", fontSizeEm: 0.7 }, /* Txt probs dos probs  */
                        { color: "#aaa", fontSizeEm: 0.6 }
                    ]}
                />
            )
        }
    }

    function selectFishboneChartSize(size) {
        size == 'P' ? setFishboneChartMinWidth(800) :
        size == 'M' ? setFishboneChartMinWidth(1150) :
        size == 'G' ? setFishboneChartMinWidth(1500) :
        size == 'GG' ? setFishboneChartMinWidth(2000) : console.log("Erro: Impossivel selecionar o tamanho")
    }

    return (
        <>
            <Card id="ishiForm" className="p-3 mb-4">
                <div className={`ishFormHeader`}>
                    <h2 className='mb-4'>Diagrama de Ishikawa</h2>
                </div>
                <Form className={showOrHide}>
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
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Problema - Gerenciamento</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="Adicione um problema por vez" />
                        <Button variant='primary' className='mb-2'>Adicionar</Button>
                    </Form.Group>
                </Form>
                <Container className='fluid'>
                    <Row style={{textAlign: 'center'}}>
                        <Col>
                            <select id='fishboneChartSizeSelector' className={showOrHide} onChange={e => selectFishboneChartSize(e.target.value)}>
                                <option defaultValue={null}>
                                    Selecionar tamanho
                                </option>
                                <option key={1} value="P">Pequeno</option>
                                <option key={2} value="M">Médio</option>
                                <option key={3} value="G">Grande</option>
                                <option key={4} value="GG">Extra Grande</option>
                            </select>
                        </Col>
                        <Col>
                            <Button 
                                onClick={() => loadIshikawa(true)} 
                                variant='success' 
                                className='fluid ms-auto'> 
                                { btnLabel } 
                            </Button>
                        </Col>
                        <Col>
                            <Button 
                                onClick={() => console.log("Proximo")} 
                                variant='primary' 
                                className='fluid ms-auto'> 
                                {"Próximo >"}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
            {fishboneChart()}
    </>
    )
}