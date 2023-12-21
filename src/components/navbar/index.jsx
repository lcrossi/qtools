import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Figure, Stack, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import qToolsLogo from '../../assets/E-QTools_sem fundo.png'

export default function Navbar() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <>
        <Modal size="sm" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Deseja sair da pagina?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Os dados inseridos serão perdidos...</p>
            </Modal.Body>
            <Modal.Footer style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
                <Link to="/about">
                    <Button variant="warning" onClick={() => setShowModal(false)}>Continuar</Button>
                </Link>
            </Modal.Footer>
        </Modal>
        <Stack direction='horizontal' className='navbar fluid'>
            <Link to="/qtools">
                <Button variant="secondary" className='p-2 mx-2'>{"< Voltar"}</Button>
            </Link>
            <Link to="/tools">
                <Figure.Image
                    className='mx-5'
                    width={110}
                    alt="logo q-tools"
                    src={qToolsLogo}
                    />
            </Link>
            
            <Button variant="secondary" className='p-2 mx-2' onClick={() => setShowModal(true)}>{"Ajuda"}</Button>
        </Stack>
        </>
    )
}