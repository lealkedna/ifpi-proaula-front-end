import React from 'react'
import BotaoAddCoordenador from '../components/BotaoAddCoordenador'
import Layout from '../components/Layout'
import TabelaCoordenadores from '../components/TabelaCoordenadores'
import TodosCoordenadores from '../core/TodosCoordenadores'

export default function Coordenadores() {
  const coordenadores = [
    new TodosCoordenadores(
      '1',
      'Base Comum',
      'Ensino Medio',
      'Jesiel',
      'Aprovar Curso'
    ),
    new TodosCoordenadores(
      '2',
      'Gestao',
      'Ensino Medio',
      'Joao',
      'Aprovar Curso'
    ),
    new TodosCoordenadores('3', 'ADS', 'Superior', 'Rafael', 'Aprovar Curso'),
  ]

  function coordenadorSelecionado(coordenador: TodosCoordenadores) {
    console.log(coordenador.professor)
  }

  function coordenadorExcluido(coordenador: TodosCoordenadores) {
    console.log(`O coordenador ${coordenador.professor} foi excluido`)
  }

  return (
    <div
      className={`
                flex justify-center items-center h-screen
                bg-gray-600
            `}
    >
      <Layout titulo="HU 07 - Coordenadores - ADM">
        <div className="flex justify-end">
          <BotaoAddCoordenador>Add Novo Coordenador</BotaoAddCoordenador>
        </div>
        <TabelaCoordenadores
          coordenador={coordenadores}
          coordenadorSelecionado={coordenadorSelecionado}
          coordenadorExcluido={coordenadorExcluido}
        />
      </Layout>
    </div>
  )
}
