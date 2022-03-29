import { Fragment, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext)
  const renderedTransactions = transactions.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} />
  ))
  return (
    <Fragment>
      <h3>History</h3>
      <ul className="list">{renderedTransactions}</ul>
    </Fragment>
  )
}
