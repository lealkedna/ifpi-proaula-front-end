import TodosProfessores from '../core/TodosProfessores'
import BotaoEditar from './BotaoEditar'
import BotaoInativar from './BotaoInativar'
import { iconeEditar, IconeInativar } from './Icones'

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
          <td className="p-3">{professor.nome}</td>
          <td className="p-3">{professor.email}</td>
          <td className="p-3">{professor.matriculaSiape}</td>
          <td className="p-3">{professor.qualificacao}</td>
          <td className="p-3">{professor.eixo}</td>
          {exibirAcoes ? renderizarAcoes(professor) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(professor: TodosProfessores) {
    return (
      <td className="p-3">
        {props.professorSelecionado ? (
          <BotaoEditar onClick={() => props.professorSelecionado?.(professor)}>
            {iconeEditar}
          </BotaoEditar>
        ) : (
          false
        )}
        {props.professorExcluido ? (
          <BotaoInativar onClick={() => props.professorExcluido?.(professor)}>
            {IconeInativar}
          </BotaoInativar>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden text-center">
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
