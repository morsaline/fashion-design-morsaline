import React, { useEffect, useState } from "react";
// import ReactImageMagnify from 'react-image-magnify';
import zomeImg1 from "../../assets/WomanNewItems/img1.png";
import zomeImg2 from "../../assets/WomanNewItems/img2.png";
import zomeImg3 from "../../assets/WomanNewItems/img3.png";
import zomeImg4 from "../../assets/WomanNewItems/img4.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from "react-rating";
import { Icon } from "@iconify/react";
import ProductCouter from "../ProductCouter/ProductCouter";
import { Helmet } from "react-helmet";
import Discount50 from "../Discount50/Discount50";
import { Link, useParams } from "react-router-dom";
import { getIems, getSingleItem } from "../../Api/ApiService";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { useSelector } from "react-redux";
// import { getIems } from "../../Api/ApiService";

const SingleProductDetails = () => {
  const [singleItemDetails, setSingleItemDetails] = useState([]);
  const [cart, setCart] = useState([]);

  const { title, image, price, description } = singleItemDetails;
  const { _id } = useParams();

  // const handleAddToCart = (product) => {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   addToDb(product.id);
  //   console.log("cart");
  // };

  useEffect(() => {
    getSingleItem(_id).then((singleData) => setSingleItemDetails(singleData));
  }, []);

  // let itemsData = useSelector((state) => {
  //   return state.items;
  // });

  // const itemsDatas = itemsData.data;
  // // console.log(itemsDatas);
  // useEffect(() => {
  //   const storedCart = getStoredCart();
  //   const savedCart = [];
  //   console.log(storedCart);
  //   for (const id in storedCart) {
  //     const addedProduct = itemsDatas?.find((item) => item.id === id);
  //     console.log(addedProduct);
  //     if (addedProduct) {
  //       let quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       savedCart.push(addedProduct);
  //     }
  //     // console.log(id);
  //   }
  //   setCart(savedCart);
  //   // console.log(savedCart);
  //   // console.log("jjj");
  // }, []);

  const images = [
    {
      original: `${image}`,
      thumbnail: `${zomeImg1}`,
    },
    {
      original: `${zomeImg2}`,
      thumbnail: `${zomeImg2}`,
    },
    {
      original: `${zomeImg3}`,
      thumbnail: `${zomeImg3}`,
    },
    {
      original: `${zomeImg4}`,
      thumbnail: `${zomeImg4}`,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>UrbanUtopia | Signle Product</title>
      </Helmet>
      <div className="container mx-auto pt-36 pb-10 px-4 lg:px-0">
        <div className="lg:flex justify-center relative">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-20 ">
            <div className="w-full lg:w-6/12 md:w-6/12">
              <ImageGallery
                showPlayButton={false}
                slideOnThumbnailOver={true}
                showFullscreenButton={false}
                slideDuration={50}
                items={images}
              />
            </div>
            <div className="w-full lg:w-6/12 md:w-6/12">
              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full">
                    <span className="prodcutSize text-3xl">S</span>
                  </div>
                  <div className="w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full">
                    <span className="prodcutSize text-3xl">M</span>
                  </div>
                  <div className="w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full">
                    <span className="prodcutSize text-3xl">L</span>
                  </div>
                </div>
                <h2 className="text-4xl font-semibold">{title}</h2>
                <p>{description}</p>
                <div className="flex gap-5">
                  <Rating
                    readonly
                    placeholderRating={4.5}
                    emptySymbol={<Icon icon="ic:baseline-star-half" />}
                    placeholderSymbol={<Icon icon="ic:baseline-star" />}
                    fullSymbol={<Icon icon="ic:baseline-star" />}
                    className="text-2xl text-[#40F223]"
                  ></Rating>
                  <span>7.5k Ratings</span>
                </div>
                <div className="lg:flex items-center ">
                  <div>
                    <h2 className="text-5xl font-bold  my-8">{price}</h2>
                    <div className="flex gap-5">
                      <ProductCouter
                        singleItemDetails={singleItemDetails}
                      ></ProductCouter>
                      <div className="flex justify-center items-center rounded-none w-52 h-12 text-2xl font-semibold bg-transparent border hover:bg-transparent hover:border-black border-black normal-case">
                        240$
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-no-wrap flex-wrap gap-5 mt-20">
                  <Link
                    to="/cart"
                    className="btn rounded-none w-52 h-12 text-xl bg-transparent border hover:border-[#3B95B0] hover:text-[#3B95B0] hover:bg-transparent border-black normal-case"
                  >
                    <button onClick={() => handleAddToCart(singleItemDetails)}>
                      {" "}
                      add to cart
                    </button>
                  </Link>
                  <Link
                    to="/productPurchasePage"
                    className="btn rounded-none w-52 h-12 text-xl border-0 bg-[#0C4E67] hover:bg-[#3B95B0] text-white normal-case"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute 2xl:top-32 2xl:right-64 xl:top-32 xl:right-32 lg:top-32 lg:right-0 md:top-28 md:right-0 -top-36 right-16">
              <Discount50></Discount50>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
