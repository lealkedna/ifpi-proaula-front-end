import React, { useState } from 'react'
import Todos_Coordenadores from '../core/Todos_Coordenadores'
import Botao from './Botao'
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
      {id ? (
        <EntradaCoodenador
          somenteLeitura
          texto="id"
          valor={id}
          className="mb-2"
        />
      ) : (
        false
      )}

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
      <div className="flex justify-end mt-3">
        <Botao
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
        </Botao>

        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  )
}
