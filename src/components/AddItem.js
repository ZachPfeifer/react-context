import React, { useState, useContext } from 'react'
import { Context } from '../Context'

const AddItem = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [items, setItems] = useContext(Context)

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
  }


  const addItem = e => {
    e.preventDefault()
    setItems(prevItems => [...prevItems, { name: name, price: price }])
  }
  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName} />
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice} />

      <button>Submit</button>
    </form>
  )
}

export default AddItem