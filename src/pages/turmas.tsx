import React from 'react'
import TodasTurmas from '../core/TodasTurmas'
import Layout from '../components/Layout'
import TabelaTurmas from '../components/TabelasTurmas'
import FormularioTurmas from '../components/FormulariosTurmas'
import { useState } from 'react'
import BotaoAdicionar from '../components/BotaoAdicionar'

export default function Turmas() {
  const [turma, setTurma] = useState<TodasTurmas>(TodasTurmas.vazio())

  const [visivel, setVisivel] = useState<'tabelaTurmas' | 'formTurmas'>(
    'tabelaTurmas'
  )

  const TurmasLetivo = [
    new TodasTurmas('1', 'Mod 1-Lic Quimica', 'Noite', 'LICQUIM', 'Quimica'),
    new TodasTurmas('2', 'Mod 3-Lic Fisica', 'Noite', 'LICFIS', 'Fisica'),
    new TodasTurmas('3', 'Mod 5-Tecn ADS', 'Noite', 'TECNADS', 'ADS'),
  ]

  function turmaSelecionada(turma: TodasTurmas) {
    //  o icone de editar
    setVisivel('formTurmas')
    setTurma(turma)
  }

  function turmaExcluida(turma: TodasTurmas) {
    console.log(`A turma ${turma.nome} foi excluida`)
  }

  function salvarTurma(turma: TodasTurmas) {
    console.log(turma)
    setVisivel('tabelaTurmas')
  }

  function novaTurma() {
    setTurma(TodasTurmas.vazio())
    setVisivel('formTurmas')
  }

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gray-600
      `}
    >
      <Layout titulo="HU 05 - Turmas - ADM">
        {visivel === 'tabelaTurmas' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar className="mb-5" onClick={novaTurma}>
                Adicionar Nova Turma
              </BotaoAdicionar>
            </div>
            <TabelaTurmas
              tabelaTurmas={TurmasLetivo}
              turmaSelecionada={turmaSelecionada}
              turmaExcluida={turmaExcluida}
            />
          </>
        ) : (
          <FormularioTurmas
            turmas={turma}
            cancelado={() => setVisivel('tabelaTurmas')}
            turmaMudou={salvarTurma}
          />
        )}
      </Layout>
    </div>
  )
}
