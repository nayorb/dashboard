import React, { PropsWithChildren } from "react";

export type CardProps = PropsWithChildren<{
  title: string;
  image: string;
}>;

const Card = ({ title, image, children }: CardProps) => {
  return (
    <div className="max-w-md bg-white rounded-xl drop-shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {image && <img className="md:w-1/3 md:h-full object-cover" src={image} alt={title} />}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
