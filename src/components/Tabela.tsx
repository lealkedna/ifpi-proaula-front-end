import PeriodoLetivo from '../core/PeriodoLetivo'
import { EditIcon, DeleteIcon } from './Icones'

interface Tabelaprops {
  periodoLetivo: PeriodoLetivo[]
  periodoLetivoSelecionado?: (periodoLetivo: PeriodoLetivo) => void
  periodoLetivoExcluido?: (periodoLetivo: PeriodoLetivo) => void
}

export default function Tabela(props: Tabelaprops) {
  const exibirAcoes =
    props.periodoLetivoSelecionado || props.periodoLetivoExcluido

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-center p-3">Descrição</th>
        <th className="text-center p-3">Data Início</th>
        <th className="text-center p-3">Data de Término</th>
        {exibirAcoes ? <th className="text-left p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.periodoLetivo?.map((periodoLetivo, i) => {
      return (
        // o zebrado das linhas
        <tr
          key={i}
          className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}
        >
          <td className="text-center p-2 text-gray-800">
            {periodoLetivo.descricao}
          </td>
          <td className="text-center p-2 text-gray-800">
            {periodoLetivo.dataInicio}
          </td>
          <td className="text-center p-2 text-gray-800">
            {periodoLetivo.dataTermino}
          </td>
          {exibirAcoes ? renderizarAcoes(periodoLetivo) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(periodoLetivo: PeriodoLetivo) {
    return (
      <td>
        {props.periodoLetivoSelecionado ? (
          <button
            onClick={() => props.periodoLetivoSelecionado?.(periodoLetivo)}
            className={`
                    justify-center items-center mr-3
                    text-green-700 rounded-full p-2
                    hover:bg-purple-400
                `}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}

        {props.periodoLetivoExcluido ? (
          <button
            onClick={() => props.periodoLetivoExcluido?.(periodoLetivo)}
            className={`
                    justify-center items-center
                    text-red-600 rounded-full p-2
                    hover:bg-purple-400
                `}
          >
            {DeleteIcon}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-lg overflow-hidden ">
      <thead
        className={`
              text-gray-200 bg-purple-700
            `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
