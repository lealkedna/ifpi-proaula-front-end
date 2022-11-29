import { useState } from 'react'
import PeriodoLetivo from '../core/PeriodoLetivo'
import BotaoCancelar from './BotaoCancelar'
import BotaoSalvar from './BotaoSalvar'
import Entrada from './Entrada'

interface FormProps {
  periodoLetivo: PeriodoLetivo
  periodoLetivoMudou?: (periodoLetivo: PeriodoLetivo) => void
  cancelado?: () => void
}

export default function Formulario(props: FormProps) {
  //id se n der certo vou alterar novamente
  const id = props.periodoLetivo?.id

  const [descricao, setDescricao] = useState(
    props.periodoLetivo?.descricao ?? ''
  )
  const [dataInicio, setdataInicio] = useState(
    props.periodoLetivo?.dataInicio ?? ''
  )
  const [dataTermino, setdataTermino] = useState(
    props.periodoLetivo?.dataTermino ?? ''
  )

  return (
    <div>
      {id ? (
        <Entrada
          somenteLeitura
          texto="Codigo"
          valor={id}
          valorMudou={setDescricao}
        />
      ) : (
        false
      )}

      <Entrada texto="Descrição" valor={descricao} valorMudou={setDescricao} />

      <Entrada
        texto="Data de Início"
        tipo="text"
        valor={dataInicio}
        valorMudou={setdataInicio}
      />

      <Entrada
        texto="Data de Término"
        tipo="text"
        valor={dataTermino}
        valorMudou={setdataTermino}
      />
      <div className="flex justify-end mt-5">
        <BotaoSalvar
          className="mr-2"
          onClick={() =>
            props.periodoLetivoMudou?.(
              new PeriodoLetivo(id, descricao, dataInicio, dataTermino)
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
