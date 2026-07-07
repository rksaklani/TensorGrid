import Image from "next/image";

type BrandLogoProps = {
  variant?: "icon" | "full";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "full",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src = variant === "icon" ? "/brand/logo-icon.png" : "/brand/logo.png";
  const width = variant === "icon" ? 40 : 180;
  const height = variant === "icon" ? 40 : 56;

  return (
    <Image
      src={src}
      alt="TensorGrid"
      width={width}
      height={height}
      className={`brand-logo brand-logo-${variant} ${className}`.trim()}
      priority={priority}
    />
  );
}
