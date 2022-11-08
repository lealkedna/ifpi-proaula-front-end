import React from 'react'

import Layout from '../components/Layout'

export default function Professores() {
  // esse e a tela dos professoes lembrando que e so colocar o /professores na url
  return (
    <div
      className={`
            flex justify-center items-center h-screen
            bg-gray-600
          `}
    >
      <Layout titulo="HU ?? - Professores - ADM">
        <span>conteudo</span>
      </Layout>
    </div>
  )
}
