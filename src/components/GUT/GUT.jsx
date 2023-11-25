import React, { useState, useContext } from 'react'
import { ToolsContext } from '../../context/toolsContext';

import './gut.css'

export default function Gut() {

    const {
        stage, setStage,
        contextIshikawaData, setContextIshikawaData,
        context5PqsData, setContext5PqsData,
        contextGUTData, setContextGUTData,
    } = useContext(ToolsContext)
    

    return (<>GUT</>)
}