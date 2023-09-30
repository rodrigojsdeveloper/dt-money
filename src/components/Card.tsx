interface ICard {
  title: "Entradas" | "Saídas" | "Total";
  children: React.ReactNode;
  value: string;
  background?: "bg-color-primary-2";
  margin?: "mx-2.5";
}

const Card = ({ title, children, value, background, margin }: ICard) => {
  return (
    <div
      className={`w-full max-w-352 min-w-280 h-137 ${
        background ? background : "bg-grey-4"
      } py-6 px-8 ${margin ? margin : ""} rounded-def`}
    >
      <div className="w-full flex flex-row justify-between mb-3">
        <p className="font-normal text-base text-grey-7">{title}</p>

        {children}
      </div>

      <p className="font-bold text-32 text-grey-8">R$ {value}</p>
    </div>
  );
};

export { Card };
