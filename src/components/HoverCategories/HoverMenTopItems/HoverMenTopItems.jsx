import React, { useEffect, useState } from "react";
import Category from "../../Category/Category";
import { getCategory } from "../../../Api/ApiService";

const HoverMenTopItems = () => {
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(5);
  useEffect(() => {
    const categoryData = async () => {
      const data = await getCategory();
      setCategories(data);
    };
    categoryData();
  }, []);
  return (
    <div className="container mx-auto my-10">
      <div className="bg-white mt-10">
        <h1 className="text-2xl my-5">Top Category</h1>
        <div className="flex gap-8">
          {categories.slice(0, quantity)?.map((category, idx) => (
            <Category key={idx} category={category}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverMenTopItems;
