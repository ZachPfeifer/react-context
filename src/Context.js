// import React from 'react';
import React, { useState, createContext } from 'react'

export const Context = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "String 1",
      price: "$10",
      id: 1233
    },
    {
      name: "String 2",
      price: "$15",
      id: 1234
    },
    {
      name: "String 3",
      price: "$9.99",
      id: 1235,
    }
  ])
  return (
    <Context.Provider value={[items, setItems]}>
      {props.children}
    </Context.Provider>
  )
}