export default class Turmas {
  #id: string
  #nome: string
  #turno: string
  #curso: string
  #periodoletivo: string

  constructor(
    id: string,
    nome: string,
    turno: string,
    curso: string,
    periodoletivo: string
  ) {
    this.#id = id
    this.#nome = nome
    this.#turno = turno
    this.#curso = curso
    this.#periodoletivo = periodoletivo
  }

  static vazio() {
    return new Turmas('', '', '', '', '')
  }

  get id() {
    return this.#id
  }

  get nome() {
    return this.#nome
  }

  get turno() {
    return this.#turno
  }

  get curso() {
    return this.#curso
  }

  get periodoletivo() {
    return this.#periodoletivo
  }
}
