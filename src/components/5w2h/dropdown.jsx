import { checkboxClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Col, Accordion, ListGroup, Badge, Form } from 'react-bootstrap'

export default function DropdownProblems({ selectsData, onChange = () => {} }){

    function itemsDropDown() {
        if (selectsData) {
            let aux = selectsData.map((item, index) => {
                const {name} = item
                return (
                    <option key={index} value={name}>{`#${index+1} - ${name}`}</option>
                )
            })

            return aux
        } else 
            return null
    }

    function accordinItems() {
        if (selectsData) {
            let aux = selectsData.map((item, index) => {
                const {name} = item
                return (
                    <ListGroup.Item key={index} value={name} style={{display: 'flex', gap: 22, alignItems: 'center'}}>
                        <Form.Check
                            type={'checkbox'}
                            id={`checkbox-${index+1}`}
                            value={name}
                        />
                        <div>
                            <Badge bg="warning" pill className='mb-1'>
                                {` #${index+1} `}
                            </Badge>
                            <div className="ms-0 me-auto">
                                {`${name}`}
                            </div>
                        </div>
                    </ListGroup.Item>
                )
            })

            return aux
        } else 
            return null
    }


    return(
        <Col className='mb-3' xs={7} onChange={onChange}>
            {/* <select style={{maxWidth: 200}}>
                <option value={""} id="dropdown-basic" disabled={dropdownDisabled}>
                    Selecione...
                </option>
                <option key={'slaaa'} value={'sla ksfghfas isdufa aisydfgyasgfya'}>{`#${1} - ${'sla ksfghfas isdufa aisydfgyasgfya'}`}</option>
                <option key={'slaaa2'} value={'naos '}>{`#${2} - ${'naos '}`}</option>
                <option key={'slaaa3'} value={'eueu'}>{`#${3} - ${'eueu'}`}</option>
                {itemsDropDown()}
            </select> */}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Selecione as ações...</Accordion.Header>
                    <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Form.Check
                            type={'checkbox'}
                            id={`checkbox-${22}`}
                            value={"algum problema"}
                        />
                            <Badge bg="primary" pill>
                            14
                            </Badge>algum problema</ListGroup.Item>
                        <ListGroup.Item>
                        <Form.Check
                            type={'checkbox'}
                            id={`checkbox-${66}`}
                            value={"Dapibus ac facilisis in"}
                        />Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        {accordinItems()}
                    </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    )
}