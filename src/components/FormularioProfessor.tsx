import React from 'react'

import { useState } from 'react'
import TodosProfessores from '../core/TodosProfessores'
import EntradaProfessor from './EntradaAddProfessor'
import Botao from './BotaoAddProfessor'

interface FormularioProfessoresProps {
  professores: TodosProfessores
  professorMudou?: (turmas: TodosProfessores) => void
  cancelado?: () => void
}

export default function FormularioProfessores(
  props: FormularioProfessoresProps
) {
  const id = props.professores?.id

  const [nome, setNome] = useState(props.professores?.nome ?? '')
  const [matriculaSiape, setMatriculaSiape] = useState(
    props.professores?.matriculaSiape ?? ''
  )
  const [email, setEmail] = useState(props.professores?.email ?? '')
  const [qualificacao, setQualificacao] = useState(
    props.professores?.qualificacao ?? ''
  )
  const [eixo, setEixo] = useState(props.professores?.eixo ?? '')

  return (
    <div>
      {id ? (
        <EntradaProfessor
          somenteLeitura
          texto="Código"
          valor={id}
          className="mb-2"
        />
      ) : (
        false
      )}

      <EntradaProfessor
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-2"
      />

      <EntradaProfessor
        texto="Matricula"
        tipo="text"
        valor={matriculaSiape}
        valorMudou={setMatriculaSiape}
        className="mb-2"
      />

      <EntradaProfessor
        texto="Email"
        tipo="text"
        valor={email}
        valorMudou={setEmail}
        className="mb-2"
      />

      <EntradaProfessor
        texto="Qualificacao"
        tipo="text"
        valor={qualificacao}
        valorMudou={setQualificacao}
        className="mb-2"
      />

      <EntradaProfessor
        texto="Eixo"
        tipo="text"
        valor={eixo}
        valorMudou={setEixo}
        className="mb-2"
      />

      <div className="flex justify-end mt-3">
        <Botao
          className="mr-2"
          onClick={() =>
            props.professorMudou?.(
              new TodosProfessores(
                id,
                nome,
                email,
                matriculaSiape,
                qualificacao,
                eixo
              )
            )
          }
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  )
}
