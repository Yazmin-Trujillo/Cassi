import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "../atomos/button";

type Props = {
  title: string;
  content: string;
  titleClassName?: string;
  button?: boolean;
  buttonContent?: string;
  link?: string;
};

export const Header = ({
  title,
  content,
  titleClassName,
  button,
  buttonContent,
  link,
}: Props) => {
  return (
    <div className="flex items-center justify-between mb-12">
      <div>
        <h2
          className={twMerge(
            "text-4xl font-display font-bold text-primary md:mb-3",
            titleClassName,
          )}
        >
          {title}
        </h2>
        <p className="hidden md:flex">{content}</p>
      </div>
      {button ? (
        <Link href={link ?? ""}>
          <Button kind="Text">{buttonContent}</Button>
        </Link>
      ) : null}
    </div>
  );
};
