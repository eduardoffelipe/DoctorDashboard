/* eslint @typescript-eslint/ban-types: "off" */

import React from 'react'

interface Props {
  selectName?: string
  options: Array<Object<String>>
}

const Select: React.FC<Props> = ({ selectName, options }) => {
  return (
    <>
      <select name={selectName} id="">
        {options.map((option, id) => (
          <option value={option.value} key={id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}
export default Select
