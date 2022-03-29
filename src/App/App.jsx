import {
  TransactionsList,
  AddTransaction,
  Header,
  IncomeExpenses,
  Balance,
} from '../Components'

import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App
