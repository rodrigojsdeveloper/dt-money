import { IChildren } from "@/interfaces";

const ModalBackground = ({ children, isLoading }: IChildren) => {
  return (
    <div
      className={`w-full h-screen fixed inset-0 flex flex-row justify-center items-center z-50 bg-shadow px-5 max-sm:bottom-0 max-sm:items-end max-sm:px-0 ${isLoading}`}
    >
      {children}
    </div>
  );
};

export { ModalBackground };
