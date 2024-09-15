import { ImageProps as NextImageProps } from "next/image";
import React from "react";
import AshLink from "./ash-link";

type ImageType = "regular" | "cover";

interface AshImageProps extends Omit<NextImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  type?: ImageType;
  caption?: string;
  coverCreditTitle?: string;
  coverCreditLink?: string;
}

const AshImage: React.FC<AshImageProps> = ({
  src,
  alt,
  type = "regular",
  caption,
  coverCreditTitle,
  coverCreditLink,
  width,
  height,
}) => {
  return (
    <figure className={type === "cover" ? "image-cover" : "image-regular"}>
      <img src={src} alt={alt} width={width} height={height} className="border border-[#1d1d1d73]" />
      {caption && <figcaption>{caption}</figcaption>}
      {type === "cover" && coverCreditTitle && coverCreditLink && (
        <figcaption className="text-[10px] text-gray-500 mt-2 pr-0.5 text-end w-full">
          Source Credit:{" "}
          <AshLink href={coverCreditLink} color="yellow">{coverCreditTitle}</AshLink>
        </figcaption>
      )}
    </figure>
  );
};

export default AshImage;
