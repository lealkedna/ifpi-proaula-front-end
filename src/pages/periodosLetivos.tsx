import { useState } from 'react'
import PeriodoLetivo from '../core/PeriodoLetivo'
import Layout from '../components/Layout'
import BotaoAdicionar from '../components/BotaoAdicionar'
import TabelaPeriodoLetivo from '../components/TabelaPeriodoLetivo'
import FormularioPeriodoLetivo from '../components/FormularioPeriodoLetivo'

export default function PeriodosLetivos() {
  const [visivel, setVisivel] = useState<'tabelaPeriodoLetivo' | 'formPeriodoLetivo'>('tabelaPeriodoLetivo')
  
  const [periodoLetivo, setperiodoLetivo] = useState<PeriodoLetivo>(PeriodoLetivo.vazio())

  const periodosLetivos = [
    new PeriodoLetivo(1, "2021.1", "10/03/2021", "11/07/2021"),
    new PeriodoLetivo(2, "2022.1", "07/03/2022", "06/07/2022"),
    new PeriodoLetivo(3, "2022.2", "16/08/2022", "15/12/2022"),
  ]

  function periodoLetivoSelecionado(periodoLetivo: PeriodoLetivo) {
    setperiodoLetivo(periodoLetivo)
    setVisivel('formPeriodoLetivo')
  }

  function periodoLetivoInativado(periodoLetivo: PeriodoLetivo) {
    console.log(`O periodo Letivo ${periodoLetivo.descricao} foi inativado`)
  }

  function novoPeriodoLetivo() {
    setperiodoLetivo(PeriodoLetivo.vazio())
    setVisivel('formPeriodoLetivo')
  }

  function salvarPeriodoLetivo(periodoLetivo: PeriodoLetivo) {
    console.log(periodoLetivo)
    setVisivel('tabelaPeriodoLetivo')
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gray-600
    `}
    >
      <Layout titulo="HU 04 - Período Letivo - ADM">
        {visivel === 'tabelaPeriodoLetivo' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar className="mb-5" onClick={novoPeriodoLetivo}>
                Novo Período Letivo
              </BotaoAdicionar>
            </div>
            <TabelaPeriodoLetivo
              periodoLetivo={periodosLetivos}
              periodoLetivoSelecionado={periodoLetivoSelecionado}
              periodoLetivoInativado={periodoLetivoInativado}
            />
          </>
        ) : (
          <FormularioPeriodoLetivo
            periodoLetivo={periodoLetivo}
            periodoLetivoMudou={salvarPeriodoLetivo}
            cancelado={() => setVisivel('tabelaPeriodoLetivo')}
          />
        )}
      </Layout>
    </div>
  )
}
