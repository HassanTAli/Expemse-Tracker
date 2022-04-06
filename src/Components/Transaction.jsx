import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const { text, amount, id } = transaction
  const sign = amount < 0 ? '-' : '+'
  const classOp = amount < 0 ? 'minus' : 'plus'

  return (
    <li className={classOp}>
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        x
      </button>
    </li>
  )
}
