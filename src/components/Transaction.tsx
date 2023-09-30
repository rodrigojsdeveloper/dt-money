interface ITransactionProps {
  title: string;
  value: number;
  category: string;
  date: string;
}

const Transaction = ({ title, value, category, date }: ITransactionProps) => {
  return (
    <div className="w-full max-w-1119 h-66 flex flex-row justify-between items-center bg-grey-3 py-5 px-8 mb-2 rounded-def">
      <h2 className="font-normal text-base text-grey-5">{title}</h2>
      <p
        className={`font-normal text-base ${
          value < 0 ? "text-red" : "text-color-primary-1"
        }`}
      >
        R$ {value < 0 ? value : `-${value}`}
      </p>
      <p className="font-normal text-base text-grey-5">{category}</p>
      <p className="font-normal text-base text-grey-5">{date}</p>
    </div>
  );
};

export { Transaction };
