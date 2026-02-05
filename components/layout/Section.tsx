import { cn } from "../../lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  id?: string;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Section<T extends ElementType = "section">({
  as,
  className,
  children,
  id,
  ...props
}: SectionProps<T>) {
  const Tag = as || "section";

  return (
    <Tag id={id} className={cn("py-5 lg:py-10", className)} {...props}>
      {children}
    </Tag>
  );
}
