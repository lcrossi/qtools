import React from 'react'
import { Link } from 'react-router-dom'
import qtoolsLogo from '../../assets/E-QTools_sem fundo.png'
import './home.css'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {

    return (
        <Container fluid className='homeContainer' >
            <br/>
            <br/>
            <Row className='home'>
                <Col></Col>
                <Col xs={7}>
                    <Link to="/tools">
                        <img src={qtoolsLogo} className="logo" alt="Q-Tools Logo" />
                    </Link>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={7}>
                    <Row className='home'>
                        <h1>Bem-vindo ao Q-Tools!</h1>
                        <p>As ferramentas da qualidade na palma da sua mão.</p>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <br/>
            <Row>
                <Col></Col>
                <Col md={4} className='home'>
                    <button>
                        Iniciar
                    </button>
                </Col>
                <Col></Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col></Col>
                <Col>
                    <p className="gray-subtitle">
                        Clique em iniciar para usar o Q-Tools
                    </p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Link to='/about'>
                    <p className="gray-subtitle">
                        Para mais informações clique aqui.
                    </p>
                </Link>
            </Row>
            <br/>
            <br/>
        </Container>
    )
}