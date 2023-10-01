import { IChildren } from "@/interfaces";

const ModalBackground = ({ children }: IChildren) => {
  return (
    <div className="w-full h-screen overflow-auto fixed inset-0 flex flex-row justify-center items-center z-50 bg-shadow px-5">
      {children}
    </div>
  );
};

export { ModalBackground };
