import { useState } from 'react'
import PeriodoLetivo from '../core/PeriodoLetivo'
import Turma from '../core/Turma'
import Layout from '../components/Layout'
import BotaoAdicionar from '../components/BotaoAdicionar'
import TabelaTurma from '../components/TabelaTurma'
import FormularioTurma from '../components/FormularioTurma'

export default function Turmas() {
  const [visivel, setVisivel] = useState<'tabelaTurma' | 'formTurma'>(
    'tabelaTurma'
  )

  const [turma, setTurma] = useState<Turma>(Turma.vazio())

  const periodosLetivos = [
    new PeriodoLetivo(1, '2021.1', '10/03/2021', '11/07/2021'),
    new PeriodoLetivo(2, '2022.1', '07/03/2022', '06/07/2022'),
    new PeriodoLetivo(3, '2022.2', '16/08/2022', '15/12/2022'),
  ]

  const TurmasLetivo = [
    new Turma(1, 'Mod 1-Lic Química', 'Noite', 'LICQUIM', periodosLetivos[0]),
    new Turma(2, 'Mod 3-Lic Física', 'Noite', 'LICFIS', periodosLetivos[1]),
    new Turma(3, 'Mod 5-Tecn ADS', 'Noite', 'TECNADS', periodosLetivos[2]),
  ]

  function turmaSelecionada(turma: Turma) {
    setVisivel('formTurma')
    setTurma(turma)
  }

  function turmaInativada(turma: Turma) {
    console.log(`A turma ${turma.descricao} foi inativada`)
  }

  function novaTurma() {
    setTurma(Turma.vazio())
    setVisivel('formTurma')
  }

  function salvarTurma(turma: Turma) {
    console.log(turma)
    setVisivel('tabelaTurma')
  }

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gray-600
      `}
    >
      <Layout titulo="Turmas - Administrador">
        {visivel === 'tabelaTurma' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar className="mb-5" onClick={novaTurma}>
                Nova Turma
              </BotaoAdicionar>
            </div>
            <TabelaTurma
              turmas={TurmasLetivo}
              turmaSelecionada={turmaSelecionada}
              turmaInativada={turmaInativada}
            />
          </>
        ) : (
          <FormularioTurma
            turma={turma}
            cancelado={() => setVisivel('tabelaTurma')}
            turmaMudou={salvarTurma}
          />
        )}
      </Layout>
    </div>
  )
}
