import React from 'react'
import Navbar from '../../components/navbar'
import AboutAccordion from './accordions'
import imgQualidade from '../../assets/QUALIDADE.png'
import imgFluxo from '../../assets/Fluxo-de-ferramentas.png'
import imgIsh from '../../assets/ishikawa-exp.png'
import imgPqs from '../../assets/pqs-exp.png'
import imgGut from '../../assets/gut-exp.png'
import imgGutParams from '../../assets/gut-params.png'
import img5W2H from '../../assets/5w2h-exp.png'
import { Row, Container, Figure } from 'react-bootstrap'

export default function About() {
    return(
        <>
        <Navbar/>
        <Container fluid>
            <Row style={{color: '#1b325f', marginTop: 24, marginBottom: 12}}><h1>O que é o Q-Tools?</h1></Row>
            <Row>
                <p>
                    O <b>Q-Tools</b> é um software que põe à disposição do usuário as famosas 
                    ferramentas da qualidade de forma integrada e intuitiva.
                    Foi originalmente desenvolvido pelo engenheiro <b>Luis Rossi</b>, como trabalho de graduação em 
                    engenharia mecânica na Universidade Estadual de São Paulo (UNESP), no ano de 2023. 
                    Focando nas necessidades de Micro e pequenas Empresas brasileiras (MPEs), a aplicação busca fornecer 
                    recursos para que as organizações possam melhorar o nível da qualidade dos seus 
                    produtos e serviços, de forma a se tornarem mais competitivas no mercado brasileiro 
                    e aliviar os índices de mortalidade empresarial.
                </p>
            </Row>
            <Row style={{color: '#1b325f', marginTop: 32, marginBottom: 24}}><h2>Dúvidas frequentes</h2></Row>
            <Row>
                <AboutAccordion 
                    header="O que é 'Qualidade'?"
                    img={imgQualidade}
                    text={<div style={{marginTop: 16}}>
                            O conceito de qualidade é abrangente e pode englobar diversos aspectos relacionados ao 
                            funcionamento, produtos, serviços e processos de uma entidade. A definição de qualidade para uma empresa 
                            geralmente inclui elementos como:
                            <ul style={{marginTop: 10}}>
                                <li>Conformidade com especificações;</li>
                                <li>Satisfação do cliente;</li>
                                <li>Inovação e adaptação;</li>
                                <li>Reputação no mercado;</li>
                                <li>Melhoria continua e competitividade.</li>
                            </ul> 
                        </div>}
                />

                <AboutAccordion 
                    header="Para quem o Q-Tools é direcionado?"
                    text={<div>
                            A ferramenta foi desenvolvida focando em Micro e Pequenas Empresas (MPEs), mas 
                            a metodologia empregada é universal, e serve para quase qualquer situação onde 
                            exista um problema e se busque encontrar suas causas e, por fim, resolvê-lo.
                        </div>}
                />

                <AboutAccordion 
                    header="Qual é o fluxo de trabalho aplicado na ferramenta?"
                    img={imgFluxo}
                    text={<div style={{marginTop: 16}}>
                        <p>
                            A imagem acima mostra a sequência lógica em que 4 famosas ferramentas da qualidade são empregadas.
                        </p>
                        <ol>
                            <li style={{marginTop: 16}}>
                                A partir de um problema principal que se queira tratar, é preenchido o 
                                <b> "diagrama de Ishikawa"</b> ou <b>"diagrama de causa e efeito"</b> através
                                se um <b>brainstorming</b> interdisciplinar de levantamento das possíveis causas da questão observada. 
                                Recomenda-se envolver indivíduos de todas as áreas afetadas da empresa nessa dinâmica, 
                                de forma a levantar um bom número de possíveis causas. 
                            </li>
                            <li style={{marginTop: 16}}>
                                Em seguida os problemas levantados são levados a uma etapa de análise de causa raiz, 
                                usando a ferramenta <b>"Cinco Porquês"</b>, iterando até encontrar os reais problemas causais. 
                            </li>
                            <li style={{marginTop: 16}}>
                                A etapa seguinte é a de priorização através da ferramenta <b>"Matriz GUT"</b>, onde uma pontuação  
                                define a severidade do problema, ranqueando-os com maior exatidão. Esta fase é 
                                essencial para apoiar a seguinte: planos de ação. 
                            </li>
                            <li style={{marginTop: 16}}>
                                O <b>5W2H</b> é a ultima ferramenta utilizada no Q-Tools. Os problemas priorizados são adicionados em um 
                                relatório-tabela de planos de ação, contendo as informações necessárias para guiar os envolvidos
                                nas correções a serem empregadas.
                            </li>
                        </ol>
                        </div>}
                />

                <AboutAccordion 
                    header="O que é Brainstorming?"
                    text={<div>
                            Brainstorming, ou tempestade de ideias em uma tradução livre, é o nome dado a uma 
                            técnica que junta um grupo de pessoas relacionadas a um problema e promove um momento 
                            que incentiva o compartilhamento espontâneo de ideias, buscando soluções ou gerando 
                            insights de criatividade. 
                            Quanto maior o numero de participantes, e consequentemente de ideias, melhor, pois 
                            haverá contribuições de diferentes pontos de vista. Lembrando que é importante manter 
                            um foco claro no objetivo proposto e ter o respeito pelas ideias como regra fundamental.
                        </div>}
                />

                <AboutAccordion 
                    header="O que é o diagrama de Ishikawa?"
                    img={imgIsh}
                    text={<div style={{marginTop: 16}}>
                            <p>
                                O <b>"diagrama de Ishikawa"</b> ou <b>"diagrama de causa e efeito"</b> é uma das ferramentas 
                                da qualidade mais antigas, inventada por Kaoru Ishikawa na década de 60. Consiste na elaboração
                                de um diagrama que assume o formato de uma "espinha de peixe", onde as espinhas
                                representam a categoria dos problemas nela inseridos, os 6Ms:
                            </p>
                            <ul>
                                <li>
                                    <b>Método</b>: De que maneira a abordagem para a execução do trabalho impacta a questão?
                                </li>
                                <li>
                                    <b>Mão de obra</b>: Como a contribuição das pessoas envolvidas na atividade influencia a questão?
                                </li>
                                <li>
                                    <b>Material</b>: De que maneira a qualidade e a natureza dos materiais empregados afetam a situação?
                                </li>
                                <li>
                                    <b>Máquina</b>: Como os dispositivos empregados no processo afetam a situação?
                                </li>
                                <li>
                                    <b>Meio ambiente</b>: De que forma o ambiente no qual a atividade está sendo conduzida repercute sobre a questão?
                                </li>
                                <li>
                                    <b>Meio de Medição</b>: Qual é o impacto do uso de métricas para avaliar o progresso da atividade em questão?
                                </li>
                            </ul>
                        </div>}
                />

                <AboutAccordion 
                    header="O que é 5 Porquês?"
                    img={imgPqs}
                    text={<div style={{marginTop: 16}}>
                            <p>
                                A ferramenta 5 Porquês consiste em perguntar o porquê do problema analisado algumas vezes, até que se
                                chegue a um problema que pode ser considerado como raiz, ou seja, o real causador. O Q-Tools não 
                                limita a perguntar 5 vezes, itere o quanto achar necessário.
                            </p>
                        </div>}
                />

                <AboutAccordion 
                    header="O que é a matriz GUT?"
                    img={imgGut}
                    text={<div style={{marginTop: 16}}>
                            <p>
                                A <b>Matriz GUT</b> é uma ferramenta que fornece apoio na ordenação de soluções para problemas, 
                                sendo também referida como <b>Matriz de Prioridades</b>. A análise GUT é amplamente empregada 
                                em situações que demandam orientação para a tomada de decisões, especialmente 
                                aquelas que envolvem a análise de múltiplos problemas. Por meio do sistema GUT, 
                                é viável categorizar cada problema com base em sua Gravidade, Urgência e Tendência, 
                                resultando na sigla GUT. Esta etapa é essencial para apoiar a elaboração de planos de ação, 
                                com o ranqueamento feito, sabe-se quais são os problemas mais severos e que devem ser 
                                resolvidos primeiro, permitindo resultados sensíveis em um menor período de tempo. 
                            </p>
                            <div>
                                Os indices G, U e T <b>variam de 1 a 5 pontos</b>, de acordo com sua severidade:
                                <div style={{textAlign: 'center'}}>
                                    <Figure.Image src={imgGutParams} width={'60%'}/>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <a style={{fontSize: 14}} href='https://www.revistamanutencao.com.br/literatura/tecnica/gestao-de-ativos/o-uso-da-matriz-gut-nos-processos-industriais.html'>
                                        Fonte: REVISTA MANUTENÇÃO, 2023
                                    </a>
                                </div>
                            </div>
                        </div>}
                />
                
                <AboutAccordion 
                    header="O que é 5W2H?"
                    img={img5W2H}
                    text={<div style={{marginTop: 16}}>
                            <p>
                                É um método que busca organizar e garantir que um conjunto de ações sejam planejadas e 
                                conduzidas, eliminando dúvidas. Sendo muito utilizado em projetos de melhoria para ter 
                                objetivos e responsabilidades bem definidas mesmo ao longo do tempo.
                                O termo 5W + 2H surge das iniciais das palavras em inglês que guiam a elaboração 
                                do formulário que a ferramenta propõe:
                            </p>
                            <ul style={{marginTop: 12}}>
                                <li>
                                    WHAT (o quê?);
                                </li>
                                <li>
                                    WHERE (onde?);
                                </li>
                                <li>
                                    WHY (por quê?);
                                </li>
                                <li>
                                    WHO (quem?);
                                </li>
                                <li>
                                    WHEN (quando?);
                                </li>
                                <li>
                                    HOW (como?);
                                </li>
                                <li>
                                    HOW MUCH (quanto custa?).
                                </li>
                            </ul>
                            <p>Os itens costumam ser preenchidos conforme o quadro acima para maior organização.</p>
                        </div>}
                />
            </Row>
        </Container>
        </>
    )
}