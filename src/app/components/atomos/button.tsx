import { ButtonType, Icon } from "@/app/types";
import { twMerge } from "tailwind-merge";
type Props = {
  children?: string;
  severity: ButtonType;
  icon?: Icon;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconTransition?: boolean;
  classNameButton?: string;
  classNameContent?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
};
export const Button = ({
  children,
  severity,
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
    switch (severity) {
      case "Primary":
        return "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/50";
      case "Secondary":
        return "bg-white hover:border-secondary hover:text-secondary";
      case "Tertiary":
        return "bg-secondary border-secondary text-white hover:bg-primary hover:border-primary transition-colors";
      case "OnlyIcon":
        return "p-4 rounded-full";
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
      {severity === "OnlyIcon" ? (
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
