import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  className?: string;
}

export function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-black px-2.5 py-2 text-xs font-medium text-white",
        className
      )}
    >
      {text}
    </span>
  );
}
