import Professor from "./Professor"

export default class Coordenador {
  #id: number
  #eixo: string
  #modalidade: string
  #professor: Professor
  #aprovaSolicitacao: string

  constructor(id: number, eixo: string, modalidade: string, professor: Professor, aprovaSolicitacao: string) {
    this.#id = id
    this.#eixo = eixo
    this.#modalidade = modalidade
    this.#professor = professor
    this.#aprovaSolicitacao = aprovaSolicitacao
  }

  static vazio() {
    return new Coordenador(0, '', '', new Professor('', '', '', '', ''), '')
  }

  get id() {
    return this.#id
  }

  get eixo() {
    return this.#eixo
  }

  get modalidade() {
    return this.#modalidade
  }

  get professor() {
    return this.#professor
  }

  get aprovaSolicitacao() {
    return this.#aprovaSolicitacao
  }
}
