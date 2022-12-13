export default class PeriodoLetivo {
  #id: number
  #descricao: string
  #dataInicio: string
  #dataTermino: string

  constructor (id: number, descricao: string, dataInicio: string, datatermino: string) {
      this.#id = id
      this.#descricao = descricao
      this.#dataInicio = dataInicio
      this.#dataTermino = datatermino
  }

  static vazio() {
      return new PeriodoLetivo(0, "", "", "")
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
