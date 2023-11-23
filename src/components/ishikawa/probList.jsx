import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function ProbList({props}) {

    let problemsArray = props
    let problemsListObject = []
    function showList() {
        console.log(problemsArray)
        problemsListObject = problemsArray.map((problema, index) => {
            console.log(problema)
            return (<ListGroup.Item as="li" key={index}>{problema.name}</ListGroup.Item>)
        })

        return problemsListObject
    }

    if (problemsArray) {

        return (
            <>
                <ListGroup as="ol" numbered>
                    {showList()}
                </ListGroup>
            </>
        )
    } else {

        return (
            <></>
        )
    }
}