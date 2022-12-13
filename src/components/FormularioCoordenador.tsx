import React, { useState } from 'react'
import Coordenador from '../core/Coordenador'
import EntradaCoodenador from './EntradaCoordenador'
import BotaoSalvar from './BotaoSalvar'
import BotaoCancelar from './BotaoCancelar'
import Professor from '../core/Professor'

interface FormularioCoordenadorProps {
  coordenador: Coordenador
  cancelado?: () => void
  coordenadorMudou?: (coordenador: Coordenador) => void
}

export default function FormularioCoordenador(props: FormularioCoordenadorProps) {
  const id = props.coordenador?.id

  const [eixo, setEixo] = useState(props.coordenador?.eixo ?? '')

  const [modalidade, setModalidade] = useState(props.coordenador?.modalidade ?? '')

  const [professor, setProfessor] = useState(props.coordenador?.professor ?? '')
  
  const [aprovarSolicitacao, setAprovarSolicitacao] = useState(props.coordenador?.aprovaSolicitacao ?? '')

  return (
    <div>
      <EntradaCoodenador
        texto="Eixo"
        tipo="text"
        valor={eixo}
        valorMudou={setEixo}
      />

      <EntradaCoodenador
        texto="Modalidade"
        tipo="text"
        valor={modalidade}
        valorMudou={setModalidade}
      />

      <EntradaCoodenador
        texto="Professor"
        tipo="text"
        valor={professor.nome}
        valorMudou={setProfessor}
      />

      <EntradaCoodenador
        texto="Aprovar Solicitação"
        tipo="text"
        valor={aprovarSolicitacao}
        valorMudou={setAprovarSolicitacao}
      />
      <div className="flex justify-end mt-5">
        <BotaoSalvar
          className="mr-2"
          onClick={() =>
            props.coordenadorMudou?.(
              new Coordenador(
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
