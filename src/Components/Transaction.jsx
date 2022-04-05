export const Transaction = ({ transaction }) => {
  const { text, amount } = transaction
  const sign = amount < 0 ? '-' : '+'
  const classOp = amount < 0 ? 'minus' : 'plus'

  return (
    <li className={classOp}>
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  )
}
