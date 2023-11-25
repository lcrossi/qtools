import React, { useState, useEffect, useContext } from 'react'
import { ToolsContext } from '../../context/toolsContext';

import { Button, Form, Row, ListGroup, Col, Container, Badge, Card} from 'react-bootstrap'
import './gut.css'

export default function Gut() {
    const [ gutInputs, setGutInputs ] = useState()
    const {
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
        contextGUTData, setContextGUTData,
    } = useContext(ToolsContext)
    
    useEffect(() => {
        if (context5PqsData){
            console.log('5pq context ', context5PqsData)
            setGutInputs(
                // estrutura HTMl para cada item que vem por contexto-do ultimo pq adicionado ou problema inicial
                context5PqsData.map((problemObj, index) => {
                    if (problemObj.whys.length == 0) {
                        return (
                            <Form>
                                <Form.Label><h4>{problemObj.problem}</h4></Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="G"
                                            />
                                    </Col>
                                    <Col>
                                        <Form.Control id={`input-U-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="U"
                                            />
                                    </Col>
                                    <Col>
                                        <Form.Control id={`input-T-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="T"
                                            />
                                    </Col>
                                </Row>
                            </Form>
                        )
                    } else {
                        problemObj.whys.map((pq, pqIndex) => {
                            console.log('tem why', pq, pqIndex)
                            if(pqIndex == problemObj.whys.length-1) {
                                return (
                                    <Form>
                                        <Form.Label style={{marginTop: 40}}><h4>{pq}</h4></Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                                    onChange={e => handleInputChange(e.target.value)}
                                                    onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                                    placeholder="G"
                                                    />
                                            </Col>
                                            <Col>
                                                <Form.Control id={`input-U-${index}`} className='mb-2 gutFactors' type="number" 
                                                    onChange={e => handleInputChange(e.target.value)}
                                                    onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                                    placeholder="U"
                                                    />
                                            </Col>
                                            <Col>
                                                <Form.Control id={`input-T-${index}`} className='mb-2 gutFactors' type="number" 
                                                    onChange={e => handleInputChange(e.target.value)}
                                                    onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                                    placeholder="T"
                                                    />
                                            </Col>
                                        </Row>
                                    </Form>
                                )
                            } else {
                                return <div>
                                    problema
                                </div>
                            }
                        })
                    }
                    
                })
            )
        }
    }, [context5PqsData])


    return (
        <>
        <Card>
            <Container fluid style={{marginTop: 30}}>
                <Row>
                    <Col>
                        <div className={`PqsFormHeader`}>
                            <h2 className='mb-4'>GUT</h2>
                        </div>
                    </Col>
                </Row> 
                {gutInputs}
            </Container>
        </Card>
        </>
    )
}