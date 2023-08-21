import { useGlobalState } from "../../context/GlobalState";

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount)

    const ingreso = amounts
    .filter( (item) => item > 0)
    .reduce((acc, item) => ( acc += item ), 0)

    const gasto = amounts
    .filter( (item) => item < 0)
    .reduce((acc, item) => ( acc += item ), 0)

  return (
    <>
      <div>
        <h4>Ingresos</h4>
        <p>{ingreso}</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p>{gasto}</p>
      </div>
    </>
  );
}

export default IncomeExpenses;
