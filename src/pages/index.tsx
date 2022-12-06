import { useState } from 'react'
import BotaoAdicionar from '../components/BotaoAdicionar'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import PeriodoLetivo from '../core/PeriodoLetivo'

export default function Home() {
  const [periodoLetivo, setperiodoLetivo] = useState<PeriodoLetivo>(
    PeriodoLetivo.vazio()
  )
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const PeriodoLetivos = [
    new PeriodoLetivo('1', 'Química', '03-01-2022', '04-06-2022'),
    new PeriodoLetivo('2', 'Física', '05-01-2022', '11-06-2022'),
    new PeriodoLetivo('3', 'ADS', '07-01-2022', '10-06-2022'),
  ]

  function periodoLetivoSelecionado(periodoLetivo: PeriodoLetivo) {
    setVisivel('form')
    setperiodoLetivo(periodoLetivo)
  }

  function periodoLetivoInativado(periodoLetivo: PeriodoLetivo) {
    console.log(`periodo Letivo de ${periodoLetivo.descricao} foi inativado`)
  }

  function novoPeriodoLetivo() {
    setperiodoLetivo(PeriodoLetivo.vazio())
    setVisivel('form')
  }

  function salvarPeriodoLetivo(periodoLetivo: PeriodoLetivo) {
    console.log(periodoLetivo)
    setVisivel('tabela')
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gray-600
    `}
    >
      <Layout titulo="HU 04 - Período Letivo - ADM">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar className="mb-5" onClick={novoPeriodoLetivo}>
                Novo Período Letivo
              </BotaoAdicionar>
            </div>
            <Tabela
              periodoLetivo={PeriodoLetivos}
              periodoLetivoSelecionado={periodoLetivoSelecionado}
              periodoLetivoInativado={periodoLetivoInativado}
            />
          </>
        ) : (
          <Formulario
            periodoLetivo={periodoLetivo}
            cancelado={() => setVisivel('tabela')}
            periodoLetivoMudou={salvarPeriodoLetivo}
          />
        )}
      </Layout>
    </div>
  )
}
