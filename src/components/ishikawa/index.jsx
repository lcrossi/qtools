import React, { useState, useContext } from 'react'
import { Button, Form, Row, Card, Col, Container, Modal, Stack } from 'react-bootstrap'
import Fishbone from '@hophiphip/react-fishbone';
import { ToolsContext } from '../../context/toolsContext';
import ProbList from './probList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ishikawa.css'

export default function Ishikawa() {
    const [showOrHide, setShowOrHide] = useState('show')
    const [notReadyForPqs, setNotReadyForPqs] = useState(true)
    const [showIshForm, setShowIshForm] = useState('show')
    const [renderIshChart, setRenderIshChart] = useState(false)
    const [btnLabel, setBtnLabel] = useState('Salvar')
    const [ishItems, setIshItems] = useState({})
    const [ishPrincipal, setIshPrincipal] = useState()
    const [ishMetodo, setIshMetodo] = useState([])
    const [ishMao, setIshMao] = useState([])
    const [ishMaterial, setIshMaterial] = useState([])
    const [ishMaquina, setIshMaquina] = useState([])
    const [ishAmbiente, setIshAmbiente] = useState([])
    const [ishMedicao, setIshMedicao] = useState([])
    const [showModalProbAdded, setShowModalProbAdded] = useState(false);
    const [showModalProbError, setShowModalProbError] = useState(false);
    const [fishboneChartMinWidth, setFishboneChartMinWidth] = useState(900)
    // Variáveis do context
    const { 
        setStage,
        contextIshikawaData, setContextIshikawaData,
        setShowHidePqs,
    } = useContext(ToolsContext)

    var metodoProblem = ''
    var maoProblem = ''
    var materialProblem = ''
    var maquinaProblem = ''
    var ambienteProblem = ''
    var medicaoProblem = ''

    function loadIshikawa() {
        if (btnLabel == 'Salvar') {
            setShowOrHide('hide')
            setBtnLabel('Editar')
            setIshItems ({
                "name": ishPrincipal,
                "children": [
                    {
                        "name": "Método",
                        "children": ishMetodo,
                    },
                    {
                        "name": "Mão de Obra",
                        "children": ishMao,
                    },
                    {
                        "name": "Material",
                        "children": ishMaterial
                    },
                    {
                        "name": "Máquina",
                        "children": ishMaquina
                    },
                    {
                        "name": "Meio Ambiente",
                        "children": ishAmbiente
                    },
                    {
                        "name": "Meio de Medição",
                        "children": ishMedicao
                    },
                ]
            })
            setRenderIshChart(true)
        } else {
            setShowOrHide('show')
            setBtnLabel('Salvar')
            setRenderIshChart(false)
        }
    }

    function handleInputChange(type, value) {
        if (type == 'problemaPrincipal') {
            setIshPrincipal(value)
        }

        if (type == 'metodo') {
            metodoProblem = value
        }

        if (type == 'mao') {
            maoProblem = value
        }

        if (type == 'material') {
            materialProblem = value
        }

        if (type == 'maquina') {
            maquinaProblem = value
        }

        if (type == 'ambiente') {
            ambienteProblem = value
        }

        if (type == 'medicao') {
            medicaoProblem = value
        }
    }

    function addIshProblem(type) {
        if (type == 'metodo') {
            if (metodoProblem && !metodoProblem.match(/^(\s)+$/)) { /* Essa expressão regular vai testar esse texto procurando garantir que a no inicio do texto (^) existe espaço em branco (\s) na quantidade de 1 ou mais (+) e que depois disso o texto termina ($). E depois nego o match com ! no inicio dessa condição, ou seja para garantid que esse if só dá true se não houver match. */
                setIshMetodo([...ishMetodo, {"name": metodoProblem}])
                handleShowModalProbs('added')
            } else {
                console.log('Dados invalidos')
                handleShowModalProbs('error')
            }
        }

        if (type == 'mao') {
            if (type == 'mao') {
                if (maoProblem && !maoProblem.match(/^(\s)+$/)) {
                    setIshMao([...ishMao, {"name": maoProblem}])
                    handleShowModalProbs('added')
                } else {
                    console.log('Dados invalidos')
                    handleShowModalProbs('error')                    
                }
            }
        }

        if (type == 'material') {
            if (type == 'material') {
                if (materialProblem && !materialProblem.match(/^(\s)+$/)) {
                    setIshMaterial([...ishMaterial, {"name": materialProblem}])
                    handleShowModalProbs('added')
                } else {
                    console.log('Dados invalidos')
                    handleShowModalProbs('error')                    
                }
            }
        }
        
        if (type == 'maquina') {
            if (type == 'maquina') {
                if (maquinaProblem && !maquinaProblem.match(/^(\s)+$/)) {
                    setIshMaquina([...ishMaquina, {"name": maquinaProblem}])
                    handleShowModalProbs('added')
                } else {
                    console.log('Dados invalidos')
                    handleShowModalProbs('error')                    
                }
            }
        }

        if (type == 'ambiente') {
            if (type == 'ambiente') {
                if (ambienteProblem && !ambienteProblem.match(/^(\s)+$/)) {
                    setIshAmbiente([...ishAmbiente, {"name": ambienteProblem}])
                    handleShowModalProbs('added')
                } else {
                    console.log('Dados invalidos')
                    handleShowModalProbs('error')                    
                }
            }
        }

        if (type == 'medicao') {
            if (type == 'medicao') {
                if (medicaoProblem && !medicaoProblem.match(/^(\s)+$/)) {
                    setIshMedicao([...ishMedicao, {"name": medicaoProblem}])
                    handleShowModalProbs('added')
                } else {
                    console.log('Dados invalidos')
                    handleShowModalProbs('error')                    
                }
            }
        }
        //limpando o input
        document.getElementById(`input_${type}`).value = ''
    }

    function deleteIshProblem(type) {
        if (type == 'metodo') {
            setIshMetodo([])
        }

        if (type == 'mao') {
            setIshMao([])
        }

        if (type == 'material') {
            setIshMaterial([])
        }
        
        if (type == 'maquina') {
            setIshMaquina([])
        }

        if (type == 'ambiente') {
            setIshAmbiente([])
        }

        if (type == 'medicao') {
            setIshMedicao([])
        }
    }


    function handleShowModalProbs(type) {
        if (type == "added") {
            setShowModalProbAdded(true)
            console.log(showModalProbAdded)
            
            setTimeout(() => {
                setShowModalProbAdded(false)
            }, 
            1500);
        }

        if (type == "error") {
            setShowModalProbError(true)
            console.log(showModalProbError)
            
            setTimeout(() => {
                setShowModalProbError(false)
            }, 
            1500);
        }
    }

    function fishboneChart() {
        if (renderIshChart == true) {
            return (
                <Fishbone
                    style={{cursor: 'grab'}}
                    items={ishItems}
                    wrapperStyle={{ 
                        minWidth: `${fishboneChartMinWidth}px`,
                        width: '100%',
                        height: '90vh',
                        backgroundColor: 'rgb(225, 225, 225)',
                    }}
                    linesConfig={[
                        { color: "#000", strokeWidthPx: 2 }, /* Linha principal */
                        { color: "#333", strokeWidthPx: 1 }, /* Linhas secundárias dos M's */
                        { color: "#666", strokeWidthPx: 0.8 }, /* Setinhas probs */
                    ]}
                    nodesConfig={[
                        { color: "#000", fontSizeEm: 1.5 }, /* Txt prob principal */
                        { color: "#111", fontSizeEm: 1.1 }, /* Txt M's */
                        { color: "#444", fontSizeEm: 0.8 }, /* Txt Problemas */
                        { color: "#888", fontSizeEm: 0.7 }, /* Txt probs dos probs  */
                        { color: "#aaa", fontSizeEm: 0.6 }
                    ]}
                />
            )
        }
    }

    function selectFishboneChartSize(size) {
        size == 'P' ? setFishboneChartMinWidth(800) :
        size == 'M' ? setFishboneChartMinWidth(1150) :
        size == 'G' ? setFishboneChartMinWidth(1500) :
        size == 'GG' ? setFishboneChartMinWidth(2000) : console.log("Erro: Impossivel selecionar o tamanho")
    }

    function handleNextStage() {
        //validar com um modal de confirmação - a ideia é não deixar mais alterar os dados da ishikawa agora
        loadIshikawa()
        setContextIshikawaData(ishItems)
        setStage('5 Porquês')
        setShowHidePqs('show')
        setShowIshForm('hide')
        setRenderIshChart(false)
        console.log('Loading 5PQs...')
    }

    return (
        <>
            <Modal size="sm" show={showModalProbAdded} onHide={() => setShowModalProbAdded(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Problema adicionado</Modal.Title>
                </Modal.Header>
            </Modal>
            <Modal size="sm" show={showModalProbError} onHide={() => setShowModalProbError(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Erro ao adicionar!</Modal.Title>
                </Modal.Header>
            </Modal>
            <Card id="ishiForm" className={`p-3 mb-4 ${showIshForm}`}>
                <div className={`ishFormHeader`}>
                    <h2 className='mb-4'>Diagrama de Ishikawa</h2>
                </div>
                <Form className={showOrHide}>
                    <Form.Group className="mb-5">
                        <p>Preencha o campo abaixo com um problema principal, e os demais campos com problemas 
                            relacionados a ele de acordo com as categorias (método, máquina, material, etc.):
                        </p>
                        <p>Obs. recomenda-se uma sessão de brainstorming para essa etapa.
                        </p>
                        <Form.Label><b> Problema inicial</b></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Escreva o problema" 
                            onChange={(e) => handleInputChange('problemaPrincipal', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Problema - Método</Form.Label>
                        <Form.Control id='input_metodo' className='mb-2' type="text" 
                            onChange={e => handleInputChange('metodo', e.target.value)}
                            placeholder="Adicione um problema por vez" 
                        />
                        <Container fluid className='md-0'>
                            <Row>
                                <Col style={{marginLeft: -12}}>
                                    <Button onClick={() => addIshProblem('metodo')} variant='outline-primary' className='mb-2'>Adicionar</Button>
                                </Col>
                                <Col></Col>
                                <Col style={{display: 'flex', justifyContent: 'right', marginRight: -12}}>
                                    <Button onClick={() => deleteIshProblem('metodo')} variant='outline-danger' className='mb-2'>Limpar</Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col></Col>
                                <Col xs={7}>
                                    <ProbList props={ishMetodo} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Problema - Mão de Obra</Form.Label>
                        <Form.Control id='input_mao' className='mb-2' type="text" 
                            onChange={e => handleInputChange('mao', e.target.value)}
                            placeholder="Adicione um problema por vez" 
                        />
                        <Container fluid className='md-0'>
                            <Row>
                                <Col style={{marginLeft: -12}}>
                                    <Button onClick={() => addIshProblem('mao')} variant='outline-primary' className='mb-2'>Adicionar</Button>
                                </Col>
                                <Col></Col>
                                <Col style={{display: 'flex', justifyContent: 'right', marginRight: -12}}>
                                    <Button onClick={() => deleteIshProblem('mao')} variant='outline-danger' className='mb-2'>Limpar</Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col></Col>
                                <Col xs={7}>
                                    <ProbList props={ishMao} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>                    
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Problema - Material</Form.Label>
                        <Form.Control id='input_material' className='mb-2' type="text" 
                            onChange={e => handleInputChange('material', e.target.value)}
                            placeholder="Adicione um problema por vez" 
                        />
                        <Container fluid className='md-0'>
                            <Row>
                                <Col style={{marginLeft: -12}}>
                                    <Button onClick={() => addIshProblem('material')} variant='outline-primary' className='mb-2'>Adicionar</Button>
                                </Col>
                                <Col></Col>
                                <Col style={{display: 'flex', justifyContent: 'right', marginRight: -12}}>
                                    <Button onClick={() => deleteIshProblem('material')} variant='outline-danger' className='mb-2'>Limpar</Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col></Col>
                                <Col xs={7}>
                                    <ProbList props={ishMaterial} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Problema - Máquina</Form.Label>
                        <Form.Control id='input_maquina' className='mb-2' type="text" 
                            onChange={e => handleInputChange('maquina', e.target.value)}
                            placeholder="Adicione um problema por vez" 
                        />
                        <Container fluid className='md-0'>
                            <Row>
                                <Col style={{marginLeft: -12}}>
                                    <Button onClick={() => addIshProblem('maquina')} variant='outline-primary' className='mb-2'>Adicionar</Button>
                                </Col>
                                <Col></Col>
                                <Col style={{display: 'flex', justifyContent: 'right', marginRight: -12}}>
                                    <Button onClick={() => deleteIshProblem('maquina')} variant='outline-danger' className='mb-2'>Limpar</Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col></Col>
                                <Col xs={7}>
                                    <ProbList props={ishMaquina} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Problema - Meio Ambiente</Form.Label>
                        <Form.Control id='input_ambiente' className='mb-2' type="text" 
                            onChange={e => handleInputChange('ambiente', e.target.value)}
                            placeholder="Adicione um problema por vez" 
                        />
                        <Container fluid className='md-0'>
                            <Row>
                                <Col style={{marginLeft: -12}}>
                                    <Button onClick={() => addIshProblem('ambiente')} variant='outline-primary' className='mb-2'>Adicionar</Button>
                                </Col>
                                <Col></Col>
                                <Col style={{display: 'flex', justifyContent: 'right', marginRight: -12}}>
                                    <Button onClick={() => deleteIshProblem('ambiente')} variant='outline-danger' className='mb-2'>Limpar</Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col></Col>
                                <Col xs={7}>
                                    <ProbList props={ishAmbiente} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Problema - Meio de Medição</Form.Label>
                        <Form.Control id='input_medicao' className='mb-2' type="text" 
                            onChange={e => handleInputChange('medicao', e.target.value)}
                            placeholder="Adicione um problema por vez" 
                        />
                        <Container fluid className='md-0'>
                            <Row>
                                <Col style={{marginLeft: -12}}>
                                    <Button onClick={() => addIshProblem('medicao')} variant='outline-primary' className='mb-2'>Adicionar</Button>
                                </Col>
                                <Col></Col>
                                <Col style={{display: 'flex', justifyContent: 'right', marginRight: -12}}>
                                    <Button onClick={() => deleteIshProblem('medicao')} variant='outline-danger' className='mb-2'>Limpar</Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col></Col>
                                <Col xs={7}>
                                    <ProbList props={ishMedicao} />
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Form.Group>
                </Form>
                <br />
                <br />
                <Container fluid>
                    <Row style={{textAlign: 'center'}}>
                        <Col>
                            <select id='fishboneChartSizeSelector' className={showOrHide} onChange={e => selectFishboneChartSize(e.target.value)}>
                                <option defaultValue={null}>
                                    Selecionar tamanho
                                </option>
                                <option key={1} value="P">Pequeno</option>
                                <option key={2} value="M">Médio</option>
                                <option key={3} value="G">Grande</option>
                                <option key={4} value="GG">Extra Grande</option>
                            </select>
                        </Col>
                        <Col>
                            <Button 
                                onClick={() => {loadIshikawa(), setNotReadyForPqs(false)}} 
                                variant='success' 
                                className='fluid ms-auto'> 
                                { btnLabel } 
                            </Button>
                        </Col>
                        <Col>
                            <Button 
                                onClick={() => {loadIshikawa(); handleNextStage()}}
                                variant='primary' 
                                className='fluid ms-auto'
                                disabled={notReadyForPqs}> 
                                {"Próximo >"}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card>
            <div style={{cursor: 'grab'}}>
                {fishboneChart()}
            </div>
    </>
    )
}