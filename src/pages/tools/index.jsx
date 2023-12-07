import React, { useState, useContext, useEffect } from 'react'
import { Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../components/navbar'
import Ishikawa from '../../components/ishikawa'
import Pqs from '../../components/5pqs'
import Gut from '../../components/GUT'
import Tool5w2h from '../../components/5w2h'
import { ToolsContext } from '../../context/toolsContext'
import './tools.css'



export default function Tools() {
    const [ showHidePqs, setShowHidePqs ] = useState('hide')
    const [ showHideGut, setShowHideGut ] = useState('hide')
    const [ showHide5w2h, setShowHide5w2h ] = useState('show')
    const [ stage, setStage] = useState('Ishikawa')
    const [ contextIshikawaData, setContextIshikawaData ] = useState({'name': ''})
    const [ context5PqsData, setContext5PqsData ] = useState()
    const [ contextGUTData, setContextGUTData ] = useState()

    return(
        <>
        <ToolsContext.Provider value={{ 
            stage, setStage,
            contextIshikawaData, setContextIshikawaData,
            context5PqsData, setContext5PqsData,
            contextGUTData, setContextGUTData,

            showHidePqs, setShowHidePqs,
            showHideGut, setShowHideGut,
            showHide5w2h, setShowHide5w2h,
        }}>
            <Navbar/>
            <div className='toolsContainer'>
                <Stack >
                    {`Etapa: ${stage}`}
                    <div className="ms-3"><Ishikawa /></div> 
                    <div className={`ms-3 ${showHidePqs}`}><Pqs /></div> 
                    <div className={`ms-3 ${showHideGut}`}><Gut /></div> 
                    <div className={`ms-3 ${showHide5w2h}`}><Tool5w2h /></div> 
                </Stack>
            </div>
        </ToolsContext.Provider>
        </>
    )
}