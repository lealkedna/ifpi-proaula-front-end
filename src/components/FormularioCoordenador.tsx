import React, { useState } from 'react'
import Todos_Coordenadores from '../core/Todos_Coordenadores'
import BotaoCancelar from './BotaoCancelar'
import BotaoSalvar from './BotaoSalvar'
import EntradaCoodenador from './EntradaCoordenador'

interface FormularioCoordenadorProps {
  coordenador: Todos_Coordenadores
  cancelado?: () => void
  coordenadorMudou?: (coordenador: Todos_Coordenadores) => void
}

export default function FormularioCoordenador(
  props: FormularioCoordenadorProps
) {
  const id = props.coordenador?.id ?? null

  const [eixo, setEixo] = useState(props.coordenador?.eixo ?? '')
  const [modalidade, setModalidade] = useState(
    props.coordenador?.modalidade ?? ''
  )
  const [professor, setProfessor] = useState(props.coordenador?.professor ?? '')
  const [aprovarSolicitacao, setAprovarSolicitacao] = useState(
    props.coordenador?.aprovaSolicitacao ?? ''
  )

  return (
    <div>
      <EntradaCoodenador
        texto="Eixo"
        valor={eixo}
        valorMudou={setEixo}
        className="mb-2"
      />

      <EntradaCoodenador
        texto="Modalidade"
        valor={modalidade}
        valorMudou={setModalidade}
        className="mb-2"
      />

      <EntradaCoodenador
        texto="Professor"
        valor={professor}
        valorMudou={setProfessor}
        className="mb-2"
      />

      <EntradaCoodenador
        texto="Aprovar Solicitação"
        valor={aprovarSolicitacao}
        valorMudou={setAprovarSolicitacao}
        className="mb-2"
      />
      <div className="flex justify-end mt-5">
        <BotaoSalvar
          className="mr-2"
          onClick={() =>
            props.coordenadorMudou?.(
              new Todos_Coordenadores(
                id,
                eixo,
                modalidade,
                professor,
                aprovarSolicitacao
              )
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
