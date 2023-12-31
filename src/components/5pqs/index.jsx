import React, { useState, useEffect, useContext } from 'react'
import { Button, Form, Row, Card, Col, Container, Modal, ModalBody, Figure } from 'react-bootstrap'
import PqsList from './pqsSection';
import { ToolsContext } from '../../context/toolsContext';
import img from '../../assets/pqs-exp.png'
import './5pqs.css'

export default function Pqs() {
    const [ allProblems, setAllProblems ] = useState([])
    const [ pqsToShow, setPqsToShow ] = useState()
    const [ disableNextStage, setDisableNextStage ] = useState(true)
    const [ showPorques, setShowPorques ] = useState(<></>)
    const [ inputValue, setInputValue ] = useState('')
    const [ currentProblemNumber, setCurrentProblemNumber ] = useState(0)
    const [ showModalInfo, setShowModalInfo ] = useState(false)
    const { 
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
        showHidePqs, setShowHidePqs,
        showHideGut, setShowHideGut
    } = useContext(ToolsContext)
    var allProbsAux = []

    useEffect(() => {
        if(contextIshikawaData.children) {
            contextIshikawaData.children.forEach(category => { //camada das categorias
                category.children.forEach((problemObj, index) => {
                    console.log(problemObj.name)
                    allProbsAux.push({
                        'category': category.name,
                        'problem': problemObj.name,
                        'id': category.name+index,
                        'whys': []
                    })
                });
            });
            setPqsToShow(allProbsAux[0])
            console.log(allProbsAux)
            setAllProblems(allProbsAux)
        }
    },[contextIshikawaData])

    function handleCurrentProblem(direction) {
        if(direction == 'next') {
            if (allProblems[currentProblemNumber+1]) {
                setCurrentProblemNumber(currentProblemNumber+1)
                setPqsToShow(allProblems[currentProblemNumber+1])
            }
        } else {
            if(allProblems[currentProblemNumber-1]) {
                setCurrentProblemNumber(currentProblemNumber-1)
                setPqsToShow(allProblems[currentProblemNumber-1])
            }
        }
    }

    function handleInputChange(value) {
        setInputValue(value)
    }

    function addPq() {
        let obj = allProblems
        if (inputValue && !inputValue.match(/^(\s)+$/)){
            obj[currentProblemNumber].whys.push(inputValue)
            setAllProblems(obj)
            setInputValue('')
            setPqsToShow(allProblems[currentProblemNumber])
            setDisableNextStage(false)
            console.log(allProblems)
        }
    }

    function deletePqs() {
        let obj = allProblems
            obj[currentProblemNumber].whys = []
            setAllProblems(obj)
            setInputValue(' ')
            setPqsToShow(allProblems[currentProblemNumber])
            console.log(allProblems)
    }

    function handleNextStage() {
        setStage('GUT')
        setContext5PqsData(allProblems)
        setShowHidePqs('hide')
        setShowHideGut('show')
    }


    return (
        <>
        <Modal size="md" show={showModalInfo} onHide={() => setShowModalInfo(false)}>
            <Modal.Header closeButton>
                <Modal.Title>O que é 5 Porquês?</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Figure.Image
                    width={'100%'}
                    alt="logo q-tools"
                    src={img}
                    />
                <p>
                    A ferramenta 5 Porquês consiste em perguntar o porquê do problema analisado algumas vezes, até que se
                    chegue a um problema que pode ser considerado como raiz, ou seja, o real causador. O Q-Tools não 
                    limita a perguntar 5 vezes, itere o quanto achar necessário.
                </p>
            </ModalBody>
        </Modal>
        <Card className={`p-3 mb-4`} style={{marginRight: '2vw', marginTop: 20}}>
            <Container fluid style={{marginTop: 30}}>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className={`PqsFormHeader`} style={{color: '#1b325f', display: 'flex'}}>
                                    <h2 className='mb-4' style={{marginRight: 16}}>5 Porquês</h2>
                                    <Button onClick={() => setShowModalInfo(true)} variant='outline-info' size='sm'>?</Button>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <p>Adicione o porquê de cada problema listado quantas vezes for necessário 
                        para chegar a uma possível causa raiz: 
                    </p>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={7}>
                        {<PqsList pqs={pqsToShow}/>}
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            onClick={() => handleCurrentProblem('prev')} 
                            variant='secondary' 
                            className='fluid ms-auto'> 
                            {" < "}
                        </Button>
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Button 
                            onClick={() => handleCurrentProblem('next')}
                            variant='secondary' 
                            className='fluid ms-auto'> 
                            {" > "}
                        </Button>
                    </Col>
                </Row>
                <Form>
                    <Form.Group className="mb-5">
                        <Row style={{marginTop: 30}}>
                            <Col>
                                <Form.Label><h5>Por quê?</h5></Form.Label>
                                <Form.Control id='input_pqs' className='mb-2' type="text" 
                                    onChange={e => handleInputChange(e.target.value)}
                                    value={inputValue}
                                    onKeyDown={e => e.key === "Enter" ? addPq() : null}
                                    placeholder="Insira o porquê..."
                                    />
                                <Form.Control id='input_pqs' className='hide' type="text" 
                                    onChange={e => handleInputChange(e.target.value)}
                                    value={inputValue}
                                    onKeyDown={e => e.key === "Enter" ? addPq() : null}
                                    placeholder="Insira o porquê..."
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={() => addPq()} variant='outline-primary' className='mb-2'>Adicionar</Button>
                            </Col>
                            <Col></Col>
                            <Col style={{display: 'flex', justifyContent: 'right'}}>
                                <Button onClick={() => deletePqs()} variant='outline-danger' className='mb-2'>Limpar</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
                <Row style={{marginTop: 50}}>
                    <Col></Col>
                    <Col style={{display: 'flex', justifyContent: 'center'}} className='mb-4'>
                        <Button disabled={disableNextStage} onClick={() => handleNextStage()}>Próximo { " >" }</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Card>
        </>
    )
}