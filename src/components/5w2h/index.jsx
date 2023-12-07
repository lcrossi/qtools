import React from 'react'
import { useState, useEffect, useContext } from "react"
import { ToolsContext } from '../../context/toolsContext';
import { Row, Col, Container, Card, Button, Dropdown } from 'react-bootstrap'

export default function Tool5w2h() {
    const [ notReadyToExport, setNotReadyToExport ] = useState(true)
    const [ selectsData, setSelectsData ] = useState([])
    const {
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
        contextGUTData, setContextGUTData,
        showHideGut, setShowHideGut,
        showHide5w2h, setShowHide5w2h,
    } = useContext(ToolsContext)

    useEffect(()=>{
        if(contextGUTData){
            console.log(contextGUTData)
            let aux = []
            /* contextGUTData.map((item, index) => {

            }) */
            setSelectsData(contextGUTData)
        }
    },[contextGUTData])

    function itemsDropDown() {
        if (selectsData) {
            let aux = selectsData.map((item, index) => {
                return (
                    <Dropdown.Item>{`#${index+1} - ${item.name}`}</Dropdown.Item>
                )
            })

            return aux
        } else 
            return null
    }

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
                <Row className='ms-2 mb-3' style={{marginTop: 20}}>
                    <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {itemsDropDown()}
                    </Dropdown.Menu>
                    </Dropdown>
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