import React, { useState, useEffect, useContext } from 'react'
import GutChart from './gutChart'
import TierList from './tierList';
import { ToolsContext } from '../../context/toolsContext';
import { Form, Row, Col, Container, Card, Button } from 'react-bootstrap'
import './gut.css'

export default function Gut() {
    const [ gutChartData, setGutChartData ] = useState([])
    const [ showOrHideForm, setShowOrHideForm ] = useState('show')
    const [ showOrHideChart, setShowOrHideChart ] = useState('hide')
    const [ notReadyFor5w2h, setNotReadyFor5w2h ] = useState()
    const [btnLabel, setBtnLabel] = useState('Salvar')
    const {
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
        contextGUTData, setContextGUTData,
        showHideGut, setShowHideGut,
        showHide5w2h, setShowHide5w2h,
    } = useContext(ToolsContext)
    var lastPq = ""
    var auxArray = []
    var chartDataAux = []

    useEffect(() => {
        if (context5PqsData){
            console.log('5pq context ', context5PqsData)
            updateGutData()
        }
    }, [context5PqsData])

    function gutInputs() {
        if (context5PqsData){
            var formulario = context5PqsData.map((problemObj, index) => {
                if (problemObj.whys.length == 0) { //Caso sem pqs cadastrados
                    chartDataAux.push({
                        name: problemObj.problem,
                        g: 0,
                        u: 0,
                        t: 0,
                    })
                    return (
                        <Form key={`${index}`} style={{marginTop: 25}}>
                            <Form.Label><h4>{problemObj.problem}</h4></Form.Label>
                            <Row>
                                <Col className='gutFactorsCols' md='auto'>
                                    <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputValidation(index,"G", e, problemObj.problem, gutChartData)}
                                        onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                        placeholder="G"
                                    />
                                    <Form.Control id={`input-U-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputValidation(index, "U", e, problemObj.problem, gutChartData)}
                                        onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                        placeholder="U"
                                    />
                                    <Form.Control id={`input-T-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputValidation(index, "T", e, problemObj.problem, gutChartData)}
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
                    chartDataAux.push({
                        name: lastPq,
                        g: 0,
                        u: 0,
                        t: 0,
                    })
                    return (
                        <Form key={`${index}`}>
                            <Form.Label style={{marginTop: 25}}><h4>{lastPq}</h4></Form.Label>
                            <Row>
                                <Col className='gutFactorsCols' md='auto'>
                                    <Form.Control id={`input-G-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputValidation(index, "G", e, lastPq, gutChartData)}
                                        onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                        placeholder="G"
                                    />
                                    <Form.Control id={`input-U-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputValidation(index, "U", e, lastPq, gutChartData)}
                                        onKeyDown={e => e.key === "Enter" ? console.log("ënter") : null}
                                        placeholder="U"
                                    />
                                    <Form.Control id={`input-T-${index}`} className='mb-2 gutFactors' type="number" 
                                        onChange={e => handleInputValidation(index, "T", e, lastPq, gutChartData)}
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
        }

        return formulario
    }

    function loadGut() {
        if (btnLabel == 'Salvar') {
            setShowOrHideForm('hide')
            setShowOrHideChart('show')
            setBtnLabel('Editar')
        } else {
            setShowOrHideForm('show')
            setShowOrHideChart('hide')
            setBtnLabel('Salvar')
        }
    }

    function renderTierList() {
        if (gutChartData) {
            return (<TierList items={gutChartData} />)
        }
    }

    function renderGutChart() {
        if (gutChartData) {
            return (<GutChart data={gutChartData} />)
        }
    }

    function updateGutData() {
        let aux = []
        context5PqsData.forEach(problemObj => {
            if (problemObj.whys.length == 0) { //Caso sem pqs cadastrados
                aux.push({
                    name: problemObj.problem,
                    g: 0,
                    u: 0,
                    t: 0,
                })
                setGutChartData(aux) 
            } else {
                lastPq = problemObj.whys[problemObj.whys.length-1] //caso com pqs cadastrados -> resgata o ultimo
                aux.push({
                    name: lastPq,
                    g: 0,
                    u: 0,
                    t: 0,
                })
                setGutChartData(aux)
            }
        });
        setGutChartData(aux)
    }

    function handleInputChange(index, letter, parameterValue){
        let auxArray = gutChartData
        if(letter=='G'){
            auxArray[index].g = Number(parameterValue)
        }
        if(letter=='U'){
            auxArray[index].u = Number(parameterValue)
        }
        if(letter=='T'){
            auxArray[index].t = Number(parameterValue)
        }
        setGutChartData(auxArray)
    }

    function handleInputValidation(index, letter, event, problem, data) {
        console.log('data', data)
        if(event.target.value > 5){
            event.target.value = 5; 
            handleInputChange(index, letter, event.target.value)
        } else{
            if(event.target.value < 0){
                event.target.value = 0;
                handleInputChange(index, letter, event.target.value)
            } else {
                if (event.target.value == "") {
                    event.target.value = 0;
                    handleInputChange(index, letter, event.target.value)
                }
                else{
                    handleInputChange(index, letter, event.target.value)
                }
            }
        }
    }

    function handleNextStage() {
        setStage("5w2h")
        setContextGUTData(gutChartData)
        setShowHideGut('hide')
        setShowHide5w2h('show')
        console.log('handle 5w2h')
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
                <div className={showOrHideForm}>
                    {gutInputs()}
                </div>
                <br />
                <Row className={showOrHideChart}>
                    <Col className='ms-2'>
                        {renderTierList()}
                    </Col>
                </Row>
                <Row className={showOrHideChart} style={{marginTop: 50}}>
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