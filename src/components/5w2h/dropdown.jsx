import React from 'react'
import { Col, Accordion, ListGroup, Badge, Form } from 'react-bootstrap'

export default function DropdownProblems({ selectsData, onChange = () => {} }){

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
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Selecione as ações...</Accordion.Header>
                    <Accordion.Body>
                    <ListGroup variant="flush">
                        {accordinItems()}
                    </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    )
}