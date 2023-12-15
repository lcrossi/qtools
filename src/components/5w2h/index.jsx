import React from 'react'
import { useState, useEffect, useContext } from "react"
import { ToolsContext } from '../../context/toolsContext';
import DropdownProblems from './dropdown';
import ProbsTable from './table';
import { Row, Col, Container, Card, Button, Dropdown, Accordion } from 'react-bootstrap'

export default function Tool5w2h() {
    const [ notReadyToExport, setNotReadyToExport ] = useState(true)
    const [ selectsData, setSelectsData ] = useState([])
    const [ tableData, setTableData ] = useState([])
    const [ dropdownDisabled, setDropdownDisabled ] = useState(false)
    const [ showHideTable, setShowHideTable ] = useState('hide')
    const [ showHideAcc, setShowHideAcc ] = useState('show')
    const [ saveEditBtn, setSaveEditBtn ] = useState('Salvar')
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

    function handleInputChange(e) {
        console.log('handling')
        console.log(e.target.checked)
        let checked = e.target.checked
        let value = e.target.value
        if (checked) {
            let aux = tableData
            aux.push(value)
            setTableData(aux)
            console.log(aux)
        } else {
            let aux = tableData
            let index = aux.indexOf(value)
            aux.splice(index, 1)
            setTableData(aux)
            console.log(aux)
        }

        /*         setDropdownDisabled(true)
        if (e.target.value) {
            if (tableData){
                console.log('handled tdata', tableData)
                if(tableData.indexOf(e.target.value) < 0){
                    let aux = tableData
                    aux.push(e.target.value)
                    setTableData(aux)
                }
            } else {
                console.log('else')
                setTableData(e.target.value)
            }
        } else console.log('selecao invalida') */
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
            setNotReadyToExport(true)
            setShowHideTable('hide')
            setShowHideAcc('show')
            setSaveEditBtn('Salvar')
        }
    }

    return (
        <>
        <Card className={`p-3 mb-4`} style={{marginRight: '2vw'}}>
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