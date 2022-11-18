export default class TodosCoordenadores {
  #id: string
  #eixo: string
  #modalidade: string
  #professor: string
  #aprovaSolicitacao: string

  constructor(
    id: string,
    eixo: string,
    modalidade: string,
    professor: string,
    aprovaSolicitacao: string
  ) {
    this.#id = id
    this.#eixo = eixo
    this.#modalidade = modalidade
    this.#professor = professor
    this.#aprovaSolicitacao = aprovaSolicitacao
  }

  vazio() {
    new TodosCoordenadores('', '', '', '', '')
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
