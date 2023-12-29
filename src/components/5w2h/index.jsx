import React from 'react'
import { useState, useEffect, useContext, useRef } from "react"
import { ToolsContext } from '../../context/toolsContext';
import DropdownProblems from './dropdown';
import ProbsTable from './table';
import ExportToExcel from './service/exportToExcel';
import { Row, Col, Container, Card, Button, Modal, ModalBody, Figure } from 'react-bootstrap'
import img from '../../assets/5w2h-exp.png'

export default function Tool5w2h() {
    const [ notReadyToExport, setNotReadyToExport ] = useState(true)
    const [ selectsData, setSelectsData ] = useState([])
    const [ tableData, setTableData ] = useState([])
    const [ showHideTable, setShowHideTable ] = useState('hide')
    const [ showHideAcc, setShowHideAcc ] = useState('show')
    const [ saveEditBtn, setSaveEditBtn ] = useState('Salvar')
    const [ showModalEdition, setShowModalEdition ] = useState(false)
    const [ showModalInfo, setShowModalInfo ] = useState(false)
    const [ exported, setExported ] = useState(0)
    const tRef = useRef(null);
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
                document.getElementById(`input-5w2h-${i}-${tableData.indexOf(value)}`) ?
                    document.getElementById(`input-5w2h-${i}-${tableData.indexOf(value)}`).value = "" :
                    null
            }
            let aux = tableData
            let index = aux.indexOf(value)
            aux.splice(index, 1)
            setTableData(aux)
            console.log(aux)
        }
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
        <Modal size="md" show={showModalInfo} onHide={() => setShowModalInfo(false)}>
            <Modal.Header closeButton>
                <Modal.Title>O que é 5W2H?</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Figure.Image
                    width={'100%'}
                    alt="logo q-tools"
                    src={img}
                    />
                <p>
                    É um método que busca organizar e garantir que um conjunto de ações sejam planejadas e 
                    conduzidas, eliminando dúvidas. Sendo muito utilizado em projetos de melhoria para ter 
                    objetivos e responsabilidades bem definidas mesmo ao longo do tempo.
                    O termo 5W + 2H surge das iniciais das palavras em inglês que guiam a elaboração 
                    do formulário que a ferramenta propõe:
                </p>
                <ul style={{marginTop: 12}}>
                    <li>
                        WHAT (o quê?);
                    </li>
                    <li>
                        WHERE (onde?);
                    </li>
                    <li>
                        WHY (por quê?);
                    </li>
                    <li>
                        WHO (quem?);
                    </li>
                    <li>
                        WHEN (quando?);
                    </li>
                    <li>
                        HOW (como?);
                    </li>
                    <li>
                        HOW MUCH (quanto custa?).
                    </li>
                </ul>
                <p>Os itens costumam ser preenchidos conforme o quadro acima para maior organização.</p>
            </ModalBody>
        </Modal>
        <Card className={`p-3 mb-4`} style={{marginRight: '2vw', marginTop: 20}}>
            <Container fluid style={{marginTop: 30, marginBottom: 25}}>
                <Row>
                    <Col>
                        <div className={`PqsFormHeader`}>
                            <h2 className='mb-1'>5W2H</h2>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col style={{textAlign: 'right', marginRight: '10vw'}}>
                        <Button onClick={() => setShowModalInfo(true)} variant='outline-info' size='sm'>Ajuda</Button>
                    </Col>
                </Row>
                <Row className={showHideAcc} style={{marginTop: 20}}>
                    <p>Selecione os problemas para elaborar ações corretivas:</p>
                    <DropdownProblems onChange={handleInputChange} selectsData={selectsData}/>
                </Row>
                <Row className={showHideTable} style={{textAlign: 'center', marginTop: 50}}>
                    <p style={{textAlign: 'left'}}>Preencha os campos de forma a responder as perguntas da respectiva coluna:</p>
                    <ProbsTable tableData={tableData} />
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
                        <ExportToExcel 
                            tableData={tableData}
                        />
                    </Col>
                </Row>
            </Container>
        </Card>
        </>
    )
}