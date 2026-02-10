import React, { useState } from 'react'
import Button from './components/Button'
import Color from './components/Color'

function App() {
  const [fruits, setFruits] = useState(["apple", "mango", "gauva"]);

  function removeItem(index) {
    const removeFruits = fruits.filter((_,i) => i !== index);
    setFruits(removeFruits);
  }
  return (
    <>
      <Button fruits={fruits} removeItem={removeItem} />
      <Color></Color>
    </>
  )
}

export default App
