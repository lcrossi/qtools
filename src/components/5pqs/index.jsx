import React, { useState, useEffect, useContext } from 'react'
import { Button, Form, Row, Card, Col, Container, Modal } from 'react-bootstrap'
import { ToolsContext } from '../../context/toolsContext';
import './5pqs.css'

export default function Pqs() {
    const { 
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
    } = useContext(ToolsContext)

    function handleNextStage() {
        setStage('GUT')
        console.log('Indo para GUT')
        console.log(contextIshikawaData)
    }

    return (
        <>
        <Card>
            {`Estagio atual: ${stage} e prob principal: ${contextIshikawaData.name}`}
            <Container fluid>
                <Row>
                    <Col>
                        <div className={`PqsFormHeader`}>
                            <h2 className='mb-4'>5 Porquês</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            onClick={() => console.log()} 
                            variant='secondary' 
                            className='fluid ms-auto'> 
                            {" < "}
                        </Button>
                    </Col>
                    <Col style={{textAlign: 'center'}}>
                    </Col>
                    <Col style={{textAlign: 'right'}}>
                        <Button 
                            onClick={() => console.log()}
                            variant='secondary' 
                            className='fluid ms-auto'> 
                            {" > "}
                        </Button>
                    </Col>
                </Row>
                <Row style={{marginTop: 30}}>
                    {}
                </Row>
                <Row style={{marginTop: 50}}>
                    <button onClick={() => handleNextStage()}>Ir GUT</button>
                </Row>
            </Container>
        </Card>
        </>
    )
}