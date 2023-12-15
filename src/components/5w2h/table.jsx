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
                            <Form.Control as="textarea"
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup >
                            <Form.Control as="textarea"
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea"
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea"
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea"
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control as="textarea"
                            />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <InputGroup.Text>R$</InputGroup.Text>
                            <Form.Control type='number'
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