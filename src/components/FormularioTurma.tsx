import React from 'react'
import { useState } from 'react'
import Turma from '../core/Turma'
import BotaoCancelar from './BotaoCancelar'
import BotaoSalvar from './BotaoSalvar'
import EntradaTurma from './EntradaTurma'

interface FormularioTurmaProps {
  turma: Turma
  turmaMudou?: (turma: Turma) => void
  cancelado?: () => void
}

export default function FormularioTurma(props: FormularioTurmaProps) {
  const id = props.turma?.id

  const [descricao, setDescricao] = useState(props.turma?.descricao ?? '')

  const [turno, setTurno] = useState(props.turma?.turno ?? '')

  const [curso, setCurso] = useState(props.turma?.curso ?? '')

  const [periodoLetivo, setPeriodoLetivo] = useState(props.turma?.periodoLetivo ?? '')

  return (
    <div>
      <EntradaTurma
        texto="descricao"
        tipo="text"
        valor={descricao}
        valorMudou={setDescricao}
      />

      <EntradaTurma
        texto="Turno"
        tipo="text"
        valor={turno}
        valorMudou={setTurno}
      />

      <EntradaTurma
        texto="Curso"
        tipo="text"
        valor={curso}
        valorMudou={setCurso}
      />

      <EntradaTurma
        texto="Período Letivo"
        tipo="text"
        valor={periodoLetivo.descricao}
        valorMudou={setPeriodoLetivo}
      />
      <div className="flex justify-end mt-5">
        <BotaoSalvar
          className="mr-2"
          onClick={() =>
            props.turmaMudou?.(
              new Turma(id, descricao, turno, curso, periodoLetivo)
            )
          }
        >
          {id ? 'Alterar' : 'Salvar'}
        </BotaoSalvar>

        <BotaoCancelar className="ml-2" onClick={props.cancelado}>
          Cancelar
        </BotaoCancelar>
      </div>
    </div>
  )
}
