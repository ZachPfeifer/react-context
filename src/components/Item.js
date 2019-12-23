import React from 'react'

const Item = ({ name, price }) => {

  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Item