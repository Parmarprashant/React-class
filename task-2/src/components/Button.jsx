import React from 'react'

function Button({ fruits, removeItem }) {
  return (
    <ul>
      {fruits.map((item, index) => (
        <li key={index}>
          {item}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Button
