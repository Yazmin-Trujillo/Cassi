import { twMerge } from "tailwind-merge";
type Props = {
  contenido: string;
  className: string;
};
export const H2 = ({ contenido, className }: Props) => {
  return (
    <h2
      className={twMerge(
        "text-4xl font-display font-bold text-primary md:mb-3",
        className
      )}
    >
      {contenido}
    </h2>
  );
};
