import { Button } from "./Button";
import { Input } from "./Input";

const Search = () => {
  return (
    <div className="w-full max-w-1119 flex flex-row justify-between items-center mt-16 mb-6 mx-auto">
      <div className="w-full flex flex-row justify-between items-center mx-6">
        <Input
          margin="mr-4"
          marginMedia="max-sm:mr-2.5"
          placeholder="Busque uma transação"
        />
        <Button
          text="Buscar"
          height="h-54"
          isSearch={true}
          maxWidth="max-w-147"
          background="bg-grey-2"
          color="text-color-primary-1"
          active="active:bg-color-primary-4"
          hoverBackground="hover:bg-color-primary-3"
          mediaGrey="max-sm:max-w-54 max-sm:p-0"
          isGrey={true}
        />
      </div>
    </div>
  );
};

export { Search };
