import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  padding?: "sm" | "md" | "lg" | "xl" | "none";
  background?: "white" | "gray" | "black" | "transparent";
  containerSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  id?: string;
}

const paddingClasses = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-24",
  xl: "py-24 sm:py-32"
};

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  black: "bg-black text-white",
  transparent: "bg-transparent"
};

export function Section({
  children,
  className,
  containerClassName,
  padding = "lg",
  background = "transparent",
  containerSize = "xl",
  id
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}