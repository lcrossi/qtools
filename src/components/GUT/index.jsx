import React, { useState, useEffect, useContext } from 'react'
import GutChart from './gutChart'
import TierList from './tierList';
import { ToolsContext } from '../../context/toolsContext';
import { Form, Row, Col, Container, Card, Button, Modal, Figure, ModalBody, Tooltip  } from 'react-bootstrap'
import img from '../../assets/gut-exp.png'
import imgGutParams from '../../assets/gut-params.png'
import './gut.css'

export default function Gut() {
    const [ gutChartData, setGutChartData ] = useState([])
    const [ showOrHideForm, setShowOrHideForm ] = useState('show')
    const [ showOrHideChart, setShowOrHideChart ] = useState('hide')
    const [ notReadyFor5w2h, setNotReadyFor5w2h ] = useState()
    const [ btnLabel, setBtnLabel   ] = useState('Salvar')
    const [ showModalInfo, setShowModalInfo ] = useState(false)
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
            if(event.target.value <= 0){
                event.target.value = 1;
                handleInputChange(index, letter, event.target.value)
            } else {
                if (event.target.value == "") {
                    event.target.value = 1;
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
        <Modal size="lg" show={showModalInfo} onHide={() => setShowModalInfo(false)}>
            <Modal.Header closeButton>
                <Modal.Title>O que é a matriz GUT?</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Figure.Image
                    width={'100%'}
                    alt="logo q-tools"
                    src={img}
                    />
                <p>
                    A <b>Matriz GUT</b> é uma ferramenta que fornece apoio na ordenação de soluções para problemas, 
                    sendo também referida como <b>Matriz de Prioridades</b>. A análise GUT é amplamente empregada 
                    em situações que demandam orientação para a tomada de decisões, especialmente 
                    aquelas que envolvem a análise de múltiplos problemas. Por meio do sistema GUT, 
                    é viável categorizar cada problema com base em sua Gravidade, Urgência e Tendência, 
                    resultando na sigla GUT. Esta etapa é essencial para apoiar a elaboração de planos de ação, 
                    com o ranqueamento feito, sabe-se quais são os problemas mais severos e que devem ser 
                    resolvidos primeiro, permitindo resultados sensíveis em um menor período de tempo. 
                </p>
                <div>
                    Os indices G, U e T <b>variam de 1 a 5 pontos</b>, de acordo com sua severidade:
                    <div style={{textAlign: 'center'}}>
                        <Figure.Image src={imgGutParams} width={'100%'}/>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <a style={{fontSize: 12}} href='https://www.revistamanutencao.com.br/literatura/tecnica/gestao-de-ativos/o-uso-da-matriz-gut-nos-processos-industriais.html'>
                            Fonte: REVISTA MANUTENÇÃO, 2023
                        </a>
                    </div>
                </div>
            </ModalBody>
        </Modal>
        <Card className={`p-3 mb-4`} style={{marginRight: '2vw', marginTop: 20}}>
            <Container fluid style={{marginTop: 30, marginBottom: 25}}>
                <Row>
                    <Col ms='auto'>
                        <div style={{color: '#1b325f', display: 'flex'}}>
                            <h2 className='mb-1 ms-2 mx-3'>GUT</h2>
                            <Button onClick={() => setShowModalInfo(true)} variant='outline-info' size='sm'>?</Button>
                        </div>
                    </Col>
                </Row> 
                <div className={`${showOrHideForm} ms-2`}>
                    <div>Insira a pontuação GUT (Gravidade, Urgência, Tendência) para cada problema:</div>
                    {gutInputs()}
                </div>
                <br />
                <Row className={showOrHideChart}>
                    <Col className='ms-2'>
                        {renderTierList()}
                    </Col>
                </Row>
                <Row className={showOrHideChart} style={{marginTop: 20}}>
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