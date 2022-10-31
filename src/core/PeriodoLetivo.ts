export default class PeriodoLetivo {
  #id: string
  #descricao: string
  #dataInicio: string
  #dataTermino: string

  constructor(
    id: string,
    descricao: string,
    dataInicio: string,
    dataTermino: string
  ) {
    this.#id = id
    this.#descricao = descricao
    this.#dataInicio = dataInicio
    this.#dataTermino = dataTermino
  }

  static vazio() {
    return new PeriodoLetivo('', '', '', '')
  }

  get id() {
    return this.#id
  }

  get descricao() {
    return this.#descricao
  }

  get dataInicio() {
    return this.#dataInicio
  }

  get dataTermino() {
    return this.#dataTermino
  }
}
