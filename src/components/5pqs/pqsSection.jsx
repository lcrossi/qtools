import React, { UseState, useEffect, useState } from 'react'
import { ListGroup, Badge} from 'react-bootstrap'

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
                                <div style={{color: '#154b9c', marginBottom: 5}}>Por quê?</div>
                                <div className="md-5"></div>{why}
                            </div>
                        </ListGroup.Item>
                    )
                })
                
                return whys
            }
    }

    return(
        <ListGroup as="ol">
            <ListGroup.Item
                variant='warning'
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Problema inicial</div>
                {pqs ? pqs.problem : null}
                </div>
            </ListGroup.Item>
                {list()}
        </ListGroup>
    )
}