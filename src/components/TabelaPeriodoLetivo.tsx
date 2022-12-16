import PeriodoLetivo from '../core/PeriodoLetivo'
import BotaoEditar from './BotaoEditar'
import BotaoInativar from './BotaoInativar'
import { iconeCalendario, iconeEditar, IconeInativar } from './Icones'
import Dropdown from '../components/Dropdown'
import BotaoCalendario from './BotaoCalendario'

interface TabelaPeriodoLetivoProps {
  periodosLetivos: PeriodoLetivo[]
  calendarioSelecionado?: () => void
  periodoLetivoSelecionado?: (periodoLetivo: PeriodoLetivo) => void
  periodoLetivoInativado?: (periodoLetivo: PeriodoLetivo) => void
}

export default function TabelaPeriodoLetivo(props: TabelaPeriodoLetivoProps) {
  const exibirAcoes =
    props.periodoLetivoSelecionado || props.periodoLetivoInativado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-3">Descrição</th>
        <th className="p-3">Data de Início</th>
        <th className="p-3">Data de Término</th>
        <th className="p-3">Situação</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.periodosLetivos?.map((periodoLetivo, i) => {
      return (
        <tr
          key={i}
          className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}
        >
          <td className="p-3">{periodoLetivo.descricao}</td>
          <td className="p-3">{periodoLetivo.dataInicio}</td>
          <td className="p-3">{periodoLetivo.dataTermino}</td>
          <td className="p-3">
            <Dropdown />
          </td>
          {exibirAcoes ? renderizarAcoes(periodoLetivo) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(periodoLetivo: PeriodoLetivo) {
    return (
      <td className="p-3">
        {props.calendarioSelecionado ? (
          <BotaoCalendario onClick={props.calendarioSelecionado}>
            {iconeCalendario}
          </BotaoCalendario>
        ) : false}

        {props.periodoLetivoSelecionado ? (
          <BotaoEditar
            onClick={() => props.periodoLetivoSelecionado?.(periodoLetivo)}
          >
            {iconeEditar}
          </BotaoEditar>
        ) : (
          false
        )}

        {props.periodoLetivoInativado ? (
          <BotaoInativar
            onClick={() => props.periodoLetivoInativado?.(periodoLetivo)}
          >
            {IconeInativar}
          </BotaoInativar>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-lg overflow-hidden text-center">
      <thead
        className={`
              text-gray-200 bg-purple-700
            `}
      >
        {renderizarCabecalho()}
      </thead>

      <tbody className="text-gray-800">{renderizarDados()}</tbody>
    </table>
  )
}
