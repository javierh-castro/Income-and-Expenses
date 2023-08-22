import { useGlobalState } from "../../context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();


  // Aca cambie la x 
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm ">{transaction.description}</p>
      <div>
      <span className="px-3" >${transaction.amount}</span> 
      <button className="bg-red-600 px-3 rounded-lg"
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        x
      </button>
      </div>
    </li>
  );
}

export default TransactionItem;
