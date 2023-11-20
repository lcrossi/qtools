import React, { useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../components/navbar'
import Ishikawa from '../../components/ishikawa'
import Pqs from '../../components/5pqs'
import './tools.css'


export default function Tools() {
    const [showHidePqs, setShowHidePqs] = useState('show')

    return(
        <>
        <Navbar/>
        <div className='toolsContainer'>
            <Stack >
                <div className="ms-3"><Ishikawa /></div> 
                <div className={`ms-3 ${showHidePqs}`}><Pqs /></div> 
            </Stack>
        </div>
        </>
    )
}