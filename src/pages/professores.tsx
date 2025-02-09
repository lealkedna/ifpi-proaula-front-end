import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import BotaoAdicionar from '../components/BotaoAdicionar'
import TabelaProfessor from '../components/TabelaProfessor'
import FormularioProfessor from '../components/FormularioProfessor'
import useProfessores from '../hooks/useProfessores'

export default function Professores() {
  const {
    professor,
    professores,
    novoProfessor,
    excluirProfessor,
    salvarProfessor,
    selecionarProfessor,
    tabelaVisivel,
    exibirTabela,
  } = useProfessores()
  return (
    <div
      className={`
          flex justify-center items-center h-screen
         bg-gray-600
      `}
    >
      <Layout titulo="Professores - Administrador">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <BotaoAdicionar onClick={novoProfessor}>
                Novo Professor
              </BotaoAdicionar>
            </div>
            <TabelaProfessor
              professores={professores}
              professorSelecionado={selecionarProfessor}
              professorInativado={excluirProfessor}
            />
          </>
        ) : (
          <FormularioProfessor
            professor={professor}
            cancelado={() => exibirTabela}
            professorMudou={salvarProfessor}
          />
        )}
      </Layout>
    </div>
  )
}
