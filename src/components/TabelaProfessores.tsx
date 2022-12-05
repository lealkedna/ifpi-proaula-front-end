import TodosProfessores from '../core/TodosProfessores'
import { IconsNativo, EditIcon } from './Icones'

interface TabelaProfessoresProps {
  professores: TodosProfessores[]
  professorSelecionado?: (professor: TodosProfessores) => void
  professorExcluido?: (professor: TodosProfessores) => void
}

export default function TabelaProfessores(props: TabelaProfessoresProps) {
  const exibirAcoes = props.professorSelecionado || props.professorExcluido

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-3">Nome</th>
        <th className="p-3">Email</th>
        <th className="p-3">Matrícula Siape</th>
        <th className="p-3">Qualificação</th>
        <th className="p-3">Eixo</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.professores?.map((professor, i) => {
      return (
        <tr
          key={professor.id}
          className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}
        >
          <td className="text-center p-3 text-gray-800">{professor.nome}</td>
          <td className="text-center p-3 text-gray-800">{professor.email}</td>
          <td className="text-center p-3 text-gray-800">
            {professor.matriculaSiape}
          </td>
          <td className="text-center p-3 text-gray-800">
            {professor.qualificacao}
          </td>
          <td className="text-center p-3 text-gray-800">{professor.eixo}</td>
          {exibirAcoes ? renderizarAcoes(professor) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(professor: TodosProfessores) {
    return (
      <td>
        {props.professorSelecionado ? (
          <button
            onClick={() => props.professorSelecionado?.(professor)}
            className={`
                        justify-center items-center mr-1
                        text-green-700 rounded-full p-2
                        hover:bg-purple-400 
                    `}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}
        {props.professorExcluido ? (
          <button
            onClick={() => props.professorExcluido?.(professor)}
            className={`
                        justify-center items-center mr-1
                        text-red-700 rounded-full p-2
                        hover:bg-purple-400 
                    `}
          >
            {IconsNativo}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
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
