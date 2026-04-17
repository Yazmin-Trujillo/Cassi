import { ButtonType, Icon } from "@/app/types";
import { changeIcon } from "@/app/utils";
import { twMerge } from "tailwind-merge";
type Props = {
  children?: string;
  type: ButtonType;
  content?: string;
  icon?: Icon;
  onlyIcon?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconTransition?: boolean;
  classNameButton?: string;
  classNameContent?: string;
};
export const Button = ({
  children,
  type,
  icon,
  onlyIcon,
  iconLeft,
  iconRight,
  iconTransition,
  classNameButton,
  classNameContent,
}: Props) => {
  const classNameType = (() => {
    switch (type) {
      case "Primary":
        return "bg-primary text-white hover:bg-secondary shadow-lg shadow-primary/50";
      case "Secondary":
        return "bg-white hover:border-secondary hover:text-secondary";
      case "OnlyIcon":
        return "p-4 rounded-full";
      case "Text":
        return "border-transparent hover:border-transparent hover:text-secondary";
      default:
        return "";
    }
  })();

  console.log("solo icono", type, iconLeft);
  return (
    <button
      className={twMerge(
        "group cursor-pointer py-2 px-4 text-base text-primary rounded-xl font-semibold flex items-center gap-2 border-2 border-primary hover:border-secondary",
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
      {type === "OnlyIcon" ? (
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
