import { IButtonProps } from "@/interfaces";

const Button = ({
  isSearch,
  text,
  type,
  maxWidth,
  height,
  color,
  background,
  hoverBackground,
  hoverBorder,
  active,
  media,
  mediaGrey,
  isGrey,
  onClick,
  absolute,
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full ${absolute ? absolute : ""} ${
        maxWidth ? maxWidth : "max-w-none"
      } ${height ? height : "h-50"} flex justify-center items-center ${
        background ? background : "bg-color-primary-1"
      } border border-solid border-color-primary-1 font-bold text-sm ${
        color ? color : "text-white"
      } rounded-def p-3 ${
        hoverBackground ? hoverBackground : "hover:bg-color-primary-2"
      } ${hoverBorder ? hoverBorder : ""} ${active ? active : ""} ${
        media ? media : ""
      } ${mediaGrey ? mediaGrey : ""}`}
    >
      {isSearch ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-3 max-sm:mr-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.0625 3.4375C5.9559 3.4375 3.4375 5.9559 3.4375 9.0625C3.4375 12.1691 5.9559 14.6875 9.0625 14.6875C12.1691 14.6875 14.6875 12.1691 14.6875 9.0625C14.6875 5.9559 12.1691 3.4375 9.0625 3.4375ZM1.5625 9.0625C1.5625 4.92036 4.92036 1.5625 9.0625 1.5625C13.2046 1.5625 16.5625 4.92036 16.5625 9.0625C16.5625 13.2046 13.2046 16.5625 9.0625 16.5625C4.92036 16.5625 1.5625 13.2046 1.5625 9.0625Z"
            fill="#00875F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0402 13.0402C13.4063 12.6741 13.9999 12.6741 14.366 13.0402L18.1629 16.8371C18.529 17.2032 18.529 17.7968 18.1629 18.1629C17.7968 18.529 17.2032 18.529 16.8371 18.1629L13.0402 14.366C12.6741 13.9999 12.6741 13.4063 13.0402 13.0402Z"
            fill="#00875F"
          />
        </svg>
      ) : null}

      <p className={`${isGrey ? "max-sm:hidden" : ""}`}>{text}</p>
    </button>
  );
};

export { Button };
