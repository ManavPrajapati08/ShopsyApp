import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground transition-colors", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      logo: "text-2xl font-black tracking-tighter bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "normal",
    align: "left",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "label";
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, weight, align, as, ...props }, ref) => {
    const Component = as || (variant && ["h1", "h2", "h3", "h4", "p"].includes(variant) ? (variant as any) : "p");

    return (
      <Component
        className={cn(typographyVariants({ variant, weight, align, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
