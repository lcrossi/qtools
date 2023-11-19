import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../../components/navbar'
import Ishikawa from '../../components/ishikawa'
import './tools.css'


export default function Tools() {
    return(
        <>
        <Navbar/>
        <div className='toolsContainer'>
            <Stack >
                <div className="ms-3"><Ishikawa/></div> 
            </Stack>
        </div>
        </>
    )
}