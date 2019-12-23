import React, { useContext } from 'react'
import { Context } from '../Context'

const Nav = () => {
  const [items, setItems] = useContext(Context)
  return (
    <div>
      <h3>Zach's Items</h3>
      <p>List Of Zach's Items: {items.length}#</p>
    </div>
  )
}

export default Nav