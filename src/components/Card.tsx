"use client";
import { ICardProps } from "@/interfaces";

const Card = ({
  title,
  children,
  value,
  background,
  margin,
  message,
}: ICardProps) => {
  return (
    <div
      className={`w-full max-w-352 min-w-280 h-137 ${
        background ? background : "bg-grey-4"
      } py-6 px-8 ${margin ? margin : ""} mb-1.5 rounded-def max-sm:h-150`}
    >
      <div className="w-full flex flex-row justify-between mb-3">
        <p className="font-normal text-base text-grey-7">{title}</p>

        {children}
      </div>

      <p className="font-bold text-32 text-grey-8 max-sm:text-2xl max-sm:mb-1">
        R$ {value.toLocaleString("pt-BR")}
      </p>
      <p className="font-normal text-sm text-grey-6 sm:hidden">
        {message}
      </p>
    </div>
  );
};

export { Card };
