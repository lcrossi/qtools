import React from 'react'
import { ListGroup, Badge} from 'react-bootstrap'

export default function TierList({items}){
    
    function list() {
        if(items){
            //primeiramente ordenar
            let auxArray = items
            auxArray.map((item) => {
                item.gut = item.g * item.u * item.t
                item.order = 0
            })
            console.log("ordered array", auxArray)

            /* auxArray.forEach(obj1 => {
                auxArray.forEach(obj2 => {
                    if(obj1 < obj2)
                })
            }) */
            let i = 0
            let j = 0
            let n = items.length
            let aux
            let swapped = false
            for (i = 0; i < n - 1; i++) {
                swapped = false;
                for (j = 0; j < n - i - 1; j++) {
                    if (auxArray[j].gut < auxArray[j + 1].gut) {
                        aux = auxArray[j]
                        auxArray[j] = auxArray[j + 1]
                        auxArray[j + 1] = aux
                        swapped = true;
                    }
                }
         
                // If no two elements were swapped
                // by inner loop, then break
                if (swapped == false)
                    break;
            }
            console.log("ordered array", auxArray)

            let tierList = auxArray.map((item, idx) => {
                return (
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={idx}
                    >
                        <Badge bg="primary" pill>
                            {` #${idx+1}`}
                        </Badge>
                        <div className="ms-2">
                            <div className="md-5"></div>{item.name}
                        </div>
                        <Badge bg="secondary" pill>
                            {`GUT = ${ item.g * item.u * item.t }`}
                        </Badge>
                    </ListGroup.Item>
                )
            })
            return tierList
        }
    }

    return(
        <ListGroup as="ol">
            <ListGroup.Item
                variant='secondary'
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">GUT Ranking</div>
                </div>
            </ListGroup.Item>
                {list()}
        </ListGroup>
    )
}