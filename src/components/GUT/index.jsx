import React, { useState, useEffect, useContext } from 'react'
import { ToolsContext } from '../../context/toolsContext';

import { Form, Row, Col, Container, Card} from 'react-bootstrap'
import './gut.css'

export default function Gut() {
    const [ gutInputs, setGutInputs ] = useState()
    const [ gutInputsAux, setGutInputsAux ] = useState()
    const {
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
        contextGUTData, setContextGUTData,
    } = useContext(ToolsContext)
    let lastPq = ""

    useEffect(() => {
        if (context5PqsData){
            console.log('5pq context ', context5PqsData)
            setGutInputs(
                // estrutura HTMl para cada item que vem por contexto-do ultimo pq adicionado ou problema inicial
                context5PqsData.map((problemObj, index) => {
                    if (problemObj.whys.length == 0) { //Caso sem pqs cadastrados
                        return (
                            <Form key={`${index}`} style={{marginTop: 30}}>
                                <Form.Label><h4>{problemObj.problem}</h4></Form.Label>
                                <Row>
                                    <Col className='gutFactorsCols' md='auto'>
                                        <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="G"
                                        />
                                        <Form.Control id={`input-U-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputChange(e.target.value)}
                                        onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                        placeholder="U"
                                        />
                                        <Form.Control id={`input-T-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="T"
                                        />
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                            </Form>
                        )
                    } else {
                        lastPq = problemObj.whys[problemObj.whys.length-1] //caso com pqs cadastrados -> resgata o ultimo
                        return (
                            <Form key={`${index}`}>
                                <Form.Label style={{marginTop: 40}}><h4>{lastPq}</h4></Form.Label>
                                <Row>
                                    <Col className='gutFactorsCols' md='auto'>
                                        <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="G"
                                        />
                                        <Form.Control id={`input-U-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="U"
                                        />
                                        <Form.Control id={`input-T-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value)}
                                            onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                            placeholder="T"
                                        />
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                            </Form>
                        )
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