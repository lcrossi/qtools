import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Figure, Stack, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import qToolsLogo from '../../assets/E-QTools_sem fundo.png'

export default function Navbar() {
    const [ showModal, setShowModal ] = useState(false)
    const [ showModalHome, setShowModalHome ] = useState(false)
    function handleHelpModal() {
        if(window.location.href.slice(-6) == '/tools'){
            setShowModal(true)
        }
    }
     
    function handleHelpModalHome() {
        if(window.location.href.slice(-6) == '/tools'){
            setShowModalHome(true)
        }
    } 

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
                <Link to="/qtools/about">
                    <Button variant="warning" onClick={() => setShowModal(false)}>Continuar</Button>
                </Link>
            </Modal.Footer>
        </Modal>
        <Modal size="sm" show={showModalHome} onHide={() => setShowModalHome(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Deseja sair da pagina?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Os dados inseridos serão perdidos...</p>
            </Modal.Body>
            <Modal.Footer style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="secondary" onClick={() => setShowModalHome(false)}>Cancelar</Button>
                <Link to="/qtools/about">
                    <Button variant="warning" onClick={() => setShowModalHome(false)}>Continuar</Button>
                </Link>
            </Modal.Footer>
        </Modal>
        <Stack direction='horizontal' className='navbar fluid'>
            <Button variant="secondary" className='p-2 mx-2' onClick={handleHelpModalHome}>{"< Voltar"}</Button>
            <Link to="/qtools/tools">
                <Figure.Image
                    className='mx-5'
                    width={110}
                    alt="logo q-tools"
                    src={qToolsLogo}
                    />
            </Link>
            
            <Button variant="secondary" className='p-2 mx-2' onClick={handleHelpModal}>{"Ajuda"}</Button>
        </Stack>
        </>
    )
}