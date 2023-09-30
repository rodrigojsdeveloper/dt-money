import { ITransaction } from "@/interfaces";
import { formatDate } from "@/utils/formatDate";

const Transaction = ({ transaction }: ITransaction) => {
  return (
    <div className="w-full max-w-1119 h-66 flex flex-row justify-between items-center bg-grey-3 py-5 px-8 mb-2 rounded-def">
      <h2 className="font-normal text-base text-grey-5">{transaction.title}</h2>
      <p
        className={`font-normal text-base ${
          transaction.value < 0 ? "text-red" : "text-color-primary-1"
        }`}
      >
        R$ {transaction.value < 0 ? transaction.value : transaction.value}
      </p>
      <p className="font-normal text-base text-grey-5">
        {transaction.category}
      </p>
      <p className="font-normal text-base text-grey-5">
        {formatDate(transaction.created_at)}
      </p>
    </div>
  );
};

export { Transaction };
