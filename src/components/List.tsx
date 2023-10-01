"use client";
import { TransactionContext } from "@/contexts/transaction.context";
import { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

const List = () => {
  const {
    handleNextPage,
    handlePreviousPage,
    setDisabledNextPage,
    setDisabledPreviousPage,
    currentPage,
    transactionsPerPage,
    paginatedTransactions,
    filteredTransactions,
  } = useContext(TransactionContext);

  useEffect(() => {
    setDisabledPreviousPage(currentPage === 1);
    setDisabledNextPage(
      currentPage * transactionsPerPage >= filteredTransactions.length
    );
  }, [currentPage, filteredTransactions]);

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  const currentPageSpans = [];
  for (let i = 1; i <= totalPages; i++) {
    currentPageSpans.push(i);
  }

  return (
    <div>
      <menu className="w-full max-w-1119 px-6 mx-auto">
        {paginatedTransactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </menu>

      <div className="w-full max-w-352 flex flex-row justify-center items-center my-10 mx-auto">
        {currentPage === 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7955 3.7045C16.2348 4.14384 16.2348 4.85616 15.7955 5.2955L9.09099 12L15.7955 18.7045C16.2348 19.1438 16.2348 19.8562 15.7955 20.2955C15.3562 20.7348 14.6438 20.7348 14.2045 20.2955L6.7045 12.7955C6.26517 12.3562 6.26517 11.6438 6.7045 11.2045L14.2045 3.7045C14.6438 3.26517 15.3562 3.26517 15.7955 3.7045Z"
              fill="#323238"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor-pointer mr-2"
            onClick={() => handlePreviousPage()}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7955 3.7045C16.2348 4.14384 16.2348 4.85616 15.7955 5.2955L9.09099 12L15.7955 18.7045C16.2348 19.1438 16.2348 19.8562 15.7955 20.2955C15.3562 20.7348 14.6438 20.7348 14.2045 20.2955L6.7045 12.7955C6.26517 12.3562 6.26517 11.6438 6.7045 11.2045L14.2045 3.7045C14.6438 3.26517 15.3562 3.26517 15.7955 3.7045Z"
              fill="#00875F"
            />
          </svg>
        )}

        {currentPageSpans.map((index) => (
          <span
            key={index}
            className={`w-full max-w-40 h-40 flex justify-center items-center ${
              currentPage === index
                ? "bg-color-primary-1 text-white"
                : "bg-grey-4 text-grey-6"
            }  font-bold text-base mx-1 rounded-def`}
          >
            {index}
          </span>
        ))}

        {currentPage !== totalPages ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor-pointer ml-2"
            onClick={() => handleNextPage()}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2045 3.7045C8.64384 3.26517 9.35616 3.26517 9.7955 3.7045L17.2955 11.2045C17.7348 11.6438 17.7348 12.3562 17.2955 12.7955L9.7955 20.2955C9.35616 20.7348 8.64384 20.7348 8.2045 20.2955C7.76517 19.8562 7.76517 19.1438 8.2045 18.7045L14.909 12L8.2045 5.2955C7.76517 4.85616 7.76517 4.14384 8.2045 3.7045Z"
              fill="#00875F"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.2045 3.7045C8.64384 3.26517 9.35616 3.26517 9.7955 3.7045L17.2955 11.2045C17.7348 11.6438 17.7348 12.3562 17.2955 12.7955L9.7955 20.2955C9.35616 20.7348 8.64384 20.7348 8.2045 20.2955C7.76517 19.8562 7.76517 19.1438 8.2045 18.7045L14.909 12L8.2045 5.2955C7.76517 4.85616 7.76517 4.14384 8.2045 3.7045Z"
              fill="#323238"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export { List };
