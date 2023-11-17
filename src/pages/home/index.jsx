import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import qtoolsLogo from '../../assets/E-QTools_sem fundo.png'
import './home.css'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    const navigate = useNavigate();
    return (
        <Container fluid className='homeContainer align-middle' >
            <Row className='home'>
                <Col>
                    <Link to="/tools">
                        <img src={qtoolsLogo} className="logo" alt="Q-Tools Logo" />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className='home'>
                        <h1>Bem-vindo ao Q-Tools!</h1>
                        <p>As ferramentas da qualidade na palma da sua mão.</p>
                    </Row>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col className='home'>
                    <button onClick={() => navigate('/tools')}>
                        Iniciar
                    </button>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col className='home'>
                    <p className="gray-subtitle">
                        Clique em iniciar para usar o Q-Tools
                    </p>
                </Col>
            </Row>
            <Row className='home'>
                <Link to='/about'>
                    <a className="gray-subtitle">
                        Para mais informações clique aqui.
                    </a>
                </Link>
            </Row>
        </Container>
    )
}