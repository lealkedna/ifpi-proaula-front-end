import { useState } from 'react'
import PeriodoLetivo from '../core/PeriodoLetivo'
import Entrada from './EntradaPeriodoLetivo'
import BotaoSalvar from './BotaoSalvar'
import BotaoCancelar from './BotaoCancelar'
import CheckBox from './CheckBox'

interface FormularioPeriodoLetivoProps {
  periodoLetivo: PeriodoLetivo
  periodoLetivoMudou?: (periodoLetivo: PeriodoLetivo) => void
  cancelado?: () => void
}

export default function FormularioPeriodoLetivo(props: FormularioPeriodoLetivoProps) {
  const id = props.periodoLetivo?.id

  const [descricao, setDescricao] = useState(props.periodoLetivo?.descricao ?? '')

  const [dataInicio, setdataInicio] = useState(props.periodoLetivo?.dataInicio ?? '')
  
  const [dataTermino, setdataTermino] = useState(props.periodoLetivo?.dataTermino ?? '')

  return (
    <div>
      <Entrada
        texto="Descrição"
        tipo="text"
        valor={descricao}
        valorMudou={setDescricao} />

      <Entrada
        texto="Data de Início"
        tipo="date"
        valor={dataInicio}
        valorMudou={setdataInicio}
      />

      <Entrada
        texto="Data de Término"
        tipo="date"
        valor={dataTermino}
        valorMudou={setdataTermino}
      />

      <div className="mt-2">
        <CheckBox>
          <span>Desativar</span>
        </CheckBox>
      </div>

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
