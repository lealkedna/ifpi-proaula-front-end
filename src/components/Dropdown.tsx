import React from 'react'

export default function Dropdown() {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className={`
                    w-10/12 p-2
                    text-gray-800 bg-white 
                    border rounded-md shadow-sm outline-none 
                    appearance-none focus:border-indigo-600`}
      >
        <option>Desativado</option>
        <option>Ativado</option>
      </select>
    </div>
  )
}
