import React, { useState } from 'react'

interface CheckboxProps {
  children: React.ReactNode
}

export default function CheckBox(props: CheckboxProps) {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="form-group form-check">
      <label>
        <input
          className="mr-2"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {props.children}
      </label>
      {/* <p>Is "My Value" checked? {checked.toString()}</p> */}
    </div>
  )
}
