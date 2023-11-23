import React, { useState, useContext, useEffect } from 'react'
import { Container, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../components/navbar'
import Ishikawa from '../../components/ishikawa'
import Pqs from '../../components/5pqs'
import { ToolsContext } from '../../context/toolsContext'
import './tools.css'



export default function Tools() {
    const [showHidePqs, setShowHidePqs] = useState('show')
    const [ stage, setStage] = useState('Ishikawa')
    const [ contextIshikawaData, setContextIshikawaData ] = useState({'name': ''})
    const [ context5PqsData, setContext5PqsData, ] = useState({})

    return(
        <>
        <ToolsContext.Provider value={{ 
            stage, setStage,
            contextIshikawaData, setContextIshikawaData,
            context5PqsData, setContext5PqsData,
        }}>
            <Navbar/>
            <div className='toolsContainer'>
                <Stack >
                    {`Etapa: ${stage}`}
                    <div className="ms-3"><Ishikawa /></div> 
                    <div className={`ms-3 ${showHidePqs}`}><Pqs /></div> 
                </Stack>
            </div>
        </ToolsContext.Provider>
        </>
    )
}