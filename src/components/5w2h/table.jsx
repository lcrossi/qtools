import React, { useEffect } from 'react'
import { Table, InputGroup, Form } from 'react-bootstrap'

export default function ProbsTable({tableData, onChange = () => {}}){
    useEffect(() => {rows(); console.log(tableData)},[tableData])

    function rows() {
        if (tableData) {
            let rows = tableData.map((row, index) => {
                return (
                    <tr key={index}>
                    <td>{row}</td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea" id={`input-5w2h-1-${index}`}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup >
                            <Form.Control as="textarea" id={`input-5w2h-2-${index}`}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea" id={`input-5w2h-3-${index}`}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea" id={`input-5w2h-4-${index}`}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea" id={`input-5w2h-5-${index}`}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea" id={`input-5w2h-6-${index}`}
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <InputGroup.Text>R$</InputGroup.Text>
                            <Form.Control type='number' id={`input-5w2h-7-${index}`}
                            />
                        </InputGroup>
                    </td>
                </tr>
                )
            })
            console.log(tableData)
            return rows
        }
    }

    return(
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Ações</th>
                    <th>O quê?</th>
                    <th>Quem?</th>
                    <th>Onde?</th>
                    <th>Quando?</th>
                    <th>Por quê?</th>
                    <th>Como?</th>
                    <th>Quanto?</th>
                </tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </Table>
    )
}