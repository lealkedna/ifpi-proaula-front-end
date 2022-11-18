import Coordenador from '../core/Coordenador'
import { DeleteIcon, EditIcon } from './Icones'

interface TabelaCoordenadoresProps {
  coordenador: Coordenador[]
  coordenadorSelecionado?: (coordenador: Coordenador) => void
  coordenadorExcluido?: (coordenador: Coordenador) => void
}

export default function TabelaCoordenadores(props: TabelaCoordenadoresProps) {
  const exibirAcoes = props.coordenadorSelecionado || props.coordenadorExcluido

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-3">Id</th>
        <th className="p-3">Eixo</th>
        <th className="p-3">Modalidade</th>
        <th className="p-3">Professor</th>
        <th className="p-3">Aprova Solicitaçãio</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.coordenador?.map((coordenaor, i) => {
      return (
        <tr
          key={coordenaor.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-300'}`}
        >
          <td className="p-3 text-gray-800">{coordenaor.id}</td>
          <td className="p-3 text-gray-800">{coordenaor.eixo}</td>
          <td className="p-3 text-gray-800">{coordenaor.modalidade}</td>
          <td className="p-3 text-gray-800">{coordenaor.professor}</td>
          <td className="p-3 text-gray-800">{coordenaor.aprovaSolicitacao}</td>
          {exibirAcoes ? renderizarAcoes(coordenaor) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(coordenador: Coordenador) {
    return (
      <td>
        {props.coordenadorSelecionado ? (
          <button
            className="m-1 p-2 text-green-700 rounded-full hover:bg-purple-50"
            onClick={() => {
              props.coordenadorSelecionado?.(coordenador)
            }}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}
        {props.coordenadorExcluido ? (
          <button
            className="m-1 p-2 text-red-500 rounded-full hover:bg-purple-50"
            onClick={() => {
              props.coordenadorExcluido?.(coordenador)
            }}
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
    <table className="w-full rounded-xl overflow-hidden text-center">
      <thead className="bg-purple-700 text-gray-200">
        {renderizarCabecalho()}
      </thead>

      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
