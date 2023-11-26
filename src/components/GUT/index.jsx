import React, { useState, useEffect, useContext } from 'react'
import GutChart from './gutChart'
import { ToolsContext } from '../../context/toolsContext';

import { Form, Row, Col, Container, Card, Button } from 'react-bootstrap'
import './gut.css'

export default function Gut() {
    const [ gutInputs, setGutInputs ] = useState()
    const [ gutChartData, setGutChartData ] = useState()
    const [ showOrHide, setShowOrHide ] = useState('show')
    const [ showOrHideChart, setShowOrHideChart ] = useState('show')
    const [ renderGUTChart, setRenderGUTChart ] = useState(false)
    const [ gutInputsAux, setGutInputsAux ] = useState()
    const [ notReadyFor5w2h, setNotReadyFor5w2h ] = useState()
    const [btnLabel, setBtnLabel] = useState('Salvar')
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
                            <Form key={`${index}`} style={{marginTop: 25}}>
                                <Form.Label><h4>{problemObj.problem}</h4></Form.Label>
                                <Row>
                                    <Col className='gutFactorsCols' md='auto'>
                                        <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                            onChange={e => handleInputChange(e.target.value, e.target.id)}
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
                                <Form.Label style={{marginTop: 25}}><h4>{lastPq}</h4></Form.Label>
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

    function loadGut() {
        if (btnLabel == 'Salvar') {
            setShowOrHide('hide')
            setBtnLabel('Editar')
            setGutChartData('dados aqui')
            renderGutChart()
            setRenderGUTChart(true)
        } else {
            setShowOrHide('show')
            setBtnLabel('Salvar')
            setRenderGUTChart(false)
        }
    }

    function handleNextStage() {
        console.log('handle 5w2h')
    }

    function renderGutChart() {
        if (gutChartData) {

            return (<GutChart data={gutChartData} />)
        }
    }


    return (
        <>
        <Card>
            <Container fluid style={{marginTop: 30, marginBottom: 25}}>
                <Row>
                    <Col>
                        <div className={`PqsFormHeader`}>
                            <h2 className='mb-1'>GUT</h2>
                        </div>
                    </Col>
                </Row> 
                <div className={showOrHide}>
                    {gutInputs}
                </div>
                <br />
                <Row className={showOrHideChart}>
                    {renderGutChart()}
                </Row>
                <Row style={{textAlign: 'center', marginTop: 50}}>
                    <Col></Col>
                    <Col>
                        <Button 
                            onClick={() => {loadGut(), setNotReadyFor5w2h(false)}} 
                            variant='success' 
                            className='fluid ms-auto'> 
                            { btnLabel } 
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                            onClick={() => {loadGut(); handleNextStage()}}
                            variant='primary' 
                            className='fluid ms-auto'
                            disabled={notReadyFor5w2h}> 
                            { "Próximo >" }
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Card>
        </>
    )
}