import React from 'react'

import Layout from '../components/Layout'
import TabelaProfessores from '../components/TabelaProfessores'
import TodosProfessores from '../core/TodosProfessores'

export default function Professores() {
  // esse e a tela dos professoes lembrando que e so colocar o /professores na url

  const professores = [
    new TodosProfessores(
      '1',
      'Jesiel',
      'Jesiel@ifpi.com.br',
      '12345ER',
      'Professor',
      'ADS'
    ),
    new TodosProfessores(
      '2',
      'Aislan',
      'Aislan@ifpi.com.br',
      '12345UY',
      'Professor',
      'ADS'
    ),
    new TodosProfessores(
      '3',
      'Jader',
      'Jader@ifpi.com.br',
      '12345OP',
      'Professor',
      'ADS'
    ),
  ]

  function professorSelecionado(professor: TodosProfessores) {
    console.log(professor.nome)
  }

  function professorExcluido(professor: TodosProfessores) {
    console.log(`o professor ${professor.nome} foi excluido`)
  }

  return (
    <div
      className={`
            flex justify-center items-center h-screen
            bg-gray-600
          `}
    >
      <Layout titulo="HU ?? - Professores - ADM">
        <TabelaProfessores
          professores={professores}
          professorSelecionado={professorSelecionado}
          professorExcluido={professorExcluido}
        />
      </Layout>
    </div>
  )
}
