import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState(" ");
  const [amount, setAmount] = useState(0);
  const [amounts, setAmounts] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: -amounts,
      });
    } else {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount,
      });
    }
    setAmounts(0);
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Escribe la descripción"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <div className="flex justify-between my-2">
          <input
            type="number"
            step="0.01"
            placeholder="0"
            onChange={(e) => setAmount(e.target.value)}
            className="bg-green-500 text-white px-2 py-2 rounded-lg block w-full mr-2"
            value={amount}
          />
          <input
            type="number"
            step="0.01"
            placeholder="-0"
            onChange={(e) => setAmounts(e.target.value)}
            className="bg-custom-red text-white px-2 py-2 rounded-lg block w-full ml-2"
            value={amounts}
          />
        </div>
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
          Añadir transacción
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
