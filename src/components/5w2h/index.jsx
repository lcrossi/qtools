import React from 'react'
import { useState, useEffect, useContext } from "react"
import { ToolsContext } from '../../context/toolsContext';
import DropdownProblems from './dropdown';
import ProbsTable from './table';
import { Row, Col, Container, Card, Button, Modal } from 'react-bootstrap'

export default function Tool5w2h() {
    const [ notReadyToExport, setNotReadyToExport ] = useState(true)
    const [ selectsData, setSelectsData ] = useState([])
    const [ tableData, setTableData ] = useState([])
    const [ showHideTable, setShowHideTable ] = useState('hide')
    const [ showHideAcc, setShowHideAcc ] = useState('show')
    const [ saveEditBtn, setSaveEditBtn ] = useState('Salvar')
    const [ showModalEdition, setShowModalEdition ] = useState(false)
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
            setSelectsData(contextGUTData)
        }
    },[contextGUTData])

    function handleModal() {
        setShowModalEdition(true)
        console.log(showModalEdition)
    }

    function modalDecision(decision) {
        if (decision == 'cancelar') {
            setShowModalEdition(false)
        } else {
            setNotReadyToExport(true)
            setShowHideTable('hide')
            setShowHideAcc('show')
            setSaveEditBtn('Salvar')
            setShowModalEdition(false)
        }
    }

    function handleInputChange(e) {
        console.log('handling')
        console.log(e.target.checked)
        let checked = e.target.checked
        let value = e.target.value
        if (checked) { //inclusão ações
            let aux = tableData
            aux.push(value)
            setTableData(aux)
            console.log(aux)
        } else { //deleção ações
            for(let i = 1; i<=7; i++){ //limpando valores dos campos para não haver sobreposição
                document.getElementById(`input-5w2h-${i}-${tableData.indexOf(value)}`).value = ""
            }
            let aux = tableData
            let index = aux.indexOf(value)
            aux.splice(index, 1)
            setTableData(aux)
            console.log(aux)
        }
    }

    function handleTableChange(e) {
        e.preventDefault()
    }

    function handleSalvar() {
        if(saveEditBtn == 'Salvar') {
            setNotReadyToExport(false)
            setShowHideAcc('hide')
            setShowHideTable('show')
            setSaveEditBtn('Editar')
        } else {
            handleModal()
        }
    }

    return (
        <>
        <Modal size="sm" show={showModalEdition} onHide={() => setShowModalEdition(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Deseja alterar a seleção?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Os dados da tabela podem ser perdidos...</p>
            </Modal.Body>
            <Modal.Footer style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="secondary" onClick={() => modalDecision('cancelar')}>Cancelar</Button>
                <Button variant="warning" onClick={() => modalDecision('continuar')}>Continuar</Button>
            </Modal.Footer>
        </Modal>
        <Card className={`p-3 mb-4`} style={{marginRight: '2vw', marginTop: 20}}>
            <Container fluid style={{marginTop: 30, marginBottom: 25}}>
                <Row>
                    <Col>
                        <div className={`PqsFormHeader`}>
                            <h2 className='mb-1'>5W2H</h2>
                        </div>
                    </Col>
                </Row>
                <Row className={showHideAcc} style={{marginTop: 20}}>
                    <DropdownProblems onChange={handleInputChange} selectsData={selectsData}/>
                </Row>
                <Row className={showHideTable} style={{textAlign: 'center', marginTop: 50}}>
                    <ProbsTable tableData={tableData} onChange={handleTableChange}/>
                </Row>
                <Row style={{textAlign: 'center', marginTop: 50}}>
                    <Col></Col>
                    <Col>
                        <Button 
                            onClick={handleSalvar} 
                            variant='success' 
                            className='fluid ms-auto'> 
                            { saveEditBtn } 
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