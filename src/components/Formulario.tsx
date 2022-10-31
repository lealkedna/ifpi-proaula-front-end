import { useState } from 'react'
import PeriodoLetivo from '../core/PeriodoLetivo'
import Botao from './Botao'
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

      <Entrada texto="Descrisão" valor={descricao} valorMudou={setDescricao} />

      <Entrada
        texto="Data de Inicio"
        tipo="text"
        valor={dataInicio}
        valorMudou={setdataInicio}
      />

      <Entrada
        texto="Data de Termino"
        tipo="text"
        valor={dataTermino}
        valorMudou={setdataTermino}
      />
      <div className="flex justify-end mt-3">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() =>
            props.periodoLetivoMudou?.(
              new PeriodoLetivo(id, descricao, dataInicio, dataTermino)
            )
          }
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>

        <Botao onClick={props.cancelado}>cancelar</Botao>
      </div>
    </div>
  )
}
