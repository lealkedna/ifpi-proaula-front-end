import { useState } from 'react'
import PeriodoLetivo from '../core/PeriodoLetivo'
import Layout from '../components/Layout'
import BotaoAdicionar from '../components/BotaoAdicionar'
import TabelaPeriodoLetivo from '../components/TabelaPeriodoLetivo'
import FormularioPeriodoLetivo from '../components/FormularioPeriodoLetivo'
import Calendario from '../components/Calendario'
import BotaoVoltar from '../components/BotaoVoltar'

export default function PeriodosLetivos() {
  const [visivel, setVisivel] = useState<
    'calendarioPeriodoLetivo' | 'tabelaPeriodoLetivo' | 'formPeriodoLetivo'
  >('tabelaPeriodoLetivo')

  const [periodoLetivo, setperiodoLetivo] = useState<PeriodoLetivo>(
    PeriodoLetivo.vazio()
  )

  const periodosLetivos = [
    new PeriodoLetivo(1, '2021.1', '10/03/2021', '11/07/2021'),
    new PeriodoLetivo(2, '2022.1', '07/03/2022', '06/07/2022'),
    new PeriodoLetivo(3, '2022.2', '16/08/2022', '15/12/2022'),
  ]

  function periodoLetivoSelecionado(periodoLetivo: PeriodoLetivo) {
    setperiodoLetivo(periodoLetivo)
    setVisivel('formPeriodoLetivo')
  }

  function periodoLetivoInativado(periodoLetivo: PeriodoLetivo) {
    console.log(`O periodo Letivo ${periodoLetivo.descricao} foi inativado`)
    alert(`O periodo Letivo ${periodoLetivo.descricao} foi inativado`)
  }

  function calendarioSelecionado() {
    setVisivel('calendarioPeriodoLetivo')
  }

  function novoPeriodoLetivo() {
    setperiodoLetivo(PeriodoLetivo.vazio())
    setVisivel('formPeriodoLetivo')
  }

  function salvarPeriodoLetivo(periodoLetivo: PeriodoLetivo) {
    console.log(periodoLetivo)
    if(periodoLetivo.descricao == ''){
      alert(`preencha a descrição corretamente`)
    }
    else if(periodoLetivo.dataInicio == ''){
      alert(`preencha a data inicio corretamente`)
    }
    else if(periodoLetivo.dataTermino == ''){
      alert(`preencha a data termino corretamente`)
    }
    else{
      setVisivel('tabelaPeriodoLetivo')

    }
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gray-600
    `}
    >
      <Layout titulo="Período Letivo - Administrador">
        {visivel === 'tabelaPeriodoLetivo' ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar onClick={novoPeriodoLetivo}>
                Novo Período Letivo
              </BotaoAdicionar>
            </div>
            <TabelaPeriodoLetivo
              periodosLetivos={periodosLetivos}
              periodoLetivoSelecionado={periodoLetivoSelecionado}
              periodoLetivoInativado={periodoLetivoInativado}
              calendarioSelecionado={calendarioSelecionado}
            ></TabelaPeriodoLetivo>
          </>
        ) : visivel === 'formPeriodoLetivo' ? (
          <FormularioPeriodoLetivo
            periodoLetivo={periodoLetivo}
            periodoLetivoMudou={salvarPeriodoLetivo}
            cancelado={() => setVisivel('tabelaPeriodoLetivo')}
          ></FormularioPeriodoLetivo>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <Calendario></Calendario>
            </div>
            <div className="flex justify-center mt-8">
              <BotaoVoltar onClick={() => setVisivel("tabelaPeriodoLetivo")}>
                Voltar
              </BotaoVoltar>
            </div>
          </>
        )}
      </Layout>
    </div>
  )
}
