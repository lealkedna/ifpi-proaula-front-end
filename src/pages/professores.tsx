import React, { useState } from 'react'
import BotaoAdicionar from '../components/BotaoAdicionar'
import FormularioProfessores from '../components/FormularioProfessor'
import Layout from '../components/Layout'
import TabelaProfessores from '../components/TabelaProfessores'
import TodosProfessores from '../core/TodosProfessores'

export default function Professores() {
  const [professor, setProfessor] = useState<TodosProfessores>(
    TodosProfessores.vazio()
  )

  const [visivel, setVisivel] = useState<'tabelaProfessor' | 'formProfessor'>(
    'tabelaProfessor'
  )

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
    setVisivel('formProfessor')
    setProfessor(professor)
  }

  function professorInativado(professor: TodosProfessores) {
    console.log(`o professor ${professor.nome} foi inativado`)
  }

  function salvarProfessor(professor: TodosProfessores) {
    console.log(professor)
    setVisivel('tabelaProfessor')
  }

  function novoProfessor() {
    setProfessor(TodosProfessores.vazio())
    setVisivel('formProfessor')
  }

  return (
    <div
      className={`
          flex justify-center items-center h-screen
         bg-gray-600
      `}
    >
      <Layout titulo="HU 06 - Professores - ADM">
        {visivel === 'tabelaProfessor' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar className="mb-5" onClick={novoProfessor}>
                Novo Professor
              </BotaoAdicionar>
            </div>
            <TabelaProfessores
              professores={professores}
              professorSelecionado={professorSelecionado}
              professorInativado={professorInativado}
            />
          </>
        ) : (
          <FormularioProfessores
            professores={professor}
            cancelado={() => setVisivel('tabelaProfessor')}
            professorMudou={salvarProfessor}
          />
        )}
      </Layout>
    </div>
  )
}
