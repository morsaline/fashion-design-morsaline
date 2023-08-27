import React from "react";

const PageItem = ({ item }) => {
  const { id, image, title, price, description } = item;
  return (
    <div className="w-full bg-base-100 drop-shadow-md">
      <figure className=" md:px-5 flex justify-center py-16 mx-auto">
        <img
          className="w-[250px] object-cover h-[200px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body justify-start ">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageItem;
