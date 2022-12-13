import PeriodoLetivo from "./PeriodoLetivo"

export default class Turma {
  #id: number
  #descricao: string
  #turno: string
  #curso: string
  #periodoLetivo: PeriodoLetivo

  constructor(id: number, descricao: string, turno: string, curso: string, periodoLetivo: PeriodoLetivo) {
    this.#id = id
    this.#descricao = descricao
    this.#turno = turno
    this.#curso = curso
    this.#periodoLetivo = periodoLetivo
  }

  static vazio() {
    return new Turma(0, '', '', '', new PeriodoLetivo(0, "", "", ""))
  }

  get id() {
    return this.#id
  }

  get descricao() {
    return this.#descricao
  }

  get turno() {
    return this.#turno
  }

  get curso() {
    return this.#curso
  }

  get periodoLetivo() {
    return this.#periodoLetivo
  }
}
