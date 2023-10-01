import { TransactionContext } from "@/contexts/transaction.context";
import { transactionSchema } from "@/schemas/transaction.schema";
import { useContext, useState } from "react";
import { IModal } from "@/interfaces";
import { Button } from "./Button";
import { Input } from "./Input";
import * as zod from "zod";

type FormData = zod.infer<typeof transactionSchema>;

const Modal = ({ setModal }: IModal) => {
  const { addTransaction } = useContext(TransactionContext);

  const [option, setOption] = useState<string>("");
  const [prohibited, setProhibited] = useState<boolean>(false);
  const [exit, setExit] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    id: "",
    description: "",
    price: "",
    category: "",
    option: "Entradas",
    created_at: new Date(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitFunction = () => {
    const data: FormData = {
      ...formData,
      id: crypto.randomUUID(),
      created_at: new Date(),
      option: option === "Entradas" ? "Entradas" : "Saídas",
    };

    addTransaction(data);

    setFormData({
      id: "",
      description: "",
      price: "",
      category: "",
      option: "Entradas",
      created_at: new Date(),
    });
    setOption("");
    setProhibited(false);
    setExit(false);

    setModal(false);
  };

  return (
    <div className="w-full max-w-535 h-528 bg-grey-2 py-10 px-12 rounded-def shadow-default animate-form max-sm:max-w-none max-sm:h-478 max-sm:rounded-t-20 max-sm:py-7 max-sm:px-5 max-sm:animate-form-mobile">
      <div className="w-full max-w-439 flex justify-end m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="cursor-pointer"
          onClick={() => setModal(false)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
            fill="#7C7C8A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
            fill="#7C7C8A"
          />
        </svg>
      </div>

      <form
        className="w-full max-w-439 m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFunction();
        }}
      >
        <h2 className="font-bold text-2xl text-grey-8 mb-8 max-sm:mb-5">
          Nova transação
        </h2>

        <div className="w-full h-194 flex flex-col justify-between max-sm:h-186">
          <Input
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Descrição"
          />
          <Input
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Preço"
            type="number"
          />
          <Input
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Categoria"
          />
        </div>

        <div className="w-full flex flex-row justify-between items-center mt-6 mb-10">
          <button
            type="button"
            className={`w-full max-w-211 h-58 flex justify-center items-center ${
              prohibited ? "bg-color-primary-4" : "bg-grey-3"
            } rounded-def mr-4`}
            onClick={() => {
              setOption("Entradas");
              setProhibited(true);
              setExit(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 3.75C7.69365 3.75 4 7.44365 4 12C4 16.5563 7.69365 20.25 12.25 20.25C16.8063 20.25 20.5 16.5563 20.5 12C20.5 7.44365 16.8063 3.75 12.25 3.75ZM2.5 12C2.5 6.61522 6.86522 2.25 12.25 2.25C17.6348 2.25 22 6.61522 22 12C22 17.3848 17.6348 21.75 12.25 21.75C6.86522 21.75 2.5 17.3848 2.5 12Z"
                fill="#00B37E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2499 7.5C12.4488 7.5 12.6396 7.57902 12.7802 7.71967L15.9584 10.8978C16.2513 11.1907 16.2513 11.6656 15.9584 11.9585C15.6655 12.2513 15.1906 12.2513 14.8977 11.9585L12.2499 9.31066L9.60211 11.9585C9.30921 12.2513 8.83434 12.2513 8.54145 11.9585C8.24855 11.6656 8.24855 11.1907 8.54145 10.8978L11.7196 7.71967C11.8602 7.57902 12.051 7.5 12.2499 7.5Z"
                fill="#00B37E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 7.5C12.6642 7.5 13 7.83579 13 8.25L13 15.75C13 16.1642 12.6642 16.5 12.25 16.5C11.8358 16.5 11.5 16.1642 11.5 15.75L11.5 8.25C11.5 7.83579 11.8358 7.5 12.25 7.5Z"
                fill="#00B37E"
              />
            </svg>
            Entrada
          </button>

          <button
            type="button"
            className={`w-full max-w-211 h-58 flex justify-center items-center ${
              exit ? "bg-red-2" : "bg-grey-3"
            } rounded-def`}
            onClick={() => {
              setOption("Saídas");
              setProhibited(false);
              setExit(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 3.75C7.69365 3.75 4 7.44365 4 12C4 16.5563 7.69365 20.25 12.25 20.25C16.8063 20.25 20.5 16.5563 20.5 12C20.5 7.44365 16.8063 3.75 12.25 3.75ZM2.5 12C2.5 6.61522 6.86522 2.25 12.25 2.25C17.6348 2.25 22 6.61522 22 12C22 17.3848 17.6348 21.75 12.25 21.75C6.86522 21.75 2.5 17.3848 2.5 12Z"
                fill="#F75A68"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.54145 12.0414C8.83434 11.7486 9.30921 11.7486 9.60211 12.0414L12.2499 14.6892L14.8977 12.0414C15.1906 11.7486 15.6655 11.7486 15.9584 12.0414C16.2513 12.3343 16.2513 12.8092 15.9584 13.1021L12.7802 16.2802C12.4873 16.5731 12.0125 16.5731 11.7196 16.2802L8.54145 13.1021C8.24855 12.8092 8.24855 12.3343 8.54145 12.0414Z"
                fill="#F75A68"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 7.5C12.6642 7.5 13 7.83579 13 8.25L13 15.75C13 16.1642 12.6642 16.5 12.25 16.5C11.8358 16.5 11.5 16.1642 11.5 15.75L11.5 8.25C11.5 7.83579 11.8358 7.5 12.25 7.5Z"
                fill="#F75A68"
              />
            </svg>
            Saída
          </button>
        </div>

        <Button
          type="submit"
          text="Cadastrar"
          hoverBorder="hover:border-color-primary-2"
        />
      </form>
    </div>
  );
};

export { Modal };
