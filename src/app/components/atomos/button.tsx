import { ButtonType, Icon } from "@/app/types";
import { twMerge } from "tailwind-merge";
type Props = {
  children?: string;
  kind: ButtonType;
  icon?: Icon;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconTransition?: boolean;
  classNameButton?: string;
  classNameContent?: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
  //loading?: boolean;
};

export const Button = ({
  children,
  kind,
  icon,
  iconLeft,
  iconRight,
  iconTransition,
  classNameButton,
  classNameContent,
  type,
  onClick,
}: Props) => {
  // To Do: manejar 3 medidas de iconos
  const classNameType = (() => {
    switch (kind) {
      case "Primary":
        return "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/50";
      case "Secondary":
        return "bg-secondary border-secondary text-white hover:bg-primary hover:border-primary transition-colors";
      case "Outlined":
        return "bg-white hover:border-secondary hover:text-secondary";
      case "Icon":
        return "p-4 rounded-full hover:text-secondary";
      case "Text":
        return "border-transparent hover:border-transparent hover:text-secondary";
      default:
        return "";
    }
  })();

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className={twMerge(
        "group cursor-pointer py-2 px-4 text-base text-primary rounded-xl font-semibold flex items-center justify-center gap-2 border-2 border-primary hover:border-secondary",
        classNameType,
        classNameButton,
      )}
    >
      {iconLeft ? (
        <svg
          className={`w-5 h-5 ${iconTransition ? "group-hover:scale-125 transition duration-500" : ""}`}
        >
          <use href={`sprite.svg#${icon}`}></use>
        </svg>
      ) : null}

      {/*<span className="">iconLeft</span>*/}
      {kind === "Icon" ? (
        <svg
          className={`w-5 h-5 ${iconTransition ? "group-hover:scale-125 transition duration-300" : ""}`}
        >
          <use href={`sprite.svg#${icon}`}></use>
        </svg>
      ) : (
        <span className={twMerge("", classNameContent)}>{children}</span>
      )}
      {iconRight ? (
        <svg
          className={`w-5 h-5 ${iconTransition ? "group-hover:scale-125 transition duration-500" : ""}`}
        >
          <use href={`sprite.svg#${icon}`}></use>
        </svg>
      ) : null}
    </button>
  );
};
