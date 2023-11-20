import React, { useState, useEffect, useContext } from 'react'
import { Button, Form, Row, Card, Col, Container, Modal } from 'react-bootstrap'
import { ToolsContext } from '../../context/toolsContext';
import './5pqs.css'

export default function Pqs() {
    const { 
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
    } = useContext(ToolsContext)

    function handleNextStage() {
        setStage('GUT')
        console.log('Indo para GUT')
    }

    return (
        <>
        <Card>
            {`Estagio atual: ${stage} e prob principal: ${contextIshikawaData.name}`}
            <button onClick={() => handleNextStage()}>Ir GUT</button>
        </Card>
        </>
    )
}