import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Figure, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import qToolsLogo from '../../assets/E-QTools_sem fundo.png'

export default function Navbar() {

    return (
        <Stack direction='horizontal' className='navbar fluid'>
            <Button variant="secondary" className='p-2 ms-3'>{"< Voltar"}</Button>
            <Figure.Image
                className='ms-auto fluid'
                width={110}
                alt="logo q-tools"
                src={qToolsLogo}
            />
            <div className='p-2 ms-auto'>
                {" "}
            </div>
        </Stack>
    )
}