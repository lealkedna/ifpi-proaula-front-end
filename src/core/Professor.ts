export  default  class Professor {
    #matricula: string
    #nome: string
    #email: string
    #qualificacao: string
    #eixo: string

    constructor(matricula: string, nome: string, email: string, qualificacao: string, eixo: string) {
        this.#matricula = matricula
        this.#nome = nome
        this.#email = email
        this.#qualificacao = qualificacao
        this.#eixo = eixo
    }

    static vazio() {
        return new Professor("", "", "", "", "")
    }
    
    get nome() {
        return this.#nome
    }
    
    get email() {
        return this.#email
    }
    
    get matricula() {
        return this.#matricula
    }
    
    get qualificacao() {
        return this.#qualificacao
    }

    get eixo() {
        return this.#eixo
    }
}
