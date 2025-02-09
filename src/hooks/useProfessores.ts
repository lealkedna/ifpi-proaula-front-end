import { useEffect, useState } from "react"
import ColecaoProfessor from "../backend/db/ColecaoProfessor"
import Professor from "../core/Professor"
import ProfessorRepositorio from "../core/ProfessorRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useProfessores() {
  const repo: ProfessorRepositorio = new ColecaoProfessor()

  const {tabelaVisivel, formularioVisivel, exibirTabela, exibirForm} = useTabelaOuForm()

  const [professor, setProfessor] = useState<Professor>(Professor.vazio())
  const [professores, setProfessores] = useState<Professor[]>([])
 


  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((professores) => {
      setProfessores(professores)
      exibirTabela()
    })
  }

  function selecionarProfessor(professor: Professor) {
    exibirForm()
    setProfessor(professor)
  }

  async function excluirProfessor(professor: Professor) {
    await repo.excluir(professor)
    obterTodos()
    console.log(`O professor ${professor.nome} foi inativado`)
    alert(`O professor ${professor.nome} foi inativado`)
  }

  function novoProfessor() {
    setProfessor(Professor.vazio())
    exibirForm()
  }

  async function salvarProfessor(professor: Professor) {
    console.log(professor)

    if (professor.matricula == '') {
      alert(`preencha a matricula corretamente `)
      return
    }
    if (professor.nome == '') {
      alert(`preencha  o nomecorretamente `)
      return
    }
    if (professor.email == '') {
      alert(`preencha o email corretamente `)
      return
    }
    if (professor.qualificacao == '') {
      alert(`preencha a qualificação corretamente `)
      return
    }
    if (professor.eixo == '') {
      alert(`preencha o eixo corretamente `)
      return
    }
    await repo.salvar(professor)
    obterTodos()
    //setVisivel('tabelaProfessor')
    exibirTabela()
    alert(`Salvo com Sucesso! `)
  }

  return{
    professor,
    professores,
    novoProfessor,
    excluirProfessor,
    selecionarProfessor,
    salvarProfessor,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
    formularioVisivel
  }
}
