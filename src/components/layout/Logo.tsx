import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md";
};

const sizes = {
  sm: { px: 40, className: "w-10 h-10" },
  md: { px: 56, className: "w-11 h-11 lg:w-14 lg:h-14" },
};

export default function Logo({ size = "md" }: LogoProps) {
  const { px, className } = sizes[size];

  return (
    <Image
      src="/images/g-projects-logo.webp"
      alt="G Projects"
      width={px}
      height={px}
      className={`${className} object-contain flex-shrink-0`}
      sizes={`${px}px`}
      unoptimized
    />
  );
}
