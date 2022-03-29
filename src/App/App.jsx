import { GlobalProvider } from '../context/GlobalState'

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
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
