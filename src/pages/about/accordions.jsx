import React from 'react'
import { Accordion, Figure } from 'react-bootstrap'

export default function AboutAccordion({header, text, img}) {

    return (
        <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 style={{color: '#696767'}}>{header}</h4></Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <div style={{textAlign: 'center'}}>
                                <Figure.Image src={img} width={'90%'}/>
                            </div>
                            <div style={{fontSize: 18}}>{text}</div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
    )
}