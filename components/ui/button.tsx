import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

/* ------------------------------------------------------------------ */
/* REUSABLE PILL BUTTON  (components/ui/button.tsx)                    */
/*                                                                     */
/*   <Button href="/contact">Contact Us</Button>                       */
/*   <Button href="/about" variant="dark">Learn more</Button>          */
/*                                                                     */
/* Per-section overrides (className wins over the defaults):           */
/*   <Button                                                           */
/*     href="/quote"                                                   */
/*     className="border-brand-red bg-brand-red hover:bg-white"        */
/*     circleClassName="bg-white text-brand-red"                       */
/*   >                                                                 */
/*     Get a quote                                                     */
/*   </Button>                                                         */
/*                                                                     */
/* Renders an <a> when `href` is passed, otherwise a <button>.         */
/* ------------------------------------------------------------------ */

const variants = {
  light: {
    pill: "border border-brand-blue bg-white text-[#041326] hover:bg-brand-blue hover:text-white",
    circle:
      "bg-brand-blue text-white group-hover:bg-white group-hover:text-brand-blue",
  },
  dark: {
    pill: "border border-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue",
    circle:
      "bg-white text-brand-blue group-hover:bg-brand-blue group-hover:text-white",
  },
} as const;

const sizes = {
  sm: { pill: "gap-5 py-2 pl-5 pr-1.5 text-[13px]", circle: "h-5 w-5", icon: 14 },
  md: { pill: "gap-6 py-2 pl-7 pr-2 text-[15px]", circle: "h-10 w-10", icon: 16 },
} as const;

type Common = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Stretch to the full width of the parent (label left, arrow right). */
  fullWidth?: boolean;
  /** Set to false to hide the arrow circle. */
  showArrow?: boolean;
  /** Extra classes for the pill. Placed last, so they override the defaults. */
  className?: string;
  /** Extra classes for the arrow circle. Placed last, so they override the defaults. */
  circleClassName?: string;
  /** Extra classes for the arrow icon itself (size is set with `size`). */
  iconClassName?: string;
  children: ReactNode;
};

type AnchorProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof Common> & {
    href: string;
  };

type NativeButtonProps = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Common> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const {
    variant = "light",
    size = "md",
    fullWidth = false,
    showArrow = true,
    className = "",
    circleClassName = "",
    iconClassName = "",
    children,
    ...rest
  } = props;

  const v = variants[variant];
  const s = sizes[size];

  // twMerge drops any default class that conflicts with one passed in
  // `className`, so overrides always win regardless of CSS order.
  const classes = twMerge(
    "group inline-flex items-center rounded-full font-medium transition-colors duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
    fullWidth && "w-full justify-between",
    s.pill,
    v.pill,
    className
  );

  const circleClasses = twMerge(
    "flex shrink-0 items-center justify-center rounded-full transition-colors duration-300",
    s.circle,
    v.circle,
    circleClassName
  );

  const iconClasses = twMerge(
    "-rotate-45 transition-transform duration-300 group-hover:rotate-0",
    iconClassName
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className={circleClasses}>
          <ArrowRight size={s.icon} aria-hidden="true" className={iconClasses} />
        </span>
      )}
    </>
  );

  if (typeof props.href === "string") {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {content}
    </button>
  );
}

export { Button };