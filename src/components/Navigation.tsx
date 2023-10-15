"use client";
import { TransactionContext } from "@/contexts/transaction.context";
import { formatLastDate } from "@/utils/formatDate";
import { useContext } from "react";
import { Card } from "./Card";

const Navigation = () => {
  const { total, totalIncome, totalExpenses, handleLastTransaction } =
    useContext(TransactionContext);

  return (
    <div className="w-full max-w-1119 flex flex-row justify-between items-center gap-x-4 px-6 -mt-20 mx-auto overflow-auto scrollbar-hide max-sm:-mt-24">
      <Card
        title="Income"
        value={totalIncome}
        message={
          handleLastTransaction("Income")
            ? `Last income in ${formatLastDate(
                String(handleLastTransaction("Income"))
              )}`
            : ""
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
            fill="#00B37E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 10C16.2652 10 16.5195 10.1054 16.7071 10.2929L20.9446 14.5304C21.3351 14.9209 21.3351 15.5541 20.9446 15.9446C20.554 16.3351 19.9209 16.3351 19.5303 15.9446L16 12.4142L12.4696 15.9446C12.079 16.3351 11.4459 16.3351 11.0553 15.9446C10.6648 15.5541 10.6648 14.9209 11.0553 14.5304L15.2928 10.2929C15.4804 10.1054 15.7347 10 16 10Z"
            fill="#00B37E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 10C16.5523 10 17 10.4477 17 11L17 21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21L15 11C15 10.4477 15.4477 10 16 10Z"
            fill="#00B37E"
          />
        </svg>
      </Card>
      <Card
        title="Expenses"
        value={totalExpenses}
        message={
          handleLastTransaction("Expenses")
            ? `Last expense in ${formatLastDate(
                String(handleLastTransaction("Expenses"))
              )}`
            : ""
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
            fill="#F75A68"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0554 16.0553C11.4459 15.6648 12.0791 15.6648 12.4696 16.0553L16 19.5857L19.5304 16.0553C19.9209 15.6648 20.5541 15.6648 20.9446 16.0553C21.3351 16.4459 21.3351 17.079 20.9446 17.4696L16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071L11.0554 17.4696C10.6649 17.079 10.6649 16.4459 11.0554 16.0553Z"
            fill="#F75A68"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0001 10C16.5523 10 17.0001 10.4477 17.0001 11L17.0001 21C17.0001 21.5523 16.5523 22 16.0001 22C15.4478 22 15.0001 21.5523 15.0001 21L15.0001 11C15.0001 10.4477 15.4478 10 16.0001 10Z"
            fill="#F75A68"
          />
        </svg>
      </Card>
      <Card
        title="Total"
        background="bg-color-primary-2"
        value={total}
        message={
          handleLastTransaction("Total")
            ? `Last transaction on ${formatLastDate(
                String(handleLastTransaction("Total"))
              )}`
            : ""
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C16.5523 2 17 2.44772 17 3L17 29C17 29.5523 16.5523 30 16 30C15.4477 30 15 29.5523 15 29L15 3C15 2.44772 15.4477 2 16 2Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25736 6.75736C10.3826 5.63214 11.9087 5 13.5 5L18 5C18.7879 5 19.5681 5.15519 20.2961 5.45672C21.0241 5.75825 21.6855 6.20021 22.2426 6.75736C22.7998 7.31451 23.2417 7.97595 23.5433 8.7039C23.8448 9.43185 24 10.2121 24 11C24 11.5523 23.5523 12 23 12C22.4477 12 22 11.5523 22 11C22 10.4747 21.8965 9.95457 21.6955 9.46927C21.4945 8.98396 21.1999 8.54301 20.8284 8.17157C20.457 7.80014 20.016 7.5055 19.5307 7.30448C19.0454 7.10346 18.5253 7 18 7L13.5 7C12.4391 7 11.4217 7.42143 10.6716 8.17157C9.92143 8.92172 9.5 9.93913 9.5 11C9.5 12.0609 9.92143 13.0783 10.6716 13.8284C11.4217 14.5786 12.4391 15 13.5 15L19 15C20.5913 15 22.1174 15.6321 23.2426 16.7574C24.3679 17.8826 25 19.4087 25 21C25 22.5913 24.3679 24.1174 23.2426 25.2426C22.1174 26.3679 20.5913 27 19 27H13C11.4087 27 9.88258 26.3679 8.75736 25.2426C7.63214 24.1174 7 22.5913 7 21C7 20.4477 7.44772 20 8 20C8.55228 20 9 20.4477 9 21C9 22.0609 9.42143 23.0783 10.1716 23.8284C10.9217 24.5786 11.9391 25 13 25H19C20.0609 25 21.0783 24.5786 21.8284 23.8284C22.5786 23.0783 23 22.0609 23 21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17H13.5C11.9087 17 10.3826 16.3679 9.25736 15.2426C8.13214 14.1174 7.5 12.5913 7.5 11C7.5 9.4087 8.13214 7.88258 9.25736 6.75736Z"
            fill="white"
          />
        </svg>
      </Card>
    </div>
  );
};

export { Navigation };
