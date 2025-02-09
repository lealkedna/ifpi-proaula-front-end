import Professor from "./Professor";

export default interface ProfessorRepositorio{
    salvar(professor: Professor): Promise<Professor>
    excluir(professor: Professor): Promise<void>
    obterTodos(): Promise<Professor[]>

}