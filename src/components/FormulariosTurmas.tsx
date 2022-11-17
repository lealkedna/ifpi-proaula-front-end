import React from 'react'

import { useState } from 'react'
import TodasTurmas from '../core/TodasTurmas'
import Botao from './Botao'
import EntradasTurmas from './EntradasTurmas'

interface FormularioTurmasProps {
  turmas: TodasTurmas
  turmaMudou?: (turmas: TodasTurmas) => void
  cancelado?: () => void
}

export default function FormularioTurmas(props: FormularioTurmasProps) {
  const id = props.turmas?.id ?? null

  const [nome, setNome] = useState(props.turmas?.nome ?? '')
  const [turno, setTurno] = useState(props.turmas?.turno ?? '')
  const [curso, setCurso] = useState(props.turmas?.curso ?? '')
  const [periodoletivo, setPeriodoLetivo] = useState(
    props.turmas?.periodoletivo ?? ''
  )

  return (
    <div>
      {id ? <EntradasTurmas somenteLeitura texto="codigo" valor={id} /> : false}

      <EntradasTurmas
        texto="Nome"
        tipo="text"
        valor={nome}
        valorMudou={setNome}
        className="mb-2"
      />

      <EntradasTurmas
        texto="Turno"
        tipo="text"
        valor={turno}
        valorMudou={setTurno}
        className="mb-2"
      />

      <EntradasTurmas
        texto="Curso"
        tipo="text"
        valor={curso}
        valorMudou={setCurso}
        className="mb-2"
      />

      <EntradasTurmas
        texto="Periodo Letivo"
        tipo="text"
        valor={periodoletivo}
        valorMudou={setPeriodoLetivo}
      />
      <div className="flex justify-end mt-3">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() =>
            props.turmaMudou?.(
              new TodasTurmas(id, nome, turno, curso, periodoletivo)
            )
          }
        >
          {id ? 'Alterar Turma' : 'Salvar Turma'}
        </Botao>

        <Botao cor="blue" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}
