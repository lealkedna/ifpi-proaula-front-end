export default class TodosProfessores {
  #id: string
  #nome: string
  #email: string
  #matriculaSiape: string
  #qualificacao: string
  #eixo: string

  constructor(
    id: string,
    nome: string,
    email: string,
    matriculaSiape: string,
    qualificacao: string,
    eixo: string
  ) {
    this.#id = id
    this.#nome = nome
    this.#email = email
    this.#matriculaSiape = matriculaSiape
    this.#qualificacao = qualificacao
    this.#eixo = eixo
  }

  static vazio() {
    return new TodosProfessores('', '', '', '', '', '')
  }

  get id() {
    return this.#id
  }

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get matriculaSiape() {
    return this.#matriculaSiape
  }

  get qualificacao() {
    return this.#qualificacao
  }
  get eixo() {
    return this.#eixo
  }
}
