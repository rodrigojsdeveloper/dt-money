interface ICard {
  title: "Entradas" | "Saídas" | "Total";
  children: React.ReactNode;
  value: string;
  background?: "bg-grey-4";
}

const Card = ({ title, children, value, background }: ICard) => {
  return (
    <div
      className={`w-full max-w-352 h-137 ${
        background ? background : "bg-color-primary-2"
      } py-6 px-8 rounded-def`}
    >
      <div className="w-full flex flex-row justify-between">
        <p className="font-normal text-base text-grey-7">{title}</p>

        {children}
      </div>

      <p className="font-bold text-32 text-grey-8">{value}</p>
    </div>
  );
};

export { Card };
