import { useGlobalState } from '../context/GlobalState'
import TransactionList from './transactions/TransactionList'

function Balance() {
    const { transactions } = useGlobalState()

    const amounts  = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='flex justify-between'>
      {/* {JSON.stringify(total, null, 2)} */}
      <h3>Tu Balance</h3>
        <h1 className='text-2x1 font-bold'>${total}</h1>
    </div>
  )
}

export default Balance