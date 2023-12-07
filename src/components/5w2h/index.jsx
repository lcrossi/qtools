import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { useState } from "react"

export default function Tool5w2h() {
    const [ notReadyToExport, setNotReadyToExport ] = useState(true)


    return (
        <>
        <Card>
            <Container fluid style={{marginTop: 30, marginBottom: 25}}>
                <Row>
                    <Col>
                        <div className={`PqsFormHeader`}>
                            <h2 className='mb-1'>5W2H</h2>
                        </div>
                    </Col>
                </Row> 
                <Row style={{textAlign: 'center', marginTop: 50}}>
                    <Col></Col>
                    <Col>
                        <Button 
                            onClick={() => {setNotReadyToExport(false)}} 
                            variant='success' 
                            className='fluid ms-auto'> 
                            { 'Salvar' } 
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                            onClick={() => {console.log('exportar')}}
                            variant='primary' 
                            className='fluid ms-auto'
                            disabled={notReadyToExport}> 
                            { "Exportar" }
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Card>
        </>
    )
}