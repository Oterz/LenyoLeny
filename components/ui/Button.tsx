import Link from "next/link";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary: "bg-[#3c83f6] hover:bg-[#3c83f6]/80 text-white",
  secondary: "bg-white text-black hover:bg-white/80 ",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  className = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
