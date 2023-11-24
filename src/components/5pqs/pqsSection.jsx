import React, { UseState, useEffect, useState } from 'react'
import { Button, Form, Row, ListGroup, Col, Container, Badge} from 'react-bootstrap'

export default function PqsList({pqs}) {

    function list() {
        if(pqs)
            if(pqs.whys) {
                let whys = pqs.whys.map((why, idx) => {
                    return (
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            key={idx}
                        >
                            <div className="ms-2">
                                <div style={{color: '#154b9c'}}>Por quê?</div>
                                <br />
                                <div className="md-5"></div>{why}
                            </div>
                            <Badge bg="primary" pill>
                                {'   '}
                            </Badge>
                        </ListGroup.Item>
                    )
                })
                
                return whys
            }
    }

    console.log('pqs recebidas: ', pqs)
    return(
        <ListGroup as="ol">
            {/* <h4>{pqs ? pqs.problem : null}</h4> */}
            <ListGroup.Item
                variant='warning'
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Problema inicial</div>
                {pqs ? pqs.problem : null}
                </div>
                <Badge bg="warning" pill>
                    {"   "}
                </Badge>
            </ListGroup.Item>
                {list()}
        </ListGroup>
    )
}