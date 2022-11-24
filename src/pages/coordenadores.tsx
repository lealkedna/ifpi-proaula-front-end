import React, { useState } from 'react'
import BotaoAddCoordenador from '../components/BotaoAddCoordenador'
import FormularioCoordenador from '../components/FormularioCoordenador'
import Layout from '../components/Layout'
import TabelaCoordenadores from '../components/TabelaCoordenadores'
import Todos_Coordenadores from '../core/Todos_Coordenadores'

export default function Coordenadores() {
  const [visivel, setVisivel] = useState<
    'tabelaCoordenador' | 'formCoordenador'
  >('tabelaCoordenador')

  const [coordenador, setCoordenador] = useState<Todos_Coordenadores>(
    Todos_Coordenadores.vazio()
  )

  const coordenadores = [
    new Todos_Coordenadores(
      '1',
      'Base Comum',
      'Ensino Medio',
      'Jesiel',
      'Aprovar Curso'
    ),
    new Todos_Coordenadores(
      '2',
      'Gestao',
      'Ensino Medio',
      'Joao',
      'Aprovar Curso'
    ),
    new Todos_Coordenadores('3', 'ADS', 'Superior', 'Rafael', 'Aprovar Curso'),
  ]

  function coordenadorSelecionado(coordenador: Todos_Coordenadores) {
    setCoordenador(coordenador)
    setVisivel('formCoordenador')
  }

  function coordenadorExcluido(coordenador: Todos_Coordenadores) {
    console.log(`O coordenador ${coordenador.professor} foi excluido`)
  }

  function salvarCoordenador(coordenador: Todos_Coordenadores) {
    console.log(coordenador)
    setVisivel('tabelaCoordenador')
  }

  function novoCoordenador() {
    setCoordenador(Todos_Coordenadores.vazio())
    setVisivel('formCoordenador')
  }

  return (
    <div
      className={`
                flex justify-center items-center h-screen
                bg-gray-600
            `}
    >
      <Layout titulo="HU 07 - Coordenadores - ADM">
        {visivel === 'tabelaCoordenador' ? (
          <>
            <div className="flex justify-end">
              <BotaoAddCoordenador onClick={novoCoordenador}>
                Add Novo Coordenador
              </BotaoAddCoordenador>
            </div>
            <TabelaCoordenadores
              coordenador={coordenadores}
              coordenadorSelecionado={coordenadorSelecionado}
              coordenadorExcluido={coordenadorExcluido}
            />
          </>
        ) : (
          <FormularioCoordenador
            coordenador={coordenador}
            cancelado={() => setVisivel('tabelaCoordenador')}
            coordenadorMudou={salvarCoordenador}
          />
        )}
      </Layout>
    </div>
  )
}
