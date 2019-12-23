import React, { useState, useContext } from 'react'
import Item from './Item'
import { Context } from '../Context'


const Example = () => {
  const [items, setItems] = useContext(Context)
  return (
    <div>
      {
        items.map(item => (
          <Item
            name={item.name}
            price={item.price}
            key={item.id}
          />
        ))
      }
    </div>
  )
}

export default Example