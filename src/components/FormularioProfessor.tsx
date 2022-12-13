import { useState } from 'react'
import Professor from '../core/Professor'
import EntradaProfessor from './EntradaProfessor'
import BotaoSalvar from './BotaoSalvar'
import BotaoCancelar from './BotaoCancelar'

interface FormularioProfessorProps {
  professor: Professor
  professorMudou?: (professor: Professor) => void
  cancelado?: () => void
}

export default function FormularioProfessor(props: FormularioProfessorProps) {
  const matricula = props.professor?.matricula

  const nome = props.professor?.nome

  const [email, setEmail] = useState(props.professor?.email ?? '')

  const [qualificacao, setQualificacao] = useState(props.professor?.qualificacao ?? '')

  const [eixo, setEixo] = useState(props.professor?.eixo ?? '')

  return (
    <div>
      <EntradaProfessor
        texto="Matrícula"
        tipo="text"
        valor={matricula}
      />

      <EntradaProfessor
        texto="Nome"
        tipo="text"
        valor={nome}
      />

      <EntradaProfessor
        texto="Email"
        tipo="text"
        valor={email}
        valorMudou={setEmail}
      />

      <EntradaProfessor
        texto="Qualificação"
        tipo="text"
        valor={qualificacao}
        valorMudou={setQualificacao}
      />

      <EntradaProfessor
        texto="Eixo"
        tipo="text"
        valor={eixo}
        valorMudou={setEixo}
      />

      <div className="flex justify-end mt-5">
        <BotaoSalvar
          className="mr-2"
          onClick={() =>
            props.professorMudou?.(
              new Professor(
                matricula,
                nome,
                email,
                qualificacao,
                eixo
              )
            )
          }
        >
          {matricula ? 'Alterar' : 'Salvar'}
        </BotaoSalvar>

        <BotaoCancelar className="ml-2" onClick={props.cancelado}>
          Cancelar
        </BotaoCancelar>
      </div>
    </div>
  )
}
