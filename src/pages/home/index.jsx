import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import qtoolsLogo from '../../assets/E-QTools_sem fundo.png'
import './home.css'

export default function Home() {
const history = useHistory();

    return (
        <>
        <div>
            <Link to="/tools">
                <img src={qtoolsLogo} className="logo" alt="Q-Tools Logo" />
            </Link>
        </div>
        <h1>Seja Bem-vindo ao Q-Tools!</h1>
        <p>
            As ferramentas da qualidade na palma da sua mão.
        </p>
        <div className="card">
            <button onClick={history.push('/tools')}>
                Iniciar
            </button>
            <p className="gray-subtitle">
                Clique em iniciar para usar o Q-Tools
            </p>
        </div>
    </>
    )
}