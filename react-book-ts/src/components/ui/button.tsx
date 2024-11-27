import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
  // "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-[#528DFB] to-[#0C53D5] border border-[#0C53D5] box-border text-white hover:opacity-95 transition-all duration-75",



        // destructive:
        //   "bg-gradient-to-b from-[#FC2C4D] to-[#F22A35] border border-[#F22A35] box-border text-white hover:opacity-95 transition-all duration-75",

        destructive:
        "bg-[#FEF1F2] border border-[#FEEFF0] box-border text-[#F23041] hover:bg-[#FEEFF0] transition-all duration-75 hover:text-[#FE655F]",

        secondary:
          "border border-[#0C53D5] box-border text-[#0C53D5] hover:bg-[#EAF1FE] hover:text-[#3B69DC]",

        teritary:
          "order border-[#C3D6FB] box-border text-[#0055F7] bg-[#EAF1FE] hover:text-[#5986EF]",

        outline:
          "border border-[#E7EBF0] box-border text-[#495067] transition-all duration-200 hover:bg-[#EFF1F6]",


        ghost:
          "border-transparent hover:bg-[#E7EBF0] text-[#495067] transition-all duration-200",

        outlineShadow: "border border-[#E7EBF0] text-[#495067] transition-all duration-300 ease-in-out hover:shadow-[0_4px_6px_-1px_#E7EBF0]",
        muted:
          "bg-[#F6F8FA] text-[#495067] hover:bg-[#F3F6F8]"

      },
      size: {
        default: "h-[38px] px-4 py-2",
        sm: "h-8 px-3",
        xs: "h-7 px-2 text-xs",
        md: "h-[38px] px-4",
        lg: "h-[42px] px-5 text-md",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
