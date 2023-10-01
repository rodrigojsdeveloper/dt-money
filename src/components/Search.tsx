"use client";
import { TransactionContext } from "@/contexts/transaction.context";
import { useContext, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const Search = () => {
  const { filteredTransactions, handleSearchTransactions } =
    useContext(TransactionContext);

  const [transaction, setTransaction] = useState<string>("");

  const transactionsLength = filteredTransactions.length;

  return (
    <div className="w-full max-w-1119 flex flex-col mt-16 mb-6 mx-auto max-sm:mb-2.5">
      {transactionsLength > 0 ? (
        <div className="w-full flex flex-row justify-between items-center mb-2 px-6 sm:hidden">
          <p className="font-normal text-lg text-grey-7">Transactions</p>

          <span className="font-normal text-base text-grey-5">
            {transactionsLength > 1
              ? `${transactionsLength} items`
              : `${transactionsLength} item`}
          </span>
        </div>
      ) : null}

      <div className="w-full flex flex-row justify-between items-center px-6">
        <Input
          margin="mr-4"
          marginMedia="max-sm:mr-2"
          placeholder="Search for a transaction"
          name="search"
          onChange={(e) => setTransaction(e.target.value)}
        />
        <Button
          text="Search"
          height="h-54"
          isSearch={true}
          maxWidth="max-w-147"
          background="bg-grey-2"
          color="text-color-primary-1"
          active="active:bg-color-primary-4"
          hoverBackground="hover:bg-color-primary-3"
          mediaGrey="max-sm:max-w-54 max-sm:p-0"
          isGrey={true}
          onClick={() => handleSearchTransactions(transaction)}
        />
      </div>
    </div>
  );
};

export { Search };
