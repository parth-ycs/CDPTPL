import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

const variants = {
  light: {
    pill: "border border-brand-medium bg-white text-brand-medium hover:bg-brand-medium hover:text-white",
    circle:
      "bg-brand-medium text-white group-hover:bg-white group-hover:text-brand-medium",
  },
  dark: {
    pill: "border border-brand-medium bg-brand-medium text-white hover:bg-white hover:text-brand-medium",
    circle:
      "bg-white text-brand-medium group-hover:bg-brand-medium group-hover:text-white",
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