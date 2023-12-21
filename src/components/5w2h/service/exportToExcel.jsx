import { useState, useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Button, Table, Modal } from 'react-bootstrap'

export default function ExportToExcel({tableData}) {
  const tableRef = useRef(null);
  const [ showModal, setShowModal ] = useState(false)
  
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Plano de Ações by qtools",
    sheet: "Tabela 5W2H"
  });

  function handleModal() {
    setShowModal(true)
  }

  function modalDecision(decision) {
      if (decision == 'cancelar') {
          setShowModal(false)
      } else {
        onDownload()
        setShowModal(false)
      }
  }

  function rows() {
    if (tableData) {
        let rows = tableData.map((row, index) => {
            return (
                <tr key={index}>
                <td>{row}</td>
                <td>
                  {document.getElementById(`input-5w2h-1-${index}`) ? document.getElementById(`input-5w2h-1-${index}`).value : " "}
                </td>
                <td>
                {document.getElementById(`input-5w2h-2-${index}`) ? document.getElementById(`input-5w2h-2-${index}`).value : " "}
                </td>
                <td>
                {document.getElementById(`input-5w2h-3-${index}`) ? document.getElementById(`input-5w2h-3-${index}`).value : " "}
                </td>
                <td>
                  {document.getElementById(`input-5w2h-4-${index}`) ? document.getElementById(`input-5w2h-4-${index}`).value : " "}
                </td>
                <td>
                  {document.getElementById(`input-5w2h-5-${index}`) ? document.getElementById(`input-5w2h-5-${index}`).value : " "}
                </td>
                <td>
                  {document.getElementById(`input-5w2h-6-${index}`) ? document.getElementById(`input-5w2h-6-${index}`).value : " "}
                </td>
                <td>
                  {document.getElementById(`input-5w2h-7-${index}`) ? document.getElementById(`input-5w2h-7-${index}`).value : " "}
                </td>
            </tr>
            )
        })
        return rows
    }
  }

  return (
    <div>
      <Modal size="sm" show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Deseja exportar a tabela?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Caso ainda não tenha terminado, 
                  preencha todos os campos que julgar 
                  necessários para fazer a exportação.
                </p>
            </Modal.Body>
            <Modal.Footer style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="secondary" onClick={() => modalDecision('cancelar')}>Cancelar</Button>
                <Button variant="warning" onClick={() => modalDecision('exportar')}>Continuar</Button>
            </Modal.Footer>
        </Modal>
      <Button 
        onClick={() => {handleModal()}}
        variant='primary' 
        className='fluid ms-auto'> 
        { "Exportar" }
      </Button>
      <Table striped bordered hover variant="light" ref={tableRef} className="hide">
        <tbody>
          <tr>
              <th>Ações</th>
              <th>O quê?</th>
              <th>Quem?</th>
              <th>Onde?</th>
              <th>Quando?</th>
              <th>Por quê?</th>
              <th>Como?</th>
              <th>Quanto?</th>
          </tr>
          {rows()}
        </tbody>
      </Table>
    </div>
  );
}