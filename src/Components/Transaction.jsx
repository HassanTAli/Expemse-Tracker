import React from 'react'

export const Transaction = ({ transaction }) => {
  const { text, amount } = transaction
  return (
    <li className="minus">
      {text} <span>-${amount}</span>
      <button className="delete-btn">x</button>
    </li>
  )
}
